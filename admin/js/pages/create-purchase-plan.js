;(function () {
  const planLines = [
    {
      id: 'LINE-001',
      sourceIds: ['REQ-202608-001', 'REQ-202608-002'],
      materialCode: 'MAT-GB-A01',
      materialName: '瓶盖',
      category: '包装材料',
      spec: '28mm / 食品级',
      unit: '个',
      sourceQty: 200000,
      planQty: 180000,
      estimatedUnitPrice: 0.08,
      windowDate: '2026-09-10',
      merged: true,
      remark: '优先覆盖9月上旬生产排产',
      departments: [
        { name: '厦门分厂', sourceQty: 120000, planQty: 108000, demandTime: '2026-09-10' },
        { name: '漳州分厂', sourceQty: 80000, planQty: 72000, demandTime: '2026-09-10' },
      ],
    },
    {
      id: 'LINE-002',
      sourceIds: ['REQ-202608-006'],
      materialCode: 'MAT-BLT-16',
      materialName: '高强螺栓 B',
      category: '标准件',
      spec: 'M16*80 / 10.9级',
      unit: '件',
      sourceQty: 3000,
      planQty: 3000,
      estimatedUnitPrice: 1.8,
      windowDate: '2026-09-08',
      merged: false,
      remark: '',
      departments: [{ name: '福州分厂', sourceQty: 3000, planQty: 3000 }],
    },
    {
      id: 'LINE-003',
      sourceIds: ['REQ-202608-003'],
      materialCode: 'MAT-MTR-07',
      materialName: '伺服电机',
      category: '机电',
      spec: '7.5KW / IP55',
      unit: '台',
      sourceQty: 12,
      planQty: 12,
      estimatedUnitPrice: 8600,
      windowDate: '2026-09-01',
      merged: false,
      remark: '需核对设备型号兼容性',
      departments: [{ name: '泉州分厂', sourceQty: 12, planQty: 12 }],
    },
  ]

  const columns = [
    { title: '明细编号', dataIndex: 'id', width: 120 },
    { title: '物料信息', dataIndex: 'materialName', minWidth: 190, slotName: 'material' },
    { title: '品类', dataIndex: 'category', width: 100 },
    { title: '采购部门', dataIndex: 'departments', width: 180, slotName: 'procurementDept' },
    { title: '期望需求时间', dataIndex: 'windowDate', width: 150 },
    { title: '原需求数量', dataIndex: 'sourceQty', width: 120, slotName: 'sourceQty' },
    { title: '本次计划数量', dataIndex: 'planQty', width: 170, slotName: 'planQty' },
    { title: '预计单价', dataIndex: 'estimatedUnitPrice', width: 145, slotName: 'estimatedUnitPrice' },
    { title: '预算总额', dataIndex: 'estimatedAmount', width: 130, slotName: 'estimatedAmount' },
    { title: '合并采购', dataIndex: 'merged', width: 100, slotName: 'merged' },
    { title: '部门拆分', dataIndex: 'departments', width: 130, slotName: 'departments' },
    { title: '备注', dataIndex: 'remark', width: 190, slotName: 'remark' },
    { title: '操作', dataIndex: 'operations', width: 90, slotName: 'operations', fixed: 'right' },
  ]

  const mergeCandidates = [
    {
      demandNo: 'REQ-202608-001',
      materialCode: 'MAT-GB-A01',
      materialName: '瓶盖',
      spec: '28mm / 食品级',
      factory: '厦门分厂',
      demandQty: 120000,
      unit: '个',
      demandTime: '2026-09-10',
    },
    {
      demandNo: 'REQ-202608-002',
      materialCode: 'MAT-GB-A01',
      materialName: '瓶盖',
      spec: '28mm / 食品级',
      factory: '漳州分厂',
      demandQty: 80000,
      unit: '个',
      demandTime: '2026-09-10',
    },
  ]

  const mergeCandidateColumns = [
    { title: '需求单号', dataIndex: 'demandNo', width: 150 },
    { title: '物料', dataIndex: 'materialName', width: 170, slotName: 'mergeMaterial' },
    { title: '工厂', dataIndex: 'factory', width: 110 },
    { title: '需求数量', dataIndex: 'demandQty', width: 120, slotName: 'mergeQty' },
    { title: '需求时间', dataIndex: 'demandTime', width: 120 },
  ]

  const demandPoolColumns = [
    { title: '需求编号', dataIndex: 'demandNo', width: 150 },
    { title: '需求类型', dataIndex: 'demandType', width: 110, slotName: 'demandType' },
    { title: '物料', dataIndex: 'materialName', width: 180, slotName: 'demandMaterial' },
    { title: '工厂', dataIndex: 'factory', width: 110 },
    { title: '需求数量', dataIndex: 'demandQty', width: 120, slotName: 'demandQty' },
    { title: '期望需求时间', dataIndex: 'demandTime', width: 130 },
  ]

  const CreatePurchasePlanPage = {
    name: 'CreatePurchasePlanPage',
    data() {
      return {
        form: {
          planName: '2026年9月集团普通采购计划',
          planClass: '普通采购计划',
          source: '需求池生成',
          org: '集团采购中心',
          description: '覆盖已审批分厂采购需求，相同物料与相同期望需求时间需由采购计划员确认后再合并。',
        },
        lines: planLines,
        columns,
        mergeCandidates,
        mergeCandidateColumns,
        mergeForm: {
          expectedDemandTime: '2026-09-10',
        },
        mergeVisible: false,
        demandVisible: false,
        selectedDemandKeys: [],
        demandPoolColumns,
        splitVisible: false,
        currentLine: null,
        submitting: false,
      }
    },
    mounted() {
      const params = new URLSearchParams(window.location.search)
      if (params.get('planClass') === 'urgent') {
        this.onPlanClassChange('紧急采购计划')
        this.form.planClass = '紧急采购计划'
      }
      if (params.get('planClass') === 'normal') {
        this.onPlanClassChange('普通采购计划')
        this.form.planClass = '普通采购计划'
      }
    },
    computed: {
      isUrgentPlan() {
        return this.form.planClass === '紧急采购计划'
      },
      totalPlanQty() {
        return this.lines.reduce((sum, row) => sum + Number(row.planQty || 0), 0)
      },
      mergedCount() {
        return this.lines.filter((row) => row.merged).length
      },
      totalAmount() {
        return this.lines.reduce((sum, row) => sum + this.lineAmount(row), 0)
      },
      mergeCandidateQty() {
        return this.mergeCandidates.reduce((sum, row) => sum + Number(row.demandQty || 0), 0)
      },
      mergeCandidateAmount() {
        return this.mergeCandidateQty * 0.08
      },
    },
    methods: {
      openDemandSelect() {
        this.demandVisible = true
      },
      onDemandSelectionChange(keys) {
        this.selectedDemandKeys = keys
      },
      confirmDemandSelect() {
        if (!this.selectedDemandKeys.length) {
          ArcoVue.Message.warning('请先选择需求池待计划明细')
          return
        }
        this.demandVisible = false
        ArcoVue.Message.success(`已从需求池选择 ${this.selectedDemandKeys.length} 条待计划需求`)
      },
      openMergeConfirm() {
        this.mergeVisible = true
      },
      confirmMerge() {
        const line = this.lines.find((row) => row.id === 'LINE-001')
        if (line) {
          line.windowDate = this.mergeForm.expectedDemandTime
          line.merged = true
          line.departments = this.mergeCandidates.map((item) => ({
            name: item.factory,
            sourceQty: item.demandQty,
            planQty: Math.round(item.demandQty * 0.9),
            demandTime: item.demandTime,
          }))
        }
        this.mergeVisible = false
        ArcoVue.Message.success('已确认合并，期望需求时间已写入计划明细')
      },
      openSplit(row) {
        if (!row.merged) return
        this.currentLine = row
        this.splitVisible = true
      },
      removeLine(row) {
        this.lines = this.lines.filter((item) => item.id !== row.id)
        ArcoVue.Message.success('已移除计划明细')
      },
      departmentText(row) {
        return row.departments.map((item) => item.name).join('、')
      },
      lineAmount(row) {
        return Number(row.planQty || 0) * Number(row.estimatedUnitPrice || 0)
      },
      formatMoney(value) {
        return `¥${Number(value || 0).toLocaleString('zh-CN', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`
      },
      onPlanClassChange(value) {
        if (value === '紧急采购计划') {
          this.form.planName = '2026年9月集团紧急采购计划'
        } else {
          this.form.planName = '2026年9月集团普通采购计划'
        }
      },
      syncDepartmentPlanQty(row) {
        if (!row.merged || !row.departments.length) return
        const ratio = Number(row.planQty || 0) / Number(row.sourceQty || 1)
        row.departments = row.departments.map((item) => ({
          ...item,
          planQty: Math.round(item.sourceQty * ratio * 100) / 100,
        }))
      },
      submitPlan() {
        this.submitting = true
        window.setTimeout(() => {
          this.submitting = false
          if (this.isUrgentPlan) {
            ArcoVue.Message.success('紧急采购计划已进入任务分配')
          } else {
            ArcoVue.Message.success('普通采购计划已保存，可提交计划审批')
          }
        }, 500)
      },
      saveDraft() {
        ArcoVue.Message.success('采购计划草稿已保存')
      },
    },
    template: `
      <div class="purchase-page">
        <div class="plan-step-layout">
          <div class="plan-side">
            <a-card class="general-card pro-page-card">
              <div class="purchase-section-title">创建步骤</div>
              <a-steps direction="vertical" :current="1">
                <a-step title="选择需求" description="来自集团需求池" />
                <a-step title="制定计划" description="填写计划信息并确认明细" />
                <a-step title="提交处理" :description="isUrgentPlan ? '紧急计划免审批' : '普通计划提交审批'" />
              </a-steps>
            </a-card>
          </div>

          <div class="plan-main">
            <a-card class="general-card pro-page-card">
              <div class="purchase-toolbar">
                <div>
                  <div class="purchase-section-title">计划基本信息</div>
                </div>
                <a-space>
                  <a-button @click="saveDraft">保存草稿</a-button>
                  <a-button type="primary" :loading="submitting" @click="submitPlan">
                    {{ isUrgentPlan ? '进入任务分配' : '保存并提交审批' }}
                  </a-button>
                </a-space>
              </div>

              <a-form :model="form" layout="vertical">
                <a-row :gutter="16">
                  <a-col :xs="24" :md="8">
                    <a-form-item label="采购计划名称" required>
                      <a-input v-model="form.planName" />
                    </a-form-item>
                  </a-col>
                  <a-col :xs="24" :md="8">
                    <a-form-item label="计划分类" required>
                      <a-select v-model="form.planClass" @change="onPlanClassChange">
                        <a-option value="普通采购计划">普通采购计划</a-option>
                        <a-option value="紧急采购计划">紧急采购计划</a-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :xs="24" :md="8">
                    <a-form-item label="计划来源">
                      <a-input v-model="form.source" disabled />
                    </a-form-item>
                  </a-col>
                  <a-col :xs="24" :md="8">
                    <a-form-item label="采购组织" required>
                      <a-select v-model="form.org">
                        <a-option value="集团采购中心">集团采购中心</a-option>
                        <a-option value="华东采购组织">华东采购组织</a-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :xs="24" :md="8">
                    <a-form-item label="计划总额">
                      <a-input :model-value="formatMoney(totalAmount)" readonly />
                    </a-form-item>
                  </a-col>
                  <a-col :span="24">
                    <a-form-item label="计划说明">
                      <a-textarea v-model="form.description" :auto-size="{ minRows: 2, maxRows: 4 }" />
                    </a-form-item>
                  </a-col>
                </a-row>
              </a-form>
            </a-card>

            <a-card class="general-card pro-page-card">
              <div class="purchase-toolbar">
                <div>
                  <div class="purchase-section-title">计划明细确认</div>
                </div>
                <a-space>
                  <a-button @click="openDemandSelect"><template #icon><icon-plus /></template>从需求池选择</a-button>
                  <a-button type="primary" status="success" @click="openMergeConfirm">确认合并候选</a-button>
                  <a-tag color="arcoblue">明细 {{ lines.length }} 条</a-tag>
                  <a-tag color="green">合并 {{ mergedCount }} 条</a-tag>
                  <a-tag color="purple">计划数量合计 {{ totalPlanQty }}</a-tag>
                  <a-tag color="orangered">计划总额 {{ formatMoney(totalAmount) }}</a-tag>
                </a-space>
              </div>

              <a-table
                :columns="columns"
                :data="lines"
                row-key="id"
                :pagination="false"
                :bordered="false"
                :scroll="{ x: 1580 }"
              >
                <template #material="{ record }">
                  <div>
                    <span>{{ record.materialName }}</span>
                    <div class="purchase-muted">{{ record.materialCode }}｜{{ record.spec }}</div>
                  </div>
                </template>
                <template #sourceQty="{ record }">{{ record.sourceQty }} {{ record.unit }}</template>
                <template #procurementDept="{ record }">
                  <div>{{ departmentText(record) }}</div>
                  <div v-if="record.merged" class="purchase-muted">多部门合并</div>
                </template>
                <template #planQty="{ record }">
                  <a-input-number
                    v-model="record.planQty"
                    :min="1"
                    :max="record.sourceQty"
                    style="width: 118px"
                    @change="() => syncDepartmentPlanQty(record)"
                  />
                  <span class="purchase-muted"> {{ record.unit }}</span>
                </template>
                <template #estimatedUnitPrice="{ record }">
                  <a-input-number
                    v-model="record.estimatedUnitPrice"
                    :min="0"
                    :precision="2"
                    style="width: 116px"
                  />
                </template>
                <template #estimatedAmount="{ record }">{{ formatMoney(lineAmount(record)) }}</template>
                <template #merged="{ record }">
                  <a-tag :color="record.merged ? 'green' : 'gray'">{{ record.merged ? '已合并' : '未合并' }}</a-tag>
                </template>
                <template #departments="{ record }">
                  <a-button v-if="record.merged" type="text" size="small" @click="openSplit(record)">查看拆分</a-button>
                  <span v-else class="purchase-muted">—</span>
                </template>
                <template #remark="{ record }">
                  <a-input v-model="record.remark" allow-clear placeholder="填写备注" />
                </template>
                <template #operations="{ record }">
                  <a-button type="text" status="danger" size="small" @click="removeLine(record)">移除</a-button>
                </template>
              </a-table>
            </a-card>
          </div>
        </div>

        <a-drawer
          v-if="splitVisible"
          :visible="true"
          :title="currentLine ? '各分厂需求拆分 - ' + currentLine.materialName : '各分厂需求拆分'"
          :width="560"
          unmount-on-close
          @cancel="splitVisible = false"
        >
          <div v-if="currentLine">
            <a-alert type="info" content="合并采购后，系统仍保留每个分厂的来源需求、计划覆盖数量、需求时间和预算金额。" style="margin-bottom: 16px" />
            <div class="department-split">
              <div v-for="item in currentLine.departments" :key="item.name" class="department-split-item">
                <div class="department-name">{{ item.name }}</div>
                <div class="department-qty">{{ item.planQty }} {{ currentLine.unit }}</div>
                <div class="purchase-muted">原需求 {{ item.sourceQty }} {{ currentLine.unit }}</div>
                <div class="purchase-muted">需求时间 {{ item.demandTime || currentLine.windowDate }}</div>
                <div class="purchase-muted">预算金额 {{ formatMoney(item.planQty * currentLine.estimatedUnitPrice) }}</div>
              </div>
            </div>
            <a-divider />
            <a-descriptions :column="2" bordered>
              <a-descriptions-item label="分厂数量合计">{{ currentLine.planQty }} {{ currentLine.unit }}</a-descriptions-item>
              <a-descriptions-item label="预算总额">{{ formatMoney(lineAmount(currentLine)) }}</a-descriptions-item>
            </a-descriptions>
          </div>
        </a-drawer>

        <a-modal
          v-if="demandVisible"
          :visible="true"
          title="从需求池选择待计划明细"
          title-align="start"
          :width="820"
          unmount-on-close
          @ok="confirmDemandSelect"
          @cancel="demandVisible = false"
        >
          <a-alert type="info" show-icon style="margin-bottom: 16px">
            仅展示当前计划分类下可纳入的待计划需求；普通需求和紧急需求不能混选生成同一张采购计划。
          </a-alert>
          <a-table
            :columns="demandPoolColumns"
            :data="mergeCandidates.map(item => ({ ...item, demandType: isUrgentPlan ? '紧急需求' : '普通需求' }))"
            row-key="demandNo"
            :pagination="false"
            :bordered="false"
            :row-selection="{ type: 'checkbox', showCheckedAll: true, width: 48 }"
            :selected-keys="selectedDemandKeys"
            @selection-change="onDemandSelectionChange"
          >
            <template #demandType="{ record }">
              <a-tag :color="record.demandType === '紧急需求' ? 'red' : 'arcoblue'">{{ record.demandType }}</a-tag>
            </template>
            <template #demandMaterial="{ record }">
              <div>{{ record.materialName }}</div>
              <div class="purchase-muted">{{ record.materialCode }}｜{{ record.spec }}</div>
            </template>
            <template #demandQty="{ record }">{{ record.demandQty }} {{ record.unit }}</template>
          </a-table>
        </a-modal>

        <a-modal
          v-if="mergeVisible"
          :visible="true"
          title="确认合并采购需求"
          title-align="start"
          :width="760"
          unmount-on-close
          @ok="confirmMerge"
          @cancel="mergeVisible = false"
        >
          <a-alert
            type="warning"
            content="系统只识别合并候选，不会自动合并；请采购计划员核对物料、数量、工厂和需求时间后，再确认是否合并。"
            style="margin-bottom: 16px"
          />
          <a-table
            :columns="mergeCandidateColumns"
            :data="mergeCandidates"
            row-key="demandNo"
            :pagination="false"
            :bordered="false"
            style="margin-bottom: 16px"
          >
            <template #mergeMaterial="{ record }">
              <div>{{ record.materialName }}</div>
              <div class="purchase-muted">{{ record.materialCode }}｜{{ record.spec }}</div>
            </template>
            <template #mergeQty="{ record }">{{ record.demandQty }} {{ record.unit }}</template>
          </a-table>
          <a-row :gutter="16">
            <a-col :span="8">
              <a-statistic title="候选需求数量" :value="mergeCandidateQty" />
            </a-col>
            <a-col :span="8">
              <a-statistic title="预估预算金额" :value="formatMoney(mergeCandidateAmount)" />
            </a-col>
            <a-col :span="8">
              <a-form layout="vertical">
                <a-form-item label="合并后期望需求时间" required>
                  <a-date-picker v-model="mergeForm.expectedDemandTime" class="pro-field-block" />
                </a-form-item>
              </a-form>
            </a-col>
          </a-row>
        </a-modal>

      </div>
    `,
  }

  mountProPage({
    pageKey: 'purchase-plan/create',
    title: '创建采购计划',
    pageComponent: CreatePurchasePlanPage,
  })
})()
