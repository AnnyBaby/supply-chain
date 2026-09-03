;(function () {
  const planRows = [
    {
      id: 'PP-202609-001',
      name: '2026年9月集团普通采购计划',
      planClass: '普通采购计划',
      source: '需求池生成',
      org: '集团采购中心',
      amount: 123000,
      lineCount: 8,
      assignedCount: 0,
      unassignedCount: 8,
      methodCount: 0,
      changeCount: 0,
      cancelCount: 0,
      requestStatus: '正常',
      approvalStatus: '审批中',
      publishStatus: '未发布',
      executionStatus: '待执行',
      creator: '采购计划员-王敏',
      createdAt: '2026-08-31 10:20',
    },
    {
      id: 'PP-202609-002',
      name: '2026年9月集团紧急采购计划',
      planClass: '紧急采购计划',
      source: '需求池生成',
      org: '集团采购中心',
      amount: 86000,
      lineCount: 3,
      assignedCount: 1,
      unassignedCount: 2,
      methodCount: 1,
      changeCount: 0,
      cancelCount: 0,
      requestStatus: '正常',
      approvalStatus: '免审批',
      publishStatus: '待发布',
      executionStatus: '待执行',
      creator: '采购计划员-王敏',
      createdAt: '2026-08-31 09:42',
    },
    {
      id: 'PP-202608-009',
      name: '2026年8月包装材料普通采购计划',
      planClass: '普通采购计划',
      source: 'EXCEL导入',
      org: '华东采购组织',
      amount: 268500,
      lineCount: 16,
      assignedCount: 16,
      unassignedCount: 0,
      methodCount: 16,
      changeCount: 2,
      cancelCount: 0,
      requestStatus: '正常',
      approvalStatus: '已审批',
      publishStatus: '已发布',
      executionStatus: '执行中',
      creator: '采购计划员-李娜',
      createdAt: '2026-08-25 15:08',
    },
    {
      id: 'PP-202608-012',
      name: '循环泵紧急采购计划',
      planClass: '紧急采购计划',
      source: '需求池生成',
      org: '集团采购中心',
      amount: 54000,
      lineCount: 1,
      assignedCount: 1,
      unassignedCount: 0,
      methodCount: 1,
      changeCount: 0,
      cancelCount: 1,
      requestStatus: '整单作废审批中',
      approvalStatus: '免审批',
      publishStatus: '已发布',
      executionStatus: '执行中',
      creator: '采购计划员-赵磊',
      createdAt: '2026-08-30 18:35',
    },
    {
      id: 'PP-202608-006',
      name: '8月标准件普通采购计划',
      planClass: '普通采购计划',
      source: '需求池生成',
      org: '华东采购组织',
      amount: 94500,
      lineCount: 12,
      assignedCount: 12,
      unassignedCount: 0,
      methodCount: 12,
      changeCount: 0,
      cancelCount: 0,
      requestStatus: '正常',
      approvalStatus: '已审批',
      publishStatus: '已发布',
      executionStatus: '已完成',
      creator: '采购计划员-李娜',
      createdAt: '2026-08-12 11:16',
    },
  ]

  const columns = [
    { title: '采购计划编号', dataIndex: 'id', width: 150, fixed: 'left', slotName: 'planNo' },
    { title: '计划名称', dataIndex: 'name', minWidth: 220 },
    { title: '计划分类', dataIndex: 'planClass', width: 130, slotName: 'planClass' },
    { title: '计划来源', dataIndex: 'source', width: 120 },
    { title: '采购组织', dataIndex: 'org', width: 140 },
    { title: '计划总额', dataIndex: 'amount', width: 130, slotName: 'amount' },
    { title: '明细进度', dataIndex: 'lineCount', width: 190, slotName: 'lineProgress' },
    { title: '明细异常提醒', dataIndex: 'changeCount', width: 150, slotName: 'risk' },
    { title: '申请状态', dataIndex: 'requestStatus', width: 140, slotName: 'requestStatus' },
    { title: '审批状态', dataIndex: 'approvalStatus', width: 110, slotName: 'approvalStatus' },
    { title: '发布状态', dataIndex: 'publishStatus', width: 110, slotName: 'publishStatus' },
    { title: '执行状态', dataIndex: 'executionStatus', width: 110, slotName: 'executionStatus' },
    { title: '创建人', dataIndex: 'creator', width: 140 },
    { title: '创建时间', dataIndex: 'createdAt', width: 160 },
    { title: '操作', dataIndex: 'operations', width: 260, fixed: 'right', slotName: 'operations' },
  ]

  const detailColumns = [
    { title: '明细编号', dataIndex: 'id', width: 120 },
    { title: '物料信息', dataIndex: 'materialName', minWidth: 190, slotName: 'material' },
    { title: '采购部门', dataIndex: 'department', width: 150 },
    { title: '计划数量', dataIndex: 'planQty', width: 120, slotName: 'planQty' },
    { title: '预算总额', dataIndex: 'amount', width: 130, slotName: 'detailAmount' },
    { title: '分配状态', dataIndex: 'assignStatus', width: 110, slotName: 'assignStatus' },
    { title: '采购员', dataIndex: 'buyer', width: 120 },
    { title: '执行状态', dataIndex: 'executionStatus', width: 110, slotName: 'detailExecutionStatus' },
    { title: '变更/作废', dataIndex: 'riskStatus', width: 130, slotName: 'riskStatus' },
    { title: '操作', dataIndex: 'operations', width: 220, fixed: 'right', slotName: 'detailOperations' },
  ]

  const detailRows = [
    { id: 'LINE-001', materialCode: 'MAT-GB-A01', materialName: '瓶盖', spec: '28mm / 食品级', department: '厦门分厂、漳州分厂', planQty: 180000, unit: '个', amount: 14400, assignStatus: '未分配', buyer: '—', executionStatus: '待执行', riskStatus: '正常' },
    { id: 'LINE-002', materialCode: 'MAT-BLT-16', materialName: '高强螺栓 B', spec: 'M16*80 / 10.9级', department: '福州分厂', planQty: 3000, unit: '件', amount: 5400, assignStatus: '已分配', buyer: '周强', executionStatus: '待执行', riskStatus: '正常' },
    { id: 'LINE-003', materialCode: 'MAT-MTR-07', materialName: '伺服电机', spec: '7.5KW / IP55', department: '泉州分厂', planQty: 12, unit: '台', amount: 103200, assignStatus: '已分配', buyer: '陈琳', executionStatus: '执行中', riskStatus: '变更审批中' },
    { id: 'LINE-004', materialCode: 'MAT-PMP-03', materialName: '循环泵总成', spec: 'DN80 / 22KW', department: '厦门分厂', planQty: 3, unit: '套', amount: 54000, assignStatus: '已分配', buyer: '赵磊', executionStatus: '执行中', riskStatus: '作废审批中' },
    { id: 'LINE-005', materialCode: 'MAT-SEN-11', materialName: '温度传感器', spec: 'PT100 / 0-200℃', department: '漳州分厂', planQty: 40, unit: '个', amount: 9200, assignStatus: '未分配', buyer: '—', executionStatus: '待执行', riskStatus: '正常' },
    { id: 'LINE-006', materialCode: 'MAT-BOX-02', materialName: '外箱', spec: '12瓶装 / 加厚', department: '福州分厂', planQty: 6000, unit: '个', amount: 18000, assignStatus: '已分配', buyer: '周强', executionStatus: '待执行', riskStatus: '变更审批中' },
  ]

  const PurchasePlanListPage = {
    name: 'PurchasePlanListPage',
    data() {
      return {
        form: {
          keyword: '',
          planClass: '',
          source: '',
          org: '',
          approvalStatus: '',
          publishStatus: '',
          executionStatus: '',
          createdRange: [],
        },
        rows: planRows,
        columns,
        detailRows,
        detailColumns,
        detailFilter: {
          keyword: '',
          executionStatus: '',
          assignStatus: '',
          buyer: '',
          riskStatus: '',
        },
        currentQuick: '全部',
        selectedKeys: [],
        actionVisible: false,
        detailRequestVisible: false,
        detailActionType: 'change',
        actionType: '',
        currentRow: null,
        currentDetail: null,
        actionForm: {
          reason: '',
          description: '',
        },
        detailRequestForm: {
          newQty: '',
          newDemandDate: '',
          reason: '',
          description: '',
        },
      }
    },
    computed: {
      filteredRows() {
        return this.rows.filter((row) => {
          const keyword = this.form.keyword.trim()
          if (keyword && !`${row.id}${row.name}`.includes(keyword)) return false
          if (this.form.planClass && row.planClass !== this.form.planClass) return false
          if (this.form.source && row.source !== this.form.source) return false
          if (this.form.org && row.org !== this.form.org) return false
          if (this.form.approvalStatus && row.approvalStatus !== this.form.approvalStatus) return false
          if (this.form.publishStatus && row.publishStatus !== this.form.publishStatus) return false
          if (this.form.executionStatus && row.executionStatus !== this.form.executionStatus) return false
          if (this.currentQuick !== '全部' && !this.matchQuick(row, this.currentQuick)) return false
          return true
        })
      },
      totalAmount() {
        return this.filteredRows.reduce((sum, row) => sum + Number(row.amount || 0), 0)
      },
      pendingApprovalCount() {
        return this.rows.filter((row) => row.approvalStatus === '审批中').length
      },
      pendingPublishCount() {
        return this.rows.filter((row) => row.publishStatus === '待发布' || (row.approvalStatus === '已审批' && row.publishStatus === '未发布')).length
      },
      pendingAssignCount() {
        return this.rows.reduce((sum, row) => sum + Number(row.unassignedCount || 0), 0)
      },
      urgentCount() {
        return this.rows.filter((row) => row.planClass === '紧急采购计划').length
      },
      actionTitle() {
        if (!this.currentRow) return '计划操作'
        if (this.actionType === 'view') return `采购计划详情 - ${this.currentRow.id}`
        if (this.actionType === 'edit') return `编辑采购计划 - ${this.currentRow.id}`
        if (this.actionType === 'publish') return `进入任务分配 - ${this.currentRow.id}`
        if (this.actionType === 'assign') return `分配采购员 - ${this.currentRow.id}`
        if (this.actionType === 'withdraw') return `撤回审批 - ${this.currentRow.id}`
        if (this.actionType === 'cancel') return `申请整单作废 - ${this.currentRow.id}`
        return `计划操作 - ${this.currentRow.id}`
      },
      filteredDetailRows() {
        return this.detailRows.filter((row) => {
          const keyword = this.detailFilter.keyword.trim()
          if (keyword && !`${row.materialName}${row.materialCode}`.includes(keyword)) return false
          if (this.detailFilter.executionStatus && row.executionStatus !== this.detailFilter.executionStatus) return false
          if (this.detailFilter.assignStatus && row.assignStatus !== this.detailFilter.assignStatus) return false
          if (this.detailFilter.buyer && row.buyer !== this.detailFilter.buyer) return false
          if (this.detailFilter.riskStatus && row.riskStatus !== this.detailFilter.riskStatus) return false
          return true
        })
      },
    },
    methods: {
      matchQuick(row, value) {
        const quickMap = {
          草稿: row.approvalStatus === '草稿',
          审批中: row.approvalStatus === '审批中',
          待发布: row.publishStatus === '待发布' || (row.approvalStatus === '已审批' && row.publishStatus === '未发布'),
          待分配: row.unassignedCount > 0 && row.publishStatus === '已发布',
          执行中: row.executionStatus === '执行中',
          变更中: this.detailRows.some((detail) => detail.riskStatus === '变更审批中'),
          作废中: row.requestStatus === '整单作废审批中' || this.detailRows.some((detail) => detail.riskStatus === '作废审批中'),
          已完成: row.executionStatus === '已完成',
        }
        return Boolean(quickMap[value])
      },
      onReset() {
        this.form = {
          keyword: '',
          planClass: '',
          source: '',
          org: '',
          approvalStatus: '',
          publishStatus: '',
          executionStatus: '',
          createdRange: [],
        }
        this.currentQuick = '全部'
      },
      colorOf(value) {
        if (['紧急采购计划', '作废中', '整单作废审批中', '作废审批中'].includes(value)) return 'red'
        if (['已审批', '已发布', '已完成', '正常'].includes(value)) return 'green'
        if (['审批中', '待发布', '待执行', '执行中'].includes(value)) return 'arcoblue'
        if (['免审批'].includes(value)) return 'orange'
        if (['未发布', '草稿', '已撤回'].includes(value)) return 'gray'
        return 'purple'
      },
      hasPlanRequest(row) {
        return row.requestStatus === '整单作废审批中'
      },
      canSubmit(row) {
        return row.planClass === '普通采购计划' && ['草稿', '已驳回', '已撤回'].includes(row.approvalStatus)
      },
      canWithdraw(row) {
        return row.approvalStatus === '审批中'
      },
      canPublish(row) {
        if (this.hasPlanRequest(row)) return false
        if (row.publishStatus === '已发布') return false
        if (row.planClass === '紧急采购计划') return row.approvalStatus === '免审批'
        return row.approvalStatus === '已审批'
      },
      canAssign(row) {
        return !this.hasPlanRequest(row) && row.publishStatus === '已发布' && row.unassignedCount > 0 && !['已完成', '已作废'].includes(row.executionStatus)
      },
      canApplyPlanCancel(row) {
        return !this.hasPlanRequest(row) && ['已审批', '免审批'].includes(row.approvalStatus) && !['已完成', '已作废'].includes(row.executionStatus)
      },
      withdrawEditPlanRequest(row) {
        row.requestStatus = '正常'
        this.openAction(row, 'cancel')
        ArcoVue.Message.info(`${row.id} 已撤回审批，可修改申请后重新提交`)
      },
      canReassignDetail(row) {
        return row.assignStatus === '已分配' && !['已完成', '已作废'].includes(row.executionStatus) && !row.riskStatus.includes('审批中')
      },
      canChangeDetail(row) {
        return ['待执行', '执行中'].includes(row.executionStatus) && row.riskStatus === '正常'
      },
      canCancelDetail(row) {
        return ['待执行', '执行中'].includes(row.executionStatus) && row.riskStatus === '正常'
      },
      canWithdrawDetail(row) {
        return row.riskStatus.includes('审批中')
      },
      operateDetail(row, action) {
        if (['change', 'cancel'].includes(action)) {
          this.currentDetail = row
          this.detailActionType = action
          this.detailRequestForm = {
            newQty: `${row.planQty} ${row.unit}`,
            newDemandDate: '2026-09-10',
            reason: '',
            description: '',
          }
          this.detailRequestVisible = true
          return
        }
        if (action === 'withdraw') {
          const nextAction = row.riskStatus === '作废审批中' ? 'cancel' : 'change'
          row.riskStatus = '正常'
          this.operateDetail(row, nextAction)
          ArcoVue.Message.info(`${row.id} 已撤回审批，可修改申请后重新提交`)
          return
        }
        const messageMap = {
          reassign: `${row.id} 已打开重新分配采购员窗口`,
          view: `${row.id} 已查看明细详情`,
        }
        ArcoVue.Message.info(messageMap[action] || messageMap.view)
      },
      submitDetailRequest() {
        if (!this.detailRequestForm.reason || !this.detailRequestForm.description) {
          ArcoVue.Message.warning('请填写申请原因和影响说明')
          return
        }
        this.currentDetail.riskStatus = this.detailActionType === 'change' ? '变更审批中' : '作废审批中'
        this.detailRequestVisible = false
        ArcoVue.Message.success(`${this.currentDetail.id} 已由采购计划员提交${this.detailActionType === 'change' ? '变更' : '作废'}申请，需采购领导审批`)
      },
      openAction(row, type) {
        this.currentRow = row
        this.actionType = type
        this.actionForm = {
          reason: '',
          description: '',
        }
        this.actionVisible = true
      },
      confirmAction() {
        const messageMap = {
          view: '已查看计划详情',
          edit: '采购计划修改已保存',
          publish: '已进入采购任务分配流程',
          assign: '已进入采购任务分配流程',
        }
        if (this.actionType === 'withdraw') {
          ArcoVue.Message.success('已提交撤回审批操作，计划回到已撤回状态')
        }
        if (this.actionType === 'cancel') {
          this.currentRow.requestStatus = '整单作废审批中'
          ArcoVue.Message.success('已由采购计划员发起整单作废申请，需采购领导审批')
        }
        if (messageMap[this.actionType]) {
          ArcoVue.Message.success(messageMap[this.actionType])
        }
        this.actionVisible = false
      },
      submitApproval(row) {
        ArcoVue.Message.success(`${row.id} 已提交计划审批`)
      },
      enterTaskAssignment(row) {
        if (row && this.canPublish(row)) {
          row.publishStatus = '已发布'
          row.executionStatus = '执行中'
        }
        window.location.href = 'purchase-task-assignment.html'
      },
      goCreatePlan(planClass) {
        if (planClass === 'urgent') {
          window.location.href = 'create-purchase-plan.html?planClass=urgent'
          return
        }
        window.location.href = 'create-purchase-plan.html?planClass=normal'
      },
      goDemandPool() {
        window.location.href = 'group-demand-pool.html'
      },
      goAssignPage() {
        window.location.href = 'purchase-task-assignment.html'
      },
      placeholder(action, row) {
        const typeMap = {
          查看: 'view',
          查看计划详情: 'view',
          编辑: 'edit',
          分配采购员: 'assign',
        }
        this.openAction(row, typeMap[action] || 'view')
      },
      formatMoney(value) {
        return `¥${Number(value || 0).toLocaleString('zh-CN', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`
      },
    },
    template: `
      <div class="purchase-page">
        <div class="purchase-kpi-grid">
          <div class="purchase-kpi-card">
            <div class="purchase-kpi-label">当前计划数</div>
            <div class="purchase-kpi-value">{{ rows.length }}</div>
            <div class="purchase-kpi-sub">普通与紧急计划统一查询</div>
          </div>
          <div class="purchase-kpi-card">
            <div class="purchase-kpi-label">审批中</div>
            <div class="purchase-kpi-value">{{ pendingApprovalCount }}</div>
            <div class="purchase-kpi-sub">可执行撤回审批</div>
          </div>
          <div class="purchase-kpi-card">
            <div class="purchase-kpi-label">待进入分配</div>
            <div class="purchase-kpi-value">{{ pendingPublishCount }}</div>
            <div class="purchase-kpi-sub">紧急计划可直接进入分配</div>
          </div>
          <div class="purchase-kpi-card">
            <div class="purchase-kpi-label">待分配明细</div>
            <div class="purchase-kpi-value">{{ pendingAssignCount }}</div>
            <div class="purchase-kpi-sub">进入采购任务分配后处理</div>
          </div>
        </div>

        <a-card class="general-card pro-page-card">
          <div class="purchase-section-title">筛选区</div>
          <a-form :model="form" layout="vertical">
            <a-row :gutter="16">
              <a-col :xs="24" :md="6">
                <a-form-item label="计划编号/名称">
                  <a-input v-model="form.keyword" allow-clear placeholder="请输入计划编号或名称" />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="6">
                <a-form-item label="计划分类">
                  <a-select v-model="form.planClass" allow-clear placeholder="请选择">
                    <a-option value="普通采购计划">普通采购计划</a-option>
                    <a-option value="紧急采购计划">紧急采购计划</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="6">
                <a-form-item label="计划来源">
                  <a-select v-model="form.source" allow-clear placeholder="请选择">
                    <a-option value="需求池生成">需求池生成</a-option>
                    <a-option value="EXCEL导入">EXCEL导入</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="6">
                <a-form-item label="采购组织">
                  <a-select v-model="form.org" allow-clear placeholder="请选择">
                    <a-option value="集团采购中心">集团采购中心</a-option>
                    <a-option value="华东采购组织">华东采购组织</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="6">
                <a-form-item label="审批状态">
                  <a-select v-model="form.approvalStatus" allow-clear placeholder="请选择">
                    <a-option value="草稿">草稿</a-option>
                    <a-option value="审批中">审批中</a-option>
                    <a-option value="已审批">已审批</a-option>
                    <a-option value="已驳回">已驳回</a-option>
                    <a-option value="已撤回">已撤回</a-option>
                    <a-option value="免审批">免审批</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="6">
                <a-form-item label="发布状态">
                  <a-select v-model="form.publishStatus" allow-clear placeholder="请选择">
                    <a-option value="未发布">未发布</a-option>
                    <a-option value="待发布">待发布</a-option>
                    <a-option value="已发布">已发布</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="6">
                <a-form-item label="执行状态">
                  <a-select v-model="form.executionStatus" allow-clear placeholder="请选择">
                    <a-option value="待执行">待执行</a-option>
                    <a-option value="执行中">执行中</a-option>
                    <a-option value="已完成">已完成</a-option>
                    <a-option value="已作废">已作废</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :xs="24" :md="6">
                <a-form-item label="创建时间">
                  <a-range-picker v-model="form.createdRange" class="pro-field-block" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
          <a-space>
            <a-button type="primary"><template #icon><icon-search /></template>查询</a-button>
            <a-button @click="onReset"><template #icon><icon-refresh /></template>重置</a-button>
          </a-space>
        </a-card>

        <a-card class="general-card pro-page-card">
          <div class="purchase-toolbar">
            <div>
              <div class="purchase-section-title">采购计划列表</div>
              <div class="purchase-muted">普通计划审批通过后进入采购任务分配；紧急计划免审批，可直接进入采购任务分配。</div>
            </div>
            <a-space>
              <a-button @click="goDemandPool">返回需求池</a-button>
              <a-button @click="goCreatePlan('urgent')">创建紧急采购计划</a-button>
              <a-button type="primary" @click="goCreatePlan('normal')"><template #icon><icon-plus /></template>创建普通采购计划</a-button>
            </a-space>
          </div>

          <a-radio-group v-model="currentQuick" type="button" class="purchase-tabs">
            <a-radio value="全部">全部</a-radio>
            <a-radio value="审批中">审批中</a-radio>
            <a-radio value="待发布">待发布</a-radio>
            <a-radio value="待分配">待分配</a-radio>
            <a-radio value="执行中">执行中</a-radio>
            <a-radio value="变更中">变更中</a-radio>
            <a-radio value="作废中">作废中</a-radio>
            <a-radio value="已完成">已完成</a-radio>
          </a-radio-group>

          <a-alert type="info" show-icon style="margin-bottom: 16px">
            列表操作按状态动态展示：审批中可撤回审批；普通计划审批通过后才能进入任务分配；紧急计划免审批，可直接进入任务分配；整张采购计划可申请整单作废并默认走审批。
          </a-alert>

          <a-table
            :columns="columns"
            :data="filteredRows"
            row-key="id"
            :pagination="false"
            :bordered="false"
            :scroll="{ x: 1800 }"
            :row-selection="{ type: 'checkbox', showCheckedAll: true, width: 48 }"
            :selected-keys="selectedKeys"
            @selection-change="(keys) => (selectedKeys = keys)"
          >
            <template #planNo="{ record }">
              <span class="purchase-link" @click="placeholder('查看计划详情', record)">{{ record.id }}</span>
            </template>
            <template #planClass="{ record }">
              <a-tag :color="colorOf(record.planClass)">{{ record.planClass }}</a-tag>
            </template>
            <template #amount="{ record }">{{ formatMoney(record.amount) }}</template>
            <template #lineProgress="{ record }">
              <div>明细 {{ record.lineCount }} 条</div>
              <div class="purchase-muted">已分配 {{ record.assignedCount }} / 未分配 {{ record.unassignedCount }}</div>
            </template>
            <template #risk="{ record }">
              <a-space :size="4">
                <a-tag v-if="record.changeCount" color="orange">明细变更 {{ record.changeCount }}</a-tag>
                <a-tag v-if="record.cancelCount" color="red">明细作废 {{ record.cancelCount }}</a-tag>
                <span v-if="!record.changeCount && !record.cancelCount" class="purchase-muted">无</span>
              </a-space>
            </template>
            <template #requestStatus="{ record }">
              <a-tag :color="colorOf(record.requestStatus)">{{ record.requestStatus }}</a-tag>
            </template>
            <template #approvalStatus="{ record }">
              <a-tag :color="colorOf(record.approvalStatus)">{{ record.approvalStatus }}</a-tag>
            </template>
            <template #publishStatus="{ record }">
              <a-tag :color="colorOf(record.publishStatus)">{{ record.publishStatus }}</a-tag>
            </template>
            <template #executionStatus="{ record }">
              <a-tag :color="colorOf(record.executionStatus)">{{ record.executionStatus }}</a-tag>
            </template>
            <template #operations="{ record }">
              <a-space class="pro-table-ops" :size="4" wrap>
                <a-button type="text" size="small" @click="placeholder('查看', record)">查看</a-button>
                <a-button v-if="canSubmit(record)" type="text" size="small" @click="placeholder('编辑', record)">编辑</a-button>
                <a-button v-if="canSubmit(record)" type="text" size="small" @click="submitApproval(record)">提交审批</a-button>
                <a-button v-if="canWithdraw(record)" type="text" size="small" @click="openAction(record, 'withdraw')">撤回审批</a-button>
                <a-button v-if="hasPlanRequest(record)" type="text" size="small" @click="withdrawEditPlanRequest(record)">撤回修改</a-button>
                <a-button v-if="canPublish(record) || canAssign(record)" type="text" size="small" @click="enterTaskAssignment(record)">进入任务分配</a-button>
                <a-dropdown trigger="click">
                  <a-button type="text" size="small">更多</a-button>
                  <template #content>
                    <a-doption v-if="canApplyPlanCancel(record)" @click="openAction(record, 'cancel')">申请整单作废</a-doption>
                  </template>
                </a-dropdown>
              </a-space>
            </template>
          </a-table>

          <div class="purchase-table-footer">
            <a-space>
              <span class="purchase-muted">已选 {{ selectedKeys.length }} 条</span>
              <a-button>导出列表</a-button>
              <a-button>导出计划明细</a-button>
            </a-space>
            <a-pagination :total="filteredRows.length" :page-size="10" show-total />
          </div>
        </a-card>

        <a-modal
          v-if="actionVisible"
          :visible="true"
          :title="actionTitle"
          title-align="start"
          :width="actionType === 'view' ? 960 : 560"
          unmount-on-close
          @ok="confirmAction"
          @cancel="actionVisible = false"
        >
          <template v-if="actionType === 'view'">
            <a-descriptions v-if="currentRow" :column="2" bordered>
              <a-descriptions-item label="计划名称">{{ currentRow.name }}</a-descriptions-item>
              <a-descriptions-item label="计划分类">{{ currentRow.planClass }}</a-descriptions-item>
              <a-descriptions-item label="计划来源">{{ currentRow.source }}</a-descriptions-item>
              <a-descriptions-item label="采购组织">{{ currentRow.org }}</a-descriptions-item>
              <a-descriptions-item label="计划总额">{{ formatMoney(currentRow.amount) }}</a-descriptions-item>
              <a-descriptions-item label="明细数量">{{ currentRow.lineCount }} 条</a-descriptions-item>
              <a-descriptions-item label="审批状态">{{ currentRow.approvalStatus }}</a-descriptions-item>
              <a-descriptions-item label="执行状态">{{ currentRow.executionStatus }}</a-descriptions-item>
            </a-descriptions>
            <a-divider />
            <div class="purchase-toolbar">
              <div>
                <div class="purchase-section-title">采购明细列表</div>
                <div class="purchase-muted">计划详情内可分页查看采购明细，并按物料、执行状态、分配状态、采购员、变更/作废状态筛选。</div>
              </div>
            </div>
            <a-form :model="detailFilter" layout="vertical">
              <a-row :gutter="12">
                <a-col :xs="24" :md="6">
                  <a-form-item label="物料名称/编码">
                    <a-input v-model="detailFilter.keyword" allow-clear placeholder="请输入物料" />
                  </a-form-item>
                </a-col>
                <a-col :xs="24" :md="5">
                  <a-form-item label="执行状态">
                    <a-select v-model="detailFilter.executionStatus" allow-clear placeholder="全部">
                      <a-option value="待执行">待执行</a-option>
                      <a-option value="执行中">执行中</a-option>
                      <a-option value="已完成">已完成</a-option>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :xs="24" :md="5">
                  <a-form-item label="分配状态">
                    <a-select v-model="detailFilter.assignStatus" allow-clear placeholder="全部">
                      <a-option value="未分配">未分配</a-option>
                      <a-option value="已分配">已分配</a-option>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :xs="24" :md="4">
                  <a-form-item label="采购员">
                    <a-select v-model="detailFilter.buyer" allow-clear placeholder="全部">
                      <a-option value="周强">周强</a-option>
                      <a-option value="陈琳">陈琳</a-option>
                      <a-option value="赵磊">赵磊</a-option>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :xs="24" :md="4">
                  <a-form-item label="变更/作废">
                    <a-select v-model="detailFilter.riskStatus" allow-clear placeholder="全部">
                      <a-option value="正常">正常</a-option>
                      <a-option value="变更审批中">变更审批中</a-option>
                      <a-option value="作废审批中">作废审批中</a-option>
                    </a-select>
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
            <a-table
              :columns="detailColumns"
              :data="filteredDetailRows"
              row-key="id"
              :bordered="false"
              :pagination="{ pageSize: 3, showTotal: true }"
              :scroll="{ x: 1360 }"
            >
              <template #material="{ record }">
                <div>{{ record.materialName }}</div>
                <div class="purchase-muted">{{ record.materialCode }}｜{{ record.spec }}</div>
              </template>
              <template #planQty="{ record }">{{ record.planQty }} {{ record.unit }}</template>
              <template #detailAmount="{ record }">{{ formatMoney(record.amount) }}</template>
              <template #assignStatus="{ record }">
                <a-tag :color="record.assignStatus === '已分配' ? 'green' : 'orange'">{{ record.assignStatus }}</a-tag>
              </template>
              <template #detailExecutionStatus="{ record }">
                <a-tag :color="colorOf(record.executionStatus)">{{ record.executionStatus }}</a-tag>
              </template>
              <template #riskStatus="{ record }">
                <a-tag :color="colorOf(record.riskStatus)">{{ record.riskStatus }}</a-tag>
              </template>
              <template #detailOperations="{ record }">
                <a-space class="pro-table-ops" :size="4" wrap>
                  <a-button type="text" size="small" @click="operateDetail(record, 'view')">查看</a-button>
                  <a-button v-if="canReassignDetail(record)" type="text" size="small" @click="operateDetail(record, 'reassign')">重新分配采购员</a-button>
                  <a-button v-if="canChangeDetail(record)" type="text" size="small" @click="operateDetail(record, 'change')">申请变更</a-button>
                  <a-button v-if="canCancelDetail(record)" type="text" status="danger" size="small" @click="operateDetail(record, 'cancel')">申请作废</a-button>
                  <a-button v-if="canWithdrawDetail(record)" type="text" size="small" @click="operateDetail(record, 'withdraw')">撤回修改</a-button>
                </a-space>
              </template>
            </a-table>
            <a-divider />
            <div class="purchase-section-title">审批/操作记录</div>
            <a-timeline style="margin-bottom: 16px">
              <a-timeline-item label="2026-08-31 09:30">采购计划员提交计划审批</a-timeline-item>
              <a-timeline-item label="2026-08-31 10:20">采购领导审批通过，计划进入待发布</a-timeline-item>
              <a-timeline-item label="2026-08-31 11:10">采购计划员进入采购任务分配</a-timeline-item>
            </a-timeline>
          </template>
          <template v-if="actionType === 'edit'">
            <a-alert type="info" show-icon style="margin-bottom: 16px">
              仅草稿、已驳回、已撤回的普通采购计划允许编辑；紧急计划未发布前允许编辑。
            </a-alert>
            <a-form v-if="currentRow" :model="currentRow" layout="vertical">
              <a-form-item label="采购计划名称" required>
                <a-input v-model="currentRow.name" />
              </a-form-item>
              <a-form-item label="采购组织" required>
                <a-select v-model="currentRow.org">
                  <a-option value="集团采购中心">集团采购中心</a-option>
                  <a-option value="华东采购组织">华东采购组织</a-option>
                </a-select>
              </a-form-item>
              <a-form-item label="编辑说明">
                <a-textarea v-model="actionForm.description" placeholder="请输入本次编辑说明" :auto-size="{ minRows: 3, maxRows: 5 }" />
              </a-form-item>
            </a-form>
          </template>
          <template v-if="actionType === 'publish'">
            <a-alert type="success" show-icon style="margin-bottom: 16px">
              普通采购计划审批通过后可进入任务分配；紧急采购计划免审批，可直接进入任务分配。
            </a-alert>
            <a-descriptions v-if="currentRow" :column="2" bordered style="margin-bottom: 16px">
              <a-descriptions-item label="未分配明细">{{ currentRow.unassignedCount }} 条</a-descriptions-item>
              <a-descriptions-item label="已配置方式">{{ currentRow.methodCount }} 条</a-descriptions-item>
              <a-descriptions-item label="进入页面">采购任务分配</a-descriptions-item>
              <a-descriptions-item label="进入后状态">待执行，分配状态更新为未分配/已分配</a-descriptions-item>
            </a-descriptions>
            <a-form :model="actionForm" layout="vertical">
              <a-form-item label="处理说明">
                <a-textarea v-model="actionForm.description" placeholder="请输入处理说明，可为空" :auto-size="{ minRows: 3, maxRows: 5 }" />
              </a-form-item>
            </a-form>
          </template>
          <template v-if="actionType === 'assign'">
            <a-alert type="info" show-icon style="margin-bottom: 16px">
              分配采购员会进入采购任务分配页，页面应展示采购员看板、请假/在职/负荷/负责品类，并支持一键推荐后人工确认。
            </a-alert>
            <a-descriptions v-if="currentRow" :column="2" bordered>
              <a-descriptions-item label="待分配明细">{{ currentRow.unassignedCount }} 条</a-descriptions-item>
              <a-descriptions-item label="推荐策略">品类 + 负荷 + 在职状态</a-descriptions-item>
              <a-descriptions-item label="不可分配提醒">请假/离职/品类不匹配</a-descriptions-item>
              <a-descriptions-item label="确认人">采购计划员</a-descriptions-item>
            </a-descriptions>
          </template>
          <template v-if="actionType === 'withdraw'">
            <a-alert type="warning" show-icon style="margin-bottom: 16px">
              审批中的普通采购计划可由采购计划员撤回审批，撤回后不能继续发布执行。
            </a-alert>
            <a-form :model="actionForm" layout="vertical">
              <a-form-item label="撤回原因" required>
                <a-textarea v-model="actionForm.reason" placeholder="请输入撤回审批原因" :auto-size="{ minRows: 3, maxRows: 5 }" />
              </a-form-item>
            </a-form>
          </template>
          <template v-if="actionType === 'cancel'">
            <a-alert type="warning" show-icon style="margin-bottom: 16px">
              仅采购计划员可发起整单作废；提交后由采购领导审批，审批通过后计划进入已作废；驳回后恢复原计划状态，可重新评估后再次提交。执行中或已生成订单的明细需先做影响检查。
            </a-alert>
            <a-descriptions v-if="currentRow" :column="3" bordered style="margin-bottom: 16px">
              <a-descriptions-item label="申请人">采购计划员</a-descriptions-item>
              <a-descriptions-item label="审批角色">采购领导</a-descriptions-item>
              <a-descriptions-item label="生效方式">审批通过后生效</a-descriptions-item>
              <a-descriptions-item label="计划明细">{{ currentRow.lineCount }} 条</a-descriptions-item>
              <a-descriptions-item label="未分配">{{ currentRow.unassignedCount }} 条</a-descriptions-item>
              <a-descriptions-item label="执行状态">{{ currentRow.executionStatus }}</a-descriptions-item>
              <a-descriptions-item label="计划总额">{{ formatMoney(currentRow.amount) }}</a-descriptions-item>
              <a-descriptions-item label="可作废明细">未分配/已分配待执行明细</a-descriptions-item>
              <a-descriptions-item label="不可直接作废">已完成或已生成订单明细</a-descriptions-item>
            </a-descriptions>
            <div class="purchase-impact-grid">
              <div class="purchase-impact-item">
                <div class="purchase-impact-title">未分配明细</div>
                <div class="purchase-impact-desc">审批通过后直接作废，并释放来源需求。</div>
              </div>
              <div class="purchase-impact-item">
                <div class="purchase-impact-title">已分配待执行明细</div>
                <div class="purchase-impact-desc">审批通过后取消采购员任务并作废。</div>
              </div>
              <div class="purchase-impact-item">
                <div class="purchase-impact-title">执行中/订单关联明细</div>
                <div class="purchase-impact-desc">需影响检查，已生成采购订单的转采购订单变更。</div>
              </div>
            </div>
            <a-form :model="actionForm" layout="vertical">
              <a-form-item label="作废原因" required>
                <a-select v-model="actionForm.reason" placeholder="请选择">
                  <a-option value="需求取消">需求取消</a-option>
                  <a-option value="计划重复">计划重复</a-option>
                  <a-option value="采购策略调整">采购策略调整</a-option>
                  <a-option value="其他">其他</a-option>
                </a-select>
              </a-form-item>
              <a-form-item label="作废说明">
                <a-textarea v-model="actionForm.description" placeholder="请说明整单作废影响" :auto-size="{ minRows: 3, maxRows: 5 }" />
              </a-form-item>
            </a-form>
          </template>
        </a-modal>
        <a-modal
          v-model:visible="detailRequestVisible"
          :title="detailActionType === 'change' ? '采购明细申请变更' : '采购明细申请作废'"
          width="820px"
          @ok="submitDetailRequest"
        >
          <a-alert :type="detailActionType === 'change' ? 'warning' : 'error'" show-icon style="margin-bottom: 16px">
            仅采购计划员可发起{{ detailActionType === 'change' ? '变更' : '作废' }}申请；提交后由采购领导审批，审批通过前不改变采购明细；驳回后恢复正常，可修改后重新提交。
          </a-alert>
          <a-descriptions v-if="currentDetail" :column="3" bordered style="margin-bottom: 16px">
            <a-descriptions-item label="申请人">采购计划员</a-descriptions-item>
            <a-descriptions-item label="审批角色">采购领导</a-descriptions-item>
            <a-descriptions-item label="生效方式">审批通过后生效</a-descriptions-item>
            <a-descriptions-item label="明细编号">{{ currentDetail.id }}</a-descriptions-item>
            <a-descriptions-item label="物料">{{ currentDetail.materialName }}</a-descriptions-item>
            <a-descriptions-item label="采购部门">{{ currentDetail.department }}</a-descriptions-item>
            <a-descriptions-item label="当前数量">{{ currentDetail.planQty }} {{ currentDetail.unit }}</a-descriptions-item>
            <a-descriptions-item label="当前执行状态">{{ currentDetail.executionStatus }}</a-descriptions-item>
            <a-descriptions-item label="当前采购员">{{ currentDetail.buyer }}</a-descriptions-item>
          </a-descriptions>
          <a-form :model="detailRequestForm" layout="vertical">
            <a-row v-if="detailActionType === 'change'" :gutter="16">
              <a-col :span="12">
                <a-form-item label="变更后采购数量" required>
                  <a-input v-model="detailRequestForm.newQty" placeholder="仅允许变更采购数量" />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="变更后期望需求时间" required>
                  <a-date-picker v-model="detailRequestForm.newDemandDate" style="width: 100%" />
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item :label="detailActionType === 'change' ? '变更原因' : '作废原因'" required>
              <a-select v-model="detailRequestForm.reason" placeholder="请选择">
                <a-option value="需求数量调整">需求数量调整</a-option>
                <a-option value="期望需求时间调整">期望需求时间调整</a-option>
                <a-option value="需求取消">需求取消</a-option>
                <a-option value="计划重复">计划重复</a-option>
                <a-option value="其他">其他</a-option>
              </a-select>
            </a-form-item>
            <a-form-item label="影响说明" required>
              <a-textarea v-model="detailRequestForm.description" placeholder="请说明对采购执行、采购员任务和供应保障的影响" :auto-size="{ minRows: 3, maxRows: 5 }" />
            </a-form-item>
          </a-form>
        </a-modal>
      </div>
    `,
  }

  mountProPage({
    pageKey: 'purchase-plan/list',
    title: '采购计划列表',
    pageComponent: PurchasePlanListPage,
  })
})()
