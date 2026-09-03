;(function () {
  const rows = [
    {
      id: 'LINE-001',
      planNo: 'PP-202609-001',
      planClass: '普通采购计划',
      material: '瓶盖',
      materialCode: 'MAT-GB-A01',
      spec: '28mm / 食品级',
      category: '包装材料',
      departments: '厦门分厂、漳州分厂',
      quantity: '180000 个',
      estimatedPrice: 0.08,
      budgetAmount: 14400,
      demandDate: '2026-09-10',
      planner: '采购计划员-王敏',
      assignTime: '2026-08-31 10:20',
      purchaseMethod: '',
      relatedProject: '',
      contractCode: '',
      orderNo: '',
      executeStatus: '待执行',
      objectionStatus: '无异议',
      objectionInfo: null,
    },
    {
      id: 'LINE-002',
      planNo: 'PP-202609-001',
      planClass: '普通采购计划',
      material: '高强螺栓 B',
      materialCode: 'MAT-BLT-16',
      spec: 'M16*80 / 10.9级',
      category: '标准件',
      departments: '福州分厂',
      quantity: '3000 件',
      estimatedPrice: 1.8,
      budgetAmount: 5400,
      demandDate: '2026-09-08',
      planner: '采购计划员-李娜',
      assignTime: '2026-08-30 15:08',
      purchaseMethod: '询比价',
      relatedProject: 'SRC-202609-018',
      contractCode: '',
      orderNo: '',
      executeStatus: '执行中',
      objectionStatus: '无异议',
      objectionInfo: null,
    },
    {
      id: 'LINE-003',
      planNo: 'PP-202609-002',
      planClass: '紧急采购计划',
      material: '伺服电机',
      materialCode: 'MAT-MTR-07',
      spec: '7.5KW / IP55',
      category: '机电',
      departments: '泉州分厂',
      quantity: '12 台',
      estimatedPrice: 8600,
      budgetAmount: 103200,
      demandDate: '2026-09-01',
      planner: '采购计划员-赵露',
      assignTime: '2026-08-31 09:42',
      purchaseMethod: '采购订单采购',
      relatedProject: '',
      contractCode: '',
      orderNo: 'PO-202609-011',
      executeStatus: '执行中',
      objectionStatus: '异议已通过待计划员处理',
      objectionInfo: {
        type: '数量/时间不合理',
        reason: '供应商反馈当前交期无法满足 2026-09-01 到货，建议计划员调整期望需求时间或改派熟悉该供应商的采购员。',
        suggestion: '变更采购任务',
        leaderResult: '采购领导审核通过',
        leaderOpinion: '异议成立，已抄送采购计划员-赵露处理。',
        submitTime: '2026-08-31 11:20',
        approveTime: '2026-08-31 14:05',
      },
    },
    {
      id: 'LINE-004',
      planNo: 'PP-202608-012',
      planClass: '紧急采购计划',
      material: '循环泵总成',
      materialCode: 'MAT-PMP-03',
      spec: 'DN80 / 22KW',
      category: '机电',
      departments: '厦门分厂',
      quantity: '3 套',
      estimatedPrice: 18000,
      budgetAmount: 54000,
      demandDate: '2026-09-02',
      planner: '采购计划员-王敏',
      assignTime: '2026-08-31 16:10',
      purchaseMethod: '',
      relatedProject: '',
      contractCode: '',
      orderNo: '',
      executeStatus: '待执行',
      objectionStatus: '异议审核中',
      objectionInfo: {
        type: '当前负荷过高',
        reason: '本周同时处理 6 个紧急机电任务，无法保障该任务及时询源。',
        suggestion: '变更采购员',
        leaderResult: '采购领导审核中',
        leaderOpinion: '-',
        submitTime: '2026-08-31 16:30',
        approveTime: '-',
      },
    },
    {
      id: 'LINE-005',
      planNo: 'PP-202609-001',
      planClass: '普通采购计划',
      material: '温度传感器',
      materialCode: 'MAT-SEN-11',
      spec: 'PT100 / 防水',
      category: '机电',
      departments: '漳州分厂',
      quantity: '40 个',
      estimatedPrice: 320,
      budgetAmount: 12800,
      demandDate: '2026-09-14',
      planner: '采购计划员-李娜',
      assignTime: '2026-08-28 10:15',
      purchaseMethod: '合同采购',
      relatedProject: '',
      contractCode: 'HT-202608-093',
      orderNo: 'PO-202609-028',
      executeStatus: '已完成',
      objectionStatus: '无异议',
      objectionInfo: null,
    },
  ]

  const BuyerTaskListPage = {
    data() {
      return {
        filters: {
          keyword: '',
          executeStatus: '',
          objectionStatus: '',
          planClass: '',
          purchaseMethod: '',
        },
        rows,
        currentRow: null,
        methodVisible: false,
        relationVisible: false,
        objectionVisible: false,
        objectionDetailVisible: false,
        completeVisible: false,
        methodForm: {
          purchaseMethod: '',
          remark: '',
        },
        relationForm: {
          relatedProject: '',
          contractCode: '',
          orderNo: '',
          remark: '',
        },
        objectionForm: {
          type: '',
          suggestion: '',
          reason: '',
          impact: '',
        },
        completeForm: {
          relatedProject: '',
          contractCode: '',
          orderNo: '',
          remark: '',
        },
        columns: [
          { title: '计划明细编号', dataIndex: 'id', slotName: 'detailNo', width: 150 },
          { title: '来源计划', dataIndex: 'planNo', slotName: 'plan', width: 170 },
          { title: '物料信息', dataIndex: 'material', slotName: 'material', width: 220 },
          { title: '采购部门', dataIndex: 'departments', width: 150 },
          { title: '计划数量', dataIndex: 'quantity', width: 110 },
          { title: '预计单价', dataIndex: 'estimatedPrice', slotName: 'money', width: 120 },
          { title: '预算总额', dataIndex: 'budgetAmount', slotName: 'money', width: 130 },
          { title: '期望需求时间', dataIndex: 'demandDate', width: 130 },
          { title: '采购方式', dataIndex: 'purchaseMethod', slotName: 'nullable', width: 130 },
          { title: '关联项目', dataIndex: 'relatedProject', slotName: 'nullable', width: 150 },
          { title: '合同编码', dataIndex: 'contractCode', slotName: 'nullable', width: 150 },
          { title: '订单编号', dataIndex: 'orderNo', slotName: 'nullable', width: 150 },
          { title: '执行状态', dataIndex: 'executeStatus', slotName: 'executeStatus', width: 110 },
          { title: '异议状态', dataIndex: 'objectionStatus', slotName: 'objectionStatus', width: 170 },
          { title: '操作', slotName: 'operations', width: 260, fixed: 'right' },
        ],
      }
    },
    computed: {
      filteredRows() {
        return this.rows.filter((row) => {
          const keyword = this.filters.keyword.trim()
          const hitKeyword = !keyword || [row.id, row.planNo, row.material, row.materialCode].some((item) => item.includes(keyword))
          const hitExecute = !this.filters.executeStatus || row.executeStatus === this.filters.executeStatus
          const hitObjection = !this.filters.objectionStatus || row.objectionStatus === this.filters.objectionStatus
          const hitPlanClass = !this.filters.planClass || row.planClass === this.filters.planClass
          const hitMethod = !this.filters.purchaseMethod || row.purchaseMethod === this.filters.purchaseMethod
          return hitKeyword && hitExecute && hitObjection && hitPlanClass && hitMethod
        })
      },
      todoCount() {
        return this.rows.filter((row) => row.executeStatus === '待执行').length
      },
      runningCount() {
        return this.rows.filter((row) => row.executeStatus === '执行中').length
      },
      doneCount() {
        return this.rows.filter((row) => row.executeStatus === '已完成').length
      },
      objectionCount() {
        return this.rows.filter((row) => row.objectionStatus !== '无异议').length
      },
    },
    methods: {
      statusColor(status) {
        const map = {
          待执行: 'gray',
          执行中: 'blue',
          已完成: 'green',
          无异议: 'green',
          异议审核中: 'purple',
          异议已驳回: 'red',
          异议已通过待计划员处理: 'orange',
          已处理: 'green',
        }
        return map[status] || 'blue'
      },
      displayEmpty(value) {
        return value || '-'
      },
      formatMoney(value) {
        return `¥${Number(value || 0).toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      },
      resetFilters() {
        this.filters = {
          keyword: '',
          executeStatus: '',
          objectionStatus: '',
          planClass: '',
          purchaseMethod: '',
        }
      },
      openMethod(row) {
        this.currentRow = row
        this.methodForm = {
          purchaseMethod: row.purchaseMethod,
          remark: '',
        }
        this.methodVisible = true
      },
      saveMethod() {
        if (!this.methodForm.purchaseMethod) {
          this.$message.warning('请选择采购方式')
          return
        }
        this.currentRow.purchaseMethod = this.methodForm.purchaseMethod
        if (this.currentRow.executeStatus === '待执行') this.currentRow.executeStatus = '执行中'
        this.methodVisible = false
        this.$message.success('采购方式已保存，采购任务已进入执行中')
      },
      openRelation(row) {
        this.currentRow = row
        this.relationForm = {
          relatedProject: row.relatedProject,
          contractCode: row.contractCode,
          orderNo: row.orderNo,
          remark: '',
        }
        this.relationVisible = true
      },
      saveRelation() {
        this.currentRow.relatedProject = this.relationForm.relatedProject
        this.currentRow.contractCode = this.relationForm.contractCode
        this.currentRow.orderNo = this.relationForm.orderNo
        this.relationVisible = false
        this.$message.success('关联执行信息已保存')
      },
      openComplete(row) {
        this.currentRow = row
        this.completeForm = {
          relatedProject: row.relatedProject,
          contractCode: row.contractCode,
          orderNo: row.orderNo,
          remark: '',
        }
        this.completeVisible = true
      },
      saveComplete() {
        this.currentRow.relatedProject = this.completeForm.relatedProject
        this.currentRow.contractCode = this.completeForm.contractCode
        this.currentRow.orderNo = this.completeForm.orderNo
        this.currentRow.executeStatus = '已完成'
        this.completeVisible = false
        this.$message.success('采购任务已设置为执行完成')
      },
      openObjection(row) {
        this.currentRow = row
        this.objectionForm = {
          type: '',
          suggestion: '',
          reason: '',
          impact: '',
        }
        this.objectionVisible = true
      },
      submitObjection() {
        if (!this.objectionForm.type || !this.objectionForm.suggestion || !this.objectionForm.reason) {
          this.$message.warning('请填写异议类型、建议处理方式和异议原因')
          return
        }
        this.currentRow.objectionStatus = '异议审核中'
        this.currentRow.objectionInfo = {
          type: this.objectionForm.type,
          reason: this.objectionForm.reason,
          suggestion: this.objectionForm.suggestion,
          leaderResult: '采购领导审核中',
          leaderOpinion: '-',
          submitTime: '2026-08-31 17:20',
          approveTime: '-',
        }
        this.objectionVisible = false
        this.$message.success('异议已提交采购领导审核，审核通过后将抄送对应计划员')
      },
      openObjectionDetail(row) {
        this.currentRow = row
        this.objectionDetailVisible = true
      },
      viewTask(row) {
        this.currentRow = row
        this.$modal.info({
          title: `采购任务明细 ${row.id}`,
          content: `来源计划：${row.planNo}；物料：${row.material}；采购部门：${row.departments}；采购方式：${this.displayEmpty(row.purchaseMethod)}；执行状态：${row.executeStatus}。`,
        })
      },
    },
    template: `
      <div class="purchase-page">
        <div class="purchase-page-header">
          <div>
            <div class="purchase-page-title">采购员任务列表</div>
          </div>
        </div>

        <div class="purchase-kpi-grid">
          <a-card class="purchase-kpi-card">
            <div class="purchase-kpi-label">待执行</div>
            <div class="purchase-kpi-value">{{ todoCount }}</div>
            <div class="purchase-kpi-sub">待配置采购方式</div>
          </a-card>
          <a-card class="purchase-kpi-card">
            <div class="purchase-kpi-label">执行中</div>
            <div class="purchase-kpi-value">{{ runningCount }}</div>
            <div class="purchase-kpi-sub">已开始采购执行</div>
          </a-card>
          <a-card class="purchase-kpi-card">
            <div class="purchase-kpi-label">已完成</div>
            <div class="purchase-kpi-value">{{ doneCount }}</div>
            <div class="purchase-kpi-sub">人工确认完成</div>
          </a-card>
          <a-card class="purchase-kpi-card">
            <div class="purchase-kpi-label">异议任务</div>
            <div class="purchase-kpi-value">{{ objectionCount }}</div>
            <div class="purchase-kpi-sub">含审核中/待计划员处理</div>
          </a-card>
        </div>

        <a-card class="purchase-filter-card" :bordered="false">
          <a-form :model="filters" layout="vertical">
            <a-row :gutter="16">
              <a-col :span="6">
                <a-form-item label="任务/计划/物料">
                  <a-input v-model="filters.keyword" placeholder="请输入计划明细编号、计划编号、物料" allow-clear />
                </a-form-item>
              </a-col>
              <a-col :span="4">
                <a-form-item label="执行状态">
                  <a-select v-model="filters.executeStatus" placeholder="全部" allow-clear>
                    <a-option value="待执行">待执行</a-option>
                    <a-option value="执行中">执行中</a-option>
                    <a-option value="已完成">已完成</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="5">
                <a-form-item label="异议状态">
                  <a-select v-model="filters.objectionStatus" placeholder="全部" allow-clear>
                    <a-option value="无异议">无异议</a-option>
                    <a-option value="异议审核中">异议审核中</a-option>
                    <a-option value="异议已驳回">异议已驳回</a-option>
                    <a-option value="异议已通过待计划员处理">异议已通过待计划员处理</a-option>
                    <a-option value="已处理">已处理</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="4">
                <a-form-item label="计划分类">
                  <a-select v-model="filters.planClass" placeholder="全部" allow-clear>
                    <a-option value="普通采购计划">普通采购计划</a-option>
                    <a-option value="紧急采购计划">紧急采购计划</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="5">
                <a-form-item label="采购方式">
                  <a-select v-model="filters.purchaseMethod" placeholder="全部" allow-clear>
                    <a-option value="招投标">招投标</a-option>
                    <a-option value="询比价">询比价</a-option>
                    <a-option value="竞价">竞价</a-option>
                    <a-option value="合同采购">合同采购</a-option>
                    <a-option value="采购订单采购">采购订单采购</a-option>
                    <a-option value="框架协议采购">框架协议采购</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-space>
              <a-button type="primary">查询</a-button>
              <a-button @click="resetFilters">重置</a-button>
            </a-space>
          </a-form>
        </a-card>

        <a-card class="general-card" :bordered="false">
          <div class="purchase-toolbar">
            <div>
              <div class="purchase-section-title">我的采购任务</div>
              <div class="purchase-muted">关联项目/合同编码/订单编号允许为空；配置采购方式后任务自动进入执行中。</div>
            </div>
          </div>

          <a-alert type="info" show-icon class="purchase-alert">
            采购员提出异议后由采购领导审核；审核通过后抄送对应计划员，计划员再根据异议处理任务变更、作废或变更采购员。
          </a-alert>

          <a-table
            row-key="id"
            :columns="columns"
            :data="filteredRows"
            :scroll="{ x: 2100 }"
            :pagination="{ pageSize: 10 }"
          >
            <template #detailNo="{ record }">
              <div class="purchase-link" @click="viewTask(record)">{{ record.id }}</div>
            </template>
            <template #plan="{ record }">
              <div>{{ record.planNo }}</div>
              <a-tag :color="record.planClass === '紧急采购计划' ? 'red' : 'blue'">{{ record.planClass }}</a-tag>
            </template>
            <template #material="{ record }">
              <div class="purchase-material-name">{{ record.material }}</div>
              <div class="purchase-material-code">{{ record.materialCode }}｜{{ record.spec }}</div>
              <div class="purchase-muted">{{ record.category }}｜计划员：{{ record.planner }}</div>
            </template>
            <template #nullable="{ record, column }">
              <span>{{ displayEmpty(record[column.dataIndex]) }}</span>
            </template>
            <template #money="{ record, column }">
              <span>{{ formatMoney(record[column.dataIndex]) }}</span>
            </template>
            <template #executeStatus="{ record }">
              <a-tag :color="statusColor(record.executeStatus)">{{ record.executeStatus }}</a-tag>
            </template>
            <template #objectionStatus="{ record }">
              <a-tag :color="statusColor(record.objectionStatus)">{{ record.objectionStatus }}</a-tag>
            </template>
            <template #operations="{ record }">
              <a-space wrap>
                <a-link @click="viewTask(record)">查看</a-link>
                <a-link v-if="record.executeStatus === '待执行' && record.objectionStatus !== '异议审核中'" @click="openMethod(record)">配置采购方式</a-link>
                <a-link v-if="record.executeStatus === '执行中'" @click="openRelation(record)">维护关联信息</a-link>
                <a-link v-if="record.executeStatus === '执行中'" @click="openComplete(record)">设置完成</a-link>
                <a-link v-if="['待执行', '执行中'].includes(record.executeStatus) && !['异议审核中', '异议已通过待计划员处理'].includes(record.objectionStatus)" status="warning" @click="openObjection(record)">提出异议</a-link>
                <a-link v-if="record.objectionStatus !== '无异议'" @click="openObjectionDetail(record)">查看异议</a-link>
              </a-space>
            </template>
          </a-table>
        </a-card>

        <a-modal v-model:visible="methodVisible" title="配置采购方式" width="720px" @ok="saveMethod">
          <a-alert type="info" show-icon class="purchase-alert">
            采购方式由采购员配置；保存后该采购任务执行状态自动变为“执行中”。
          </a-alert>
          <a-form :model="methodForm" layout="vertical">
            <a-form-item label="采购方式" required>
              <a-select v-model="methodForm.purchaseMethod" placeholder="请选择采购方式">
                <a-option value="招投标">招投标</a-option>
                <a-option value="询比价">询比价</a-option>
                <a-option value="竞价">竞价</a-option>
                <a-option value="合同采购">合同采购</a-option>
                <a-option value="采购订单采购">采购订单采购</a-option>
                <a-option value="框架协议采购">框架协议采购</a-option>
              </a-select>
            </a-form-item>
            <a-form-item label="备注">
              <a-textarea v-model="methodForm.remark" placeholder="可填写选择该采购方式的原因" :auto-size="{ minRows: 3, maxRows: 5 }" />
            </a-form-item>
          </a-form>
        </a-modal>

        <a-modal v-model:visible="relationVisible" title="维护关联执行信息" width="760px" @ok="saveRelation">
          <a-alert type="info" show-icon class="purchase-alert">
            关联项目、合同编码、订单编号均可为空；后续关联寻源项目、合同或订单后再补充即可。
          </a-alert>
          <a-form :model="relationForm" layout="vertical">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item label="关联项目">
                  <a-input v-model="relationForm.relatedProject" placeholder="如 SRC-202609-018" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="合同编码">
                  <a-input v-model="relationForm.contractCode" placeholder="如 HT-202609-001" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="订单编号">
                  <a-input v-model="relationForm.orderNo" placeholder="如 PO-202609-001" />
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item label="执行备注">
              <a-textarea v-model="relationForm.remark" placeholder="补充执行进展、供应商反馈或关联说明" :auto-size="{ minRows: 3, maxRows: 5 }" />
            </a-form-item>
          </a-form>
        </a-modal>

        <a-modal v-model:visible="completeVisible" title="设置采购任务执行完成" width="760px" @ok="saveComplete">
          <a-alert type="warning" show-icon class="purchase-alert">
            执行完成由采购员人工确认；任务需已配置采购方式后才能进入完成确认。关联项目/合同/订单可为空，但建议填写完成说明，方便计划员追溯。
          </a-alert>
          <a-form :model="completeForm" layout="vertical">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item label="关联项目">
                  <a-input v-model="completeForm.relatedProject" placeholder="可为空" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="合同编码">
                  <a-input v-model="completeForm.contractCode" placeholder="可为空" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="订单编号">
                  <a-input v-model="completeForm.orderNo" placeholder="可为空" />
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item label="完成说明">
              <a-textarea v-model="completeForm.remark" placeholder="请填写采购任务完成情况说明" :auto-size="{ minRows: 3, maxRows: 5 }" />
            </a-form-item>
          </a-form>
        </a-modal>

        <a-modal v-model:visible="objectionVisible" title="提出采购任务异议" width="820px" @ok="submitObjection">
          <a-alert type="warning" show-icon class="purchase-alert">
            采购员只能提出异议，不能直接变更、作废或改派采购员；异议需采购领导审核，审核通过后抄送对应计划员处理。
          </a-alert>
          <a-form :model="objectionForm" layout="vertical">
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item label="异议类型" required>
                  <a-select v-model="objectionForm.type" placeholder="请选择异议类型">
                    <a-option value="任务不匹配">任务不匹配</a-option>
                    <a-option value="当前负荷过高">当前负荷过高</a-option>
                    <a-option value="请假/不可执行">请假/不可执行</a-option>
                    <a-option value="物料信息有误">物料信息有误</a-option>
                    <a-option value="数量/时间不合理">数量/时间不合理</a-option>
                    <a-option value="已有订单冲突">已有订单冲突</a-option>
                    <a-option value="其他">其他</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="建议处理方式" required>
                  <a-select v-model="objectionForm.suggestion" placeholder="请选择建议处理方式">
                    <a-option value="变更采购任务">变更采购任务</a-option>
                    <a-option value="作废采购任务">作废采购任务</a-option>
                    <a-option value="变更采购员">变更采购员</a-option>
                    <a-option value="其他">其他</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item label="异议原因" required>
              <a-textarea v-model="objectionForm.reason" placeholder="请说明为什么无法或不适合继续执行该采购任务" :auto-size="{ minRows: 3, maxRows: 5 }" />
            </a-form-item>
            <a-form-item label="影响说明">
              <a-textarea v-model="objectionForm.impact" placeholder="可补充对交期、供应保障、任务负荷的影响" :auto-size="{ minRows: 3, maxRows: 5 }" />
            </a-form-item>
          </a-form>
        </a-modal>

        <a-modal v-model:visible="objectionDetailVisible" title="采购任务异议审批信息" width="820px" :footer="false">
          <a-descriptions v-if="currentRow && currentRow.objectionInfo" :column="2" bordered>
            <a-descriptions-item label="计划明细编号">{{ currentRow.id }}</a-descriptions-item>
            <a-descriptions-item label="异议状态">{{ currentRow.objectionStatus }}</a-descriptions-item>
            <a-descriptions-item label="异议类型">{{ currentRow.objectionInfo.type }}</a-descriptions-item>
            <a-descriptions-item label="建议处理">{{ currentRow.objectionInfo.suggestion }}</a-descriptions-item>
            <a-descriptions-item label="提交时间">{{ currentRow.objectionInfo.submitTime }}</a-descriptions-item>
            <a-descriptions-item label="审核时间">{{ currentRow.objectionInfo.approveTime }}</a-descriptions-item>
            <a-descriptions-item label="采购领导审核结果">{{ currentRow.objectionInfo.leaderResult }}</a-descriptions-item>
            <a-descriptions-item label="审核意见">{{ currentRow.objectionInfo.leaderOpinion }}</a-descriptions-item>
            <a-descriptions-item label="异议原因" :span="2">{{ currentRow.objectionInfo.reason }}</a-descriptions-item>
          </a-descriptions>
        </a-modal>
      </div>
    `,
  }

  mountProPage({
    pageKey: 'purchase-plan/buyer-task-list',
    title: '采购员任务列表',
    pageComponent: BuyerTaskListPage,
  })
})()
