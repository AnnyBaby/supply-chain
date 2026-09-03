;(function () {
  const demandRows = [
    {
      id: 'REQ-202608-001',
      type: '普通需求',
      materialCode: 'MAT-GB-A01',
      materialName: '瓶盖',
      category: '包装材料',
      spec: '28mm / 食品级',
      unit: '个',
      qty: 120000,
      plannedQty: 0,
      department: '厦门分厂',
      expectedDate: '2026-09-10',
      approvalNo: 'PR-202608-1042',
      planNo: '',
      applicant: '林晓峰',
      planStatus: '待计划',
      urgency: '普通',
      warehouse: '厦门总仓',
      location: 'XM-A-03-02',
      currentStock: 35000,
      safetyStock: 40000,
      transitStock: 28000,
      replenishment: '建议纳入本期普通采购计划',
    },
    {
      id: 'REQ-202608-002',
      type: '普通需求',
      materialCode: 'MAT-GB-A01',
      materialName: '瓶盖',
      category: '包装材料',
      spec: '28mm / 食品级',
      unit: '个',
      qty: 80000,
      plannedQty: 0,
      department: '漳州分厂',
      expectedDate: '2026-09-10',
      approvalNo: 'PR-202608-1067',
      planNo: '',
      applicant: '陈丽',
      planStatus: '待计划',
      urgency: '普通',
      warehouse: '漳州中心仓',
      location: 'ZZ-B-01-08',
      currentStock: 18000,
      safetyStock: 32000,
      transitStock: 10000,
      replenishment: '与同物料相同窗口期需求合并采购',
    },
    {
      id: 'REQ-202608-003',
      type: '紧急需求',
      materialCode: 'MAT-MTR-07',
      materialName: '伺服电机',
      category: '机电',
      spec: '7.5KW / IP55',
      unit: '台',
      qty: 12,
      plannedQty: 0,
      department: '泉州分厂',
      expectedDate: '2026-09-03',
      approvalNo: 'EPR-202608-021',
      planNo: '',
      applicant: '吴志强',
      planStatus: '待计划',
      voidStatus: '已作废',
      urgency: '紧急',
      warehouse: '泉州备件仓',
      location: 'QZ-M-05-11',
      currentStock: 1,
      safetyStock: 4,
      transitStock: 0,
      replenishment: '库存不足，建议立即制定紧急采购计划',
    },
    {
      id: 'REQ-202608-004',
      type: '普通需求',
      materialCode: 'MAT-BLT-16',
      materialName: '高强螺栓 B',
      category: '标准件',
      spec: 'M16*80 / 10.9级',
      unit: '件',
      qty: 5000,
      plannedQty: 5000,
      department: '福州分厂',
      expectedDate: '2026-09-10',
      approvalNo: 'PR-202608-1035',
      planNo: 'PP-202609-001',
      applicant: '张静',
      planStatus: '已计划',
      urgency: '普通',
      warehouse: '福州标准件仓',
      location: 'FZ-C-09-12',
      currentStock: 1600,
      safetyStock: 1200,
      transitStock: 2300,
      replenishment: '已纳入 PP-202608-009',
    },
    {
      id: 'REQ-202608-005',
      type: '紧急需求',
      materialCode: 'MAT-PMP-03',
      materialName: '循环泵总成',
      category: '机电',
      spec: 'DN80 / 22KW',
      unit: '套',
      qty: 3,
      plannedQty: 0,
      department: '厦门分厂',
      expectedDate: '2026-09-02',
      approvalNo: 'EPR-202608-026',
      planNo: '',
      applicant: '许宁',
      planStatus: '待计划',
      urgency: '紧急',
      warehouse: '厦门总仓',
      location: 'XM-P-01-04',
      currentStock: 0,
      safetyStock: 1,
      transitStock: 1,
      replenishment: '紧急补货，建议拆为紧急采购计划',
    },
    {
      id: 'REQ-202608-006',
      type: '普通需求',
      materialCode: 'MAT-FLM-02',
      materialName: '包装膜',
      category: '包装材料',
      spec: '900mm / 食品级',
      unit: '卷',
      qty: 200,
      plannedQty: 200,
      department: '厦门分厂-生产一部',
      expectedDate: '2026-09-12',
      approvalNo: 'PR-202608-1091',
      planNo: 'PP-202609-001',
      applicant: '赵文员',
      planStatus: '已计划',
      voidStatus: '已作废',
      urgency: '普通',
      warehouse: '厦门总仓',
      location: 'XM-F-02-09',
      currentStock: 800,
      safetyStock: 300,
      transitStock: 0,
      replenishment: '需求已作废，仅允许查看原计划明细',
    },
  ]

  const columns = [
    { title: '需求编号', dataIndex: 'id', width: 150 },
    { title: '需求类型', dataIndex: 'type', width: 110, slotName: 'type' },
    { title: '物料信息', dataIndex: 'materialName', minWidth: 190, slotName: 'material' },
    { title: '品类', dataIndex: 'category', width: 100 },
    { title: '规格型号', dataIndex: 'spec', width: 140 },
    { title: '数量', dataIndex: 'qty', width: 100, slotName: 'qty' },
    { title: '申请部门', dataIndex: 'department', width: 120 },
    { title: '期望到货', dataIndex: 'expectedDate', width: 120 },
    { title: '异常情况', dataIndex: 'voidStatus', width: 110, slotName: 'abnormalStatus' },
    { title: '计划状态', dataIndex: 'planStatus', width: 110, slotName: 'planStatus' },
    { title: '计划编号', dataIndex: 'planNo', width: 150, slotName: 'planNo' },
    { title: '来源审批单号', dataIndex: 'approvalNo', width: 150 },
    { title: '操作', dataIndex: 'operations', width: 160, fixed: 'right', slotName: 'operations' },
  ]

  const voidedColumns = [
    { title: '需求编号', dataIndex: 'id', width: 150 },
    { title: '需求类型', dataIndex: 'type', width: 110, slotName: 'type' },
    { title: '物料信息', dataIndex: 'materialName', minWidth: 190, slotName: 'material' },
    { title: '品类', dataIndex: 'category', width: 100 },
    { title: '规格型号', dataIndex: 'spec', width: 140 },
    { title: '数量', dataIndex: 'qty', width: 100, slotName: 'qty' },
    { title: '申请部门', dataIndex: 'department', width: 150 },
    { title: '期望到货', dataIndex: 'expectedDate', width: 120 },
    { title: '计划状态', dataIndex: 'planStatus', width: 110, slotName: 'planStatus' },
    { title: '计划编号', dataIndex: 'planNo', width: 150, slotName: 'planNo' },
    { title: '是否作废', dataIndex: 'voidStatus', width: 110, slotName: 'voidStatus' },
    { title: '操作', dataIndex: 'operations', width: 140, fixed: 'right', slotName: 'operations' },
  ]

  const mergeCandidateColumns = [
    { title: '需求编号', dataIndex: 'id', width: 150 },
    { title: '物料', dataIndex: 'materialName', width: 180, slotName: 'mergeMaterial' },
    { title: '数量', dataIndex: 'qty', width: 120, slotName: 'mergeQty' },
    { title: '工厂', dataIndex: 'department', width: 120 },
    { title: '需求时间', dataIndex: 'expectedDate', width: 120 },
  ]

  const GroupDemandPoolPage = {
    name: 'GroupDemandPoolPage',
    data() {
      return {
        form: {
          keyword: '',
          department: '',
          category: '',
          planStatus: '',
          approvalNo: '',
          expectedRange: [],
        },
        rows: demandRows,
        selectedKeys: [],
        currentType: '全部',
        currentPlanStatus: '待计划',
        drawerVisible: false,
        currentRow: null,
        mergeVisible: false,
        mergeForm: {
          expectedDemandTime: '2026-09-10',
        },
        columns,
        voidedColumns,
        mergeCandidateColumns,
        pagination: { current: 1, pageSize: 10, total: demandRows.length },
      }
    },
    computed: {
      isVoidedView() {
        return this.currentPlanStatus === '已作废需求'
      },
      activeColumns() {
        return this.isVoidedView ? this.voidedColumns : this.columns
      },
      filteredRows() {
        return this.rows.filter((row) => {
          const keyword = this.form.keyword.trim()
          if (keyword && !`${row.materialName}${row.materialCode}`.includes(keyword)) return false
          if (this.form.department && row.department !== this.form.department) return false
          if (this.form.category && row.category !== this.form.category) return false
          if (this.form.planStatus === '已作废' && row.voidStatus !== '已作废') return false
          if (this.form.planStatus && this.form.planStatus !== '已作废' && row.planStatus !== this.form.planStatus) return false
          if (this.form.approvalNo && !row.approvalNo.includes(this.form.approvalNo)) return false
          if (this.currentType !== '全部' && row.type !== this.currentType) return false
          if (this.isVoidedView) return row.voidStatus === '已作废'
          if (this.currentPlanStatus !== '全部' && row.planStatus !== this.currentPlanStatus) return false
          return true
        })
      },
      selectableCount() {
        return this.rows.filter((row) => row.planStatus !== '已计划' && row.voidStatus !== '已作废').length
      },
      selectedRows() {
        return this.rows.filter((row) => this.selectedKeys.includes(row.id))
      },
      selectedTypeNames() {
        return [...new Set(this.selectedRows.map((row) => row.type))]
      },
      hasMixedSelectedTypes() {
        return this.selectedTypeNames.length > 1
      },
      selectedPlanClass() {
        if (!this.selectedRows.length) return '未选择'
        return this.selectedRows[0].type === '紧急需求' ? '紧急采购计划' : '普通采购计划'
      },
      normalPending() {
        return this.rows.filter((row) => row.type === '普通需求' && row.planStatus === '待计划').length
      },
      urgentPending() {
        return this.rows.filter((row) => row.type === '紧急需求' && row.planStatus === '待计划').length
      },
      plannedCount() {
        return this.rows.filter((row) => row.planStatus === '已计划' && row.voidStatus !== '已作废').length
      },
      voidedCount() {
        return this.rows.filter((row) => row.voidStatus === '已作废').length
      },
      mergeCandidates() {
        return this.rows.filter((row) => row.materialCode === 'MAT-GB-A01' && row.planStatus === '待计划' && row.voidStatus !== '已作废')
      },
      mergeCandidateQty() {
        return this.mergeCandidates.reduce((sum, row) => sum + Number(row.qty || 0), 0)
      },
    },
    methods: {
      onSearch() {
        this.pagination.current = 1
      },
      onReset() {
        this.form = {
          keyword: '',
          department: '',
          category: '',
          planStatus: '',
          approvalNo: '',
          expectedRange: [],
        }
        this.currentType = '全部'
        this.currentPlanStatus = '待计划'
      },
      onSelectionChange(keys) {
        this.selectedKeys = keys.filter((id) => {
          const row = this.rows.find((item) => item.id === id)
          return row && row.planStatus !== '已计划' && row.voidStatus !== '已作废'
        })
      },
      openInventory(row) {
        this.currentRow = row
        this.drawerVisible = true
      },
      openMergeConfirm() {
        this.mergeVisible = true
      },
      confirmMerge() {
        this.selectedKeys = this.mergeCandidates.map((row) => row.id)
        this.mergeVisible = false
        ArcoVue.Message.success('已确认合并候选，可继续生成采购计划')
      },
      goCreatePlan(row) {
        if (row && row.voidStatus === '已作废') {
          ArcoVue.Message.warning('该需求已作废，不能生成采购计划')
          return
        }
        if (row && row.id && row.planStatus !== '已计划' && row.voidStatus !== '已作废') {
          this.selectedKeys = [row.id]
        }
        if (!this.selectedKeys.length) {
          ArcoVue.Message.warning('请先选择待计划需求')
          return
        }
        if (!this.selectedRows.length) {
          ArcoVue.Message.warning('请重新选择待计划需求')
          this.selectedKeys = []
          return
        }
        if (this.hasMixedSelectedTypes) {
          ArcoVue.Message.error('普通需求和紧急需求不能一起制定采购计划，请分开选择')
          return
        }
        const planClass = this.selectedRows[0].type === '紧急需求' ? 'urgent' : 'normal'
        window.location.href = `create-purchase-plan.html?planClass=${planClass}`
      },
      tagColor(value) {
        if (value === '紧急需求' || value === '紧急') return 'red'
        if (value === '已计划') return 'green'
        if (value === '待计划') return 'arcoblue'
        if (value === '已作废') return 'red'
        return 'gray'
      },
      viewPlanDetail() {
        window.location.href = 'purchase-plan-list.html'
      },
    },
    template: `
      <div class="purchase-page">
        <div class="purchase-kpi-grid">
          <div class="purchase-kpi-card">
            <div class="purchase-kpi-label">待计划普通需求</div>
            <div class="purchase-kpi-value">{{ normalPending }}</div>
          </div>
          <div class="purchase-kpi-card">
            <div class="purchase-kpi-label">待计划紧急需求</div>
            <div class="purchase-kpi-value">{{ urgentPending }}</div>
          </div>
          <div class="purchase-kpi-card">
            <div class="purchase-kpi-label">已计划需求</div>
            <div class="purchase-kpi-value">{{ plannedCount }}</div>
          </div>
          <div class="purchase-kpi-card">
            <div class="purchase-kpi-label">可纳入计划</div>
            <div class="purchase-kpi-value">{{ selectableCount }}</div>
          </div>
        </div>

        <a-card class="general-card pro-page-card">
          <div class="purchase-section-title">筛选区</div>
          <a-form :model="form" layout="vertical">
            <a-row :gutter="16">
              <a-col :xs="24" :md="8">
                <a-form-item label="物料名称/编码">
                  <a-input v-model="form.keyword" allow-clear placeholder="请输入物料名称或编码" />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="8">
                <a-form-item label="申请部门">
                  <a-select v-model="form.department" allow-clear placeholder="请选择">
                    <a-option value="厦门分厂">厦门分厂</a-option>
                    <a-option value="漳州分厂">漳州分厂</a-option>
                    <a-option value="泉州分厂">泉州分厂</a-option>
                    <a-option value="福州分厂">福州分厂</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="8">
                <a-form-item label="物料品类">
                  <a-select v-model="form.category" allow-clear placeholder="请选择">
                    <a-option value="钢材">钢材</a-option>
                    <a-option value="机电">机电</a-option>
                    <a-option value="标准件">标准件</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="8">
                <a-form-item label="需求计划状态">
                  <a-select v-model="form.planStatus" allow-clear placeholder="请选择">
                    <a-option value="待计划">待计划</a-option>
                    <a-option value="已计划">已计划</a-option>
                    <a-option value="已作废">已作废</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="8">
                <a-form-item label="来源审批单号">
                  <a-input v-model="form.approvalNo" allow-clear placeholder="请输入审批单号" />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="8">
                <a-form-item label="期望需求时间区间">
                  <a-range-picker v-model="form.expectedRange" class="pro-field-block" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
          <a-space>
            <a-button type="primary" @click="onSearch"><template #icon><icon-search /></template>查询</a-button>
            <a-button @click="onReset"><template #icon><icon-refresh /></template>重置</a-button>
          </a-space>
        </a-card>

        <a-card class="general-card pro-page-card">
          <div class="purchase-toolbar">
            <div>
              <div class="purchase-section-title">需求池列表</div>
            </div>
            <a-space>
              <a-button @click="currentPlanStatus = '全部'">全部状态</a-button>
              <a-button status="success" @click="openMergeConfirm">查看合并候选</a-button>
              <a-button type="primary" :disabled="hasMixedSelectedTypes" @click="goCreatePlan()"><template #icon><icon-plus /></template>批量生成采购计划</a-button>
            </a-space>
          </div>

          <div class="purchase-filter-stack">
            <div class="purchase-filter-line">
              <span class="purchase-filter-label">计划状态</span>
              <a-radio-group v-model="currentPlanStatus" type="button" class="purchase-tabs">
                <a-radio value="待计划">待计划</a-radio>
                <a-radio value="已计划">已计划</a-radio>
                <a-radio value="已作废需求">已作废需求</a-radio>
                <a-radio value="全部">全部计划状态</a-radio>
              </a-radio-group>
            </div>
            <div class="purchase-filter-line">
              <span class="purchase-filter-label">需求类型</span>
              <a-radio-group v-model="currentType" type="button" class="purchase-tabs">
                <a-radio value="全部">全部</a-radio>
                <a-radio value="普通需求">普通需求</a-radio>
                <a-radio value="紧急需求">紧急需求</a-radio>
              </a-radio-group>
            </div>
          </div>

          <a-alert
            v-if="selectedKeys.length"
            :type="hasMixedSelectedTypes ? 'error' : 'info'"
            show-icon
            style="margin-bottom: 16px"
          >
            {{ hasMixedSelectedTypes ? '已选需求中同时包含普通需求和紧急需求，不能一起制定采购计划，请分开生成。' : '当前已选需求将生成：' + selectedPlanClass }}
          </a-alert>

          <a-table
            :columns="activeColumns"
            :data="filteredRows"
            row-key="id"
            :pagination="false"
            :bordered="false"
            :scroll="{ x: 1420 }"
            :row-selection="isVoidedView ? undefined : { type: 'checkbox', showCheckedAll: true, width: 48 }"
            :selected-keys="selectedKeys"
            @selection-change="onSelectionChange"
          >
            <template #type="{ record }">
              <a-tag :color="tagColor(record.type)">{{ record.type }}</a-tag>
            </template>
            <template #material="{ record }">
              <div>
                <span class="purchase-link" @click="openInventory(record)">{{ record.materialName }}</span>
                <div class="purchase-muted">{{ record.materialCode }}</div>
              </div>
            </template>
            <template #qty="{ record }">{{ record.qty }} {{ record.unit }}</template>
            <template #abnormalStatus="{ record }">
              <a-tag v-if="record.voidStatus === '已作废'" color="red">已作废</a-tag>
              <span v-else class="purchase-muted">-</span>
            </template>
            <template #planStatus="{ record }">
              <a-tag :color="tagColor(record.planStatus)">{{ record.planStatus }}</a-tag>
            </template>
            <template #planNo="{ record }">
              <a-link v-if="record.planNo" href="purchase-plan-list.html">{{ record.planNo }}</a-link>
              <span v-else class="purchase-muted">-</span>
            </template>
            <template #voidStatus="{ record }">
              <a-tag color="red">{{ record.voidStatus || '-' }}</a-tag>
            </template>
            <template #operations="{ record }">
              <a-space class="pro-table-ops" :size="4">
                <template v-if="record.voidStatus === '已作废' && record.planNo">
                  <a-button type="text" size="small" @click="viewPlanDetail(record)">查看计划明细</a-button>
                </template>
                <template v-else-if="record.voidStatus === '已作废'">
                  <a-button type="text" size="small" @click="openInventory(record)">库存</a-button>
                </template>
                <template v-else>
                  <a-button type="text" size="small" @click="openInventory(record)">库存</a-button>
                  <a-button v-if="record.planStatus !== '已计划'" type="text" size="small" @click="goCreatePlan(record)">生成计划</a-button>
                </template>
              </a-space>
            </template>
          </a-table>

          <div class="purchase-table-footer">
            <a-space>
              <a-button status="success" @click="openMergeConfirm">确认同物料合并</a-button>
              <a-button :disabled="!selectedKeys.length || hasMixedSelectedTypes" @click="goCreatePlan()">已选 {{ selectedKeys.length }} 条，生成计划</a-button>
              <span class="purchase-muted">已计划需求不可重复纳入采购计划</span>
            </a-space>
            <a-pagination :total="filteredRows.length" :page-size="10" show-total />
          </div>
        </a-card>

        <a-drawer
          v-if="drawerVisible"
          :visible="true"
          :title="currentRow ? '库存信息 - ' + currentRow.materialName : '库存信息'"
          :width="560"
          unmount-on-close
          @cancel="drawerVisible = false"
        >
          <div v-if="currentRow" class="pro-detail">
            <section class="pro-detail-section">
              <h3 class="pro-detail-section-title">物料信息</h3>
              <div class="pro-detail-grid">
                <div class="pro-detail-field">
                  <div class="pro-detail-label">物料编码</div>
                  <div class="pro-detail-value">{{ currentRow.materialCode }}</div>
                </div>
                <div class="pro-detail-field">
                  <div class="pro-detail-label">物料品类</div>
                  <div class="pro-detail-value">{{ currentRow.category }}</div>
                </div>
                <div class="pro-detail-field pro-detail-field--full">
                  <div class="pro-detail-label">规格型号</div>
                  <div class="pro-detail-value">{{ currentRow.spec }}</div>
                </div>
              </div>
            </section>
            <section class="pro-detail-section">
              <h3 class="pro-detail-section-title">库存信息</h3>
              <div class="inventory-grid">
                <div class="inventory-card"><div class="inventory-label">仓储位置</div><div class="inventory-value">{{ currentRow.location }}</div></div>
                <div class="inventory-card"><div class="inventory-label">当前库存</div><div class="inventory-value">{{ currentRow.currentStock }} {{ currentRow.unit }}</div></div>
                <div class="inventory-card"><div class="inventory-label">安全库存</div><div class="inventory-value">{{ currentRow.safetyStock }} {{ currentRow.unit }}</div></div>
                <div class="inventory-card"><div class="inventory-label">在途库存</div><div class="inventory-value">{{ currentRow.transitStock }} {{ currentRow.unit }}</div></div>
              </div>
            </section>
            <section class="pro-detail-section">
              <h3 class="pro-detail-section-title">补货建议</h3>
              <a-alert type="info" :content="currentRow.replenishment" />
            </section>
          </div>
        </a-drawer>

        <a-modal
          v-if="mergeVisible"
          :visible="true"
          title="需求池合并确认"
          title-align="start"
          :width="760"
          unmount-on-close
          @ok="confirmMerge"
          @cancel="mergeVisible = false"
        >
          <a-alert
            type="warning"
            content="相同物料和相同期望需求时间只进入合并候选，不能由系统直接自行合并；请采购员核对后确认。"
            style="margin-bottom: 16px"
          />
          <a-table
            :columns="mergeCandidateColumns"
            :data="mergeCandidates"
            row-key="id"
            :pagination="false"
            :bordered="false"
            style="margin-bottom: 16px"
          >
            <template #mergeMaterial="{ record }">
              <div>{{ record.materialName }}</div>
              <div class="purchase-muted">{{ record.materialCode }}｜{{ record.spec }}</div>
            </template>
            <template #mergeQty="{ record }">{{ record.qty }} {{ record.unit }}</template>
          </a-table>
          <a-row :gutter="16">
            <a-col :span="8">
              <a-statistic title="候选需求数" :value="mergeCandidates.length" />
            </a-col>
            <a-col :span="8">
              <a-statistic title="合计数量" :value="mergeCandidateQty" />
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
    pageKey: 'purchase-plan/group-demand-pool',
    title: '集团需求池',
    pageComponent: GroupDemandPoolPage,
  })
})()
