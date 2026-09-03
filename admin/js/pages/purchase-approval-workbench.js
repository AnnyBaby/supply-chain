;(function () {
  const approvalRows = [
    {
      id: 'AP-20260831-001',
      type: '采购计划审批',
      sourceNo: 'PP-202609-001',
      title: '2026年9月集团普通采购计划审批',
      applicant: '采购计划员-王敏',
      department: '集团采购中心',
      role: '采购领导',
      applyTime: '2026-08-31 09:30',
      nodeLimit: '8小时',
      stayTime: '7小时20分钟',
      timeoutPoint: '2026-08-31 17:30',
      timeStatus: '即将超时',
      urgency: '普通',
      status: '待审批',
      detail: {
        planName: '2026年9月集团普通采购计划',
        planClass: '普通采购计划',
        purchaseOrg: '集团采购中心',
        totalAmount: 123000,
        budgetRefs: [
          { period: '月度采购计划', totalBudget: 1800000, remainingBudget: 420000 },
          { period: '季度采购计划', totalBudget: 5200000, remainingBudget: 1560000 },
          { period: '年度采购计划', totalBudget: 21000000, remainingBudget: 6800000 },
        ],
        lineCount: 3,
        description: '覆盖已审批分厂采购需求，相同物料与相同窗口期需求由采购计划员确认后合并。',
        lines: [
          { id: 'LINE-001', material: '瓶盖', departments: '厦门分厂、漳州分厂', qty: '180000 个', price: 0.08, amount: 14400, demandDate: '2026-09-10' },
          { id: 'LINE-002', material: '高强螺栓 B', departments: '福州分厂', qty: '3000 件', price: 1.8, amount: 5400, demandDate: '2026-09-08' },
          { id: 'LINE-003', material: '伺服电机', departments: '泉州分厂', qty: '12 台', price: 8600, amount: 103200, demandDate: '2026-09-01' },
        ],
      },
    },
    {
      id: 'AP-20260831-002',
      type: '采购任务变更审批',
      sourceNo: 'LINE-003',
      title: '伺服电机采购任务期望需求时间变更',
      applicant: '采购计划员-赵露',
      department: '集团采购中心',
      role: '采购领导',
      applyTime: '2026-08-31 11:10',
      nodeLimit: '6小时',
      stayTime: '6小时35分钟',
      timeoutPoint: '2026-08-31 17:10',
      timeStatus: '已超时',
      urgency: '紧急',
      status: '待审批',
      detail: {
        planNo: 'PP-202609-002',
        lineNo: 'LINE-003',
        material: '伺服电机 MAT-MTR-07｜7.5KW / IP55',
        oldQuantity: '12 台',
        newQuantity: '12 台',
        oldDemandDate: '2026-09-01',
        newDemandDate: '2026-09-03',
        reason: '采购员异议审核通过，供应商无法满足原期望需求时间。',
        impact: '预计影响泉州分厂设备维修窗口，需同步通知申请部门调整备件到货预期。',
      },
    },
    {
      id: 'AP-20260831-003',
      type: '采购任务作废审批',
      sourceNo: 'LINE-005',
      title: '温度传感器采购任务作废申请',
      applicant: '采购计划员-李娜',
      department: '集团采购中心',
      role: '采购领导',
      applyTime: '2026-08-31 13:25',
      nodeLimit: '8小时',
      stayTime: '2小时10分钟',
      timeoutPoint: '2026-08-31 21:25',
      timeStatus: '正常',
      urgency: '普通',
      status: '待审批',
      detail: {
        planNo: 'PP-202609-001',
        lineNo: 'LINE-005',
        material: '温度传感器 MAT-SEN-11｜PT100 / 防水',
        buyer: '陈琳',
        cancelReason: '来源需求取消，采购任务无需继续执行。',
        impact: '作废后释放来源需求占用，不再纳入采购任务负荷。',
        releaseDemand: '是，审批通过后释放/回写来源需求',
      },
    },
    {
      id: 'AP-20260831-004',
      type: '整单采购计划作废审批',
      sourceNo: 'PP-202608-012',
      title: '2026年8月紧急采购计划整单作废',
      applicant: '采购计划员-王敏',
      department: '集团采购中心',
      role: '采购领导',
      applyTime: '2026-08-31 14:00',
      nodeLimit: '4小时',
      stayTime: '3小时30分钟',
      timeoutPoint: '2026-08-31 18:00',
      timeStatus: '即将超时',
      urgency: '紧急',
      status: '待审批',
      detail: {
        planNo: 'PP-202608-012',
        planName: '2026年8月集团紧急采购计划',
        totalAmount: 54000,
        lineCount: 1,
        assignedCount: 0,
        runningCount: 0,
        cancelReason: '分厂撤回紧急维修需求，整单计划无需继续执行。',
        impact: '审批通过后整单作废，计划明细不再进入任务分配。',
      },
    },
    {
      id: 'AP-20260831-005',
      type: '采购任务异议审批',
      sourceNo: 'LINE-004',
      title: '循环泵总成采购任务异议',
      applicant: '采购员-陈琳',
      department: '集团采购中心',
      role: '采购领导',
      applyTime: '2026-08-31 16:30',
      nodeLimit: '4小时',
      stayTime: '50分钟',
      timeoutPoint: '2026-08-31 20:30',
      timeStatus: '正常',
      urgency: '紧急',
      status: '待审批',
      detail: {
        planNo: 'PP-202608-012',
        lineNo: 'LINE-004',
        material: '循环泵总成 MAT-PMP-03｜DN80 / 22KW',
        buyer: '陈琳',
        purchaseMethod: '-',
        executeStatus: '待执行',
        objectionType: '当前负荷过高',
        suggestion: '变更采购员',
        reason: '采购员本周同时处理多个紧急机电任务，无法保障该任务及时询源。',
        impact: '若继续由当前采购员处理，可能影响紧急维修到货时间。',
        notifyPlanner: '审批通过后抄送采购计划员-王敏',
      },
    },
    {
      id: 'AP-20260830-006',
      type: '采购计划审批',
      sourceNo: 'PP-202608-010',
      title: '2026年8月集团普通采购计划审批',
      applicant: '采购计划员-李娜',
      department: '集团采购中心',
      role: '采购领导',
      applyTime: '2026-08-30 10:20',
      nodeLimit: '8小时',
      stayTime: '1小时15分钟',
      timeoutPoint: '2026-08-30 18:20',
      timeStatus: '正常',
      urgency: '普通',
      status: '已通过',
      detail: {
        planName: '2026年8月集团普通采购计划',
        planClass: '普通采购计划',
        purchaseOrg: '集团采购中心',
        totalAmount: 68000,
        budgetRefs: [
          { period: '月度采购计划', totalBudget: 1600000, remainingBudget: 580000 },
          { period: '季度采购计划', totalBudget: 4800000, remainingBudget: 1710000 },
          { period: '年度采购计划', totalBudget: 21000000, remainingBudget: 6923000 },
        ],
        lineCount: 2,
        description: '已完成采购领导审批并发布执行。',
        lines: [
          { id: 'LINE-009', material: '轴承', departments: '厦门分厂', qty: '200 件', price: 120, amount: 24000, demandDate: '2026-08-20' },
          { id: 'LINE-010', material: '密封圈', departments: '漳州分厂', qty: '4000 个', price: 11, amount: 44000, demandDate: '2026-08-23' },
        ],
      },
    },
    {
      id: 'AP-20260830-007',
      type: '采购任务变更审批',
      sourceNo: 'LINE-006',
      title: '外箱采购任务数量变更申请撤回',
      applicant: '采购计划员-王敏',
      department: '集团采购中心',
      role: '采购领导',
      applyTime: '2026-08-30 15:40',
      nodeLimit: '8小时',
      stayTime: '20分钟',
      timeoutPoint: '2026-08-30 23:40',
      timeStatus: '正常',
      urgency: '普通',
      status: '已撤回',
      detail: {
        planNo: 'PP-202609-003',
        lineNo: 'LINE-006',
        material: '外箱 MAT-BOX-02｜12瓶装 / 加厚',
        oldQuantity: '6000 个',
        newQuantity: '7200 个',
        oldDemandDate: '2026-09-16',
        newDemandDate: '2026-09-16',
        reason: '申请人发现数量填写错误，已撤回修改。',
        impact: '撤回后任务保持原采购数量，未进入审批生效。',
      },
    },
  ]

  const ApprovalWorkbenchPage = {
    data() {
      return {
        filters: {
          keyword: '',
          type: '',
          status: '',
          timeStatus: '',
          urgency: '',
        },
        rows: approvalRows,
        currentRow: null,
        detailVisible: false,
        approveVisible: false,
      approveForm: {
        result: '通过',
        opinion: '',
      },
      businessResult: '',
        columns: [
          { title: '申请编号', dataIndex: 'id', slotName: 'id', width: 160 },
          { title: '审批类型', dataIndex: 'type', slotName: 'type', width: 170 },
          { title: '来源单号', dataIndex: 'sourceNo', width: 140 },
          { title: '申请标题', dataIndex: 'title', width: 260 },
          { title: '申请人', dataIndex: 'applicant', width: 150 },
          { title: '申请部门', dataIndex: 'department', width: 140 },
          { title: '当前审批角色', dataIndex: 'role', width: 120 },
          { title: '申请时间', dataIndex: 'applyTime', width: 160 },
          { title: '已停留时长/超时点', dataIndex: 'stayTime', slotName: 'stayTimeout', width: 170 },
          { title: '审批时效', dataIndex: 'timeStatus', slotName: 'timeStatus', width: 120 },
          { title: '紧急程度', dataIndex: 'urgency', slotName: 'urgency', width: 100 },
          { title: '审批状态', dataIndex: 'status', slotName: 'status', width: 110 },
          { title: '操作', slotName: 'operations', width: 150, fixed: 'right' },
        ],
        lineColumns: [
          { title: '明细编号', dataIndex: 'id', width: 110 },
          { title: '物料', dataIndex: 'material' },
          { title: '采购部门', dataIndex: 'departments', width: 160 },
          { title: '数量', dataIndex: 'qty', width: 110 },
          { title: '预计单价', dataIndex: 'price', slotName: 'lineMoney', width: 120 },
          { title: '预算总额', dataIndex: 'amount', slotName: 'lineMoney', width: 130 },
          { title: '期望需求时间', dataIndex: 'demandDate', width: 130 },
        ],
      }
    },
    computed: {
      filteredRows() {
        return this.rows.filter((row) => {
          const keyword = this.filters.keyword.trim()
          const hitKeyword = !keyword || [row.id, row.sourceNo, row.title, row.applicant].some((item) => item.includes(keyword))
          const hitType = !this.filters.type || row.type === this.filters.type
          const hitStatus = !this.filters.status || row.status === this.filters.status
          const hitTime = !this.filters.timeStatus || row.timeStatus === this.filters.timeStatus
          const hitUrgency = !this.filters.urgency || row.urgency === this.filters.urgency
          return hitKeyword && hitType && hitStatus && hitTime && hitUrgency
        })
      },
      pendingCount() {
        return this.rows.filter((row) => row.status === '待审批').length
      },
      warningCount() {
        return this.rows.filter((row) => row.status === '待审批' && row.timeStatus === '即将超时').length
      },
      timeoutCount() {
        return this.rows.filter((row) => row.status === '待审批' && row.timeStatus === '已超时').length
      },
      handledTodayCount() {
        return this.rows.filter((row) => ['已通过', '已驳回'].includes(row.status)).length
      },
    },
    methods: {
      statusColor(status) {
        const map = {
          待审批: 'orange',
          已通过: 'green',
          已驳回: 'red',
          已撤回: 'gray',
          正常: 'green',
          即将超时: 'orange',
          已超时: 'red',
          普通: 'blue',
          紧急: 'red',
          采购计划审批: 'blue',
          采购任务变更审批: 'purple',
          采购任务作废审批: 'red',
          整单采购计划作废审批: 'red',
          采购任务异议审批: 'orange',
        }
        return map[status] || 'blue'
      },
      formatMoney(value) {
        return `¥${Number(value || 0).toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      },
      resetFilters() {
        this.filters = { keyword: '', type: '', status: '', timeStatus: '', urgency: '' }
      },
      openDetail(row) {
        this.currentRow = row
        this.detailVisible = true
      },
      openApprove(row) {
        this.currentRow = row
        this.approveForm = {
          result: '通过',
          opinion: '',
        }
        this.businessResult = ''
        this.approveVisible = true
      },
      submitApprove() {
        this.currentRow.status = this.approveForm.result === '通过' ? '已通过' : '已驳回'
        this.businessResult = this.approvalResultEffect(this.currentRow, this.approveForm.result)
        this.approveVisible = false
        this.$modal.success({
          title: `${this.currentRow.id} 已${this.approveForm.result}`,
          content: this.businessResult,
        })
      },
      approvalEffect(row) {
        const map = {
          采购计划审批: '通过后普通采购计划可进入发布/分配执行。',
          采购任务变更审批: '通过后采购任务明细变更生效。',
          采购任务作废审批: '通过后采购任务明细作废。',
          整单采购计划作废审批: '通过后采购计划整单作废。',
          采购任务异议审批: '通过后异议变为“异议已通过待计划员处理”，并抄送对应计划员。',
        }
        return map[row.type] || '-'
      },
      approvalResultEffect(row, result) {
        if (result === '驳回') {
          const rejectMap = {
            采购计划审批: '业务状态回写：采购计划变为已驳回，采购计划员可修改后重新提交审批。',
            采购任务变更审批: '业务状态回写：采购任务变更申请已驳回，任务恢复正常，可修改后重新提交。',
            采购任务作废审批: '业务状态回写：采购任务作废申请已驳回，任务恢复正常并继续执行。',
            整单采购计划作废审批: '业务状态回写：整单作废申请已驳回，采购计划恢复原状态。',
            采购任务异议审批: '业务状态回写：异议已驳回，采购任务继续执行，采购员可查看驳回意见。',
          }
          return rejectMap[row.type] || '业务状态回写：申请已驳回。'
        }
        const passMap = {
          采购计划审批: '业务状态回写：采购计划变为审批通过/待发布，采购计划员可发布执行。',
          采购任务变更审批: '业务状态回写：采购任务变更生效，更新采购数量/期望需求时间，并保留变更记录。',
          采购任务作废审批: '业务状态回写：采购任务变为已作废，按规则释放或回写来源需求。',
          整单采购计划作废审批: '业务状态回写：采购计划变为已作废，可作废明细同步作废，不可直接作废明细进入影响检查。',
          采购任务异议审批: '业务状态回写：异议变为“异议已通过待计划员处理”，并抄送对应采购计划员。',
        }
        return passMap[row.type] || '业务状态回写：申请已通过。'
      },
    },
    template: `
      <div class="purchase-page">
        <div class="purchase-page-header">
          <div>
            <div class="purchase-page-title">采购领导审批工作台</div>
            <div class="purchase-page-desc">统一处理采购计划审批、采购任务变更/作废、整单作废与采购任务异议审批；审批节点最大停留时间由后台审批流程配置，本页只展示即将超时与已超时预警。</div>
          </div>
        </div>

        <div class="purchase-kpi-grid">
          <a-card class="purchase-kpi-card">
            <div class="purchase-kpi-label">待审批</div>
            <div class="purchase-kpi-value">{{ pendingCount }}</div>
            <div class="purchase-kpi-sub">当前需要采购领导处理</div>
          </a-card>
          <a-card class="purchase-kpi-card">
            <div class="purchase-kpi-label">即将超时</div>
            <div class="purchase-kpi-value">{{ warningCount }}</div>
            <div class="purchase-kpi-sub">接近节点最大停留时间</div>
          </a-card>
          <a-card class="purchase-kpi-card">
            <div class="purchase-kpi-label">已超时</div>
            <div class="purchase-kpi-value">{{ timeoutCount }}</div>
            <div class="purchase-kpi-sub">已超过节点最大停留时间</div>
          </a-card>
          <a-card class="purchase-kpi-card">
            <div class="purchase-kpi-label">今日已处理</div>
            <div class="purchase-kpi-value">{{ handledTodayCount }}</div>
            <div class="purchase-kpi-sub">通过/驳回记录</div>
          </a-card>
        </div>

        <a-card class="purchase-filter-card" :bordered="false">
          <a-form :model="filters" layout="vertical">
            <a-row :gutter="16">
              <a-col :span="6">
                <a-form-item label="关键词">
                  <a-input v-model="filters.keyword" placeholder="申请编号、来源单号、标题、申请人" allow-clear />
                </a-form-item>
              </a-col>
              <a-col :span="5">
                <a-form-item label="审批类型">
                  <a-select v-model="filters.type" placeholder="全部" allow-clear>
                    <a-option value="采购计划审批">采购计划审批</a-option>
                    <a-option value="采购任务变更审批">采购任务变更审批</a-option>
                    <a-option value="采购任务作废审批">采购任务作废审批</a-option>
                    <a-option value="整单采购计划作废审批">整单采购计划作废审批</a-option>
                    <a-option value="采购任务异议审批">采购任务异议审批</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="4">
                <a-form-item label="审批状态">
                  <a-select v-model="filters.status" placeholder="全部" allow-clear>
                    <a-option value="待审批">待审批</a-option>
                    <a-option value="已通过">已通过</a-option>
                    <a-option value="已驳回">已驳回</a-option>
                    <a-option value="已撤回">已撤回</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="4">
                <a-form-item label="审批时效">
                  <a-select v-model="filters.timeStatus" placeholder="全部" allow-clear>
                    <a-option value="正常">正常</a-option>
                    <a-option value="即将超时">即将超时</a-option>
                    <a-option value="已超时">已超时</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="3">
                <a-form-item label="紧急程度">
                  <a-select v-model="filters.urgency" placeholder="全部" allow-clear>
                    <a-option value="普通">普通</a-option>
                    <a-option value="紧急">紧急</a-option>
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
              <div class="purchase-section-title">审批事项列表</div>
              <div class="purchase-muted">审批流程配置不在本页展示；节点时效由后台流程计算后在列表中预警。</div>
            </div>
          </div>
          <a-alert type="warning" show-icon class="purchase-alert">
            “即将超时/已超时”来源于审批节点最大停留时间配置，采购领导可优先处理高风险审批事项。
          </a-alert>
          <a-table
            row-key="id"
            :columns="columns"
            :data="filteredRows"
            :scroll="{ x: 2100 }"
            :pagination="{ pageSize: 10 }"
          >
            <template #id="{ record }">
              <div class="purchase-link" @click="openDetail(record)">{{ record.id }}</div>
            </template>
            <template #type="{ record }">
              <a-tag :color="statusColor(record.type)">{{ record.type }}</a-tag>
            </template>
            <template #timeStatus="{ record }">
              <a-tag :color="statusColor(record.timeStatus)">{{ record.timeStatus }}</a-tag>
            </template>
            <template #stayTimeout="{ record }">
              <div>{{ record.stayTime }}</div>
              <div class="purchase-muted">超时点：{{ record.timeoutPoint }}</div>
            </template>
            <template #urgency="{ record }">
              <a-tag :color="statusColor(record.urgency)">{{ record.urgency }}</a-tag>
            </template>
            <template #status="{ record }">
              <a-tag :color="statusColor(record.status)">{{ record.status }}</a-tag>
            </template>
            <template #operations="{ record }">
              <a-space>
                <a-link @click="openDetail(record)">查看详情</a-link>
                <a-link v-if="record.status === '待审批'" @click="openApprove(record)">审批</a-link>
              </a-space>
            </template>
          </a-table>
        </a-card>

        <a-drawer v-model:visible="detailVisible" width="860px" unmount-on-close>
          <template #title>审批申请详情</template>
          <template v-if="currentRow">
            <a-alert :type="currentRow.timeStatus === '已超时' ? 'error' : currentRow.timeStatus === '即将超时' ? 'warning' : 'info'" show-icon class="purchase-alert">
              当前节点：采购领导审批；已停留：{{ currentRow.stayTime }}；超时点：{{ currentRow.timeoutPoint }}；审批时效：{{ currentRow.timeStatus }}。
            </a-alert>

            <a-descriptions :column="2" bordered style="margin-bottom: 16px">
              <a-descriptions-item label="申请编号">{{ currentRow.id }}</a-descriptions-item>
              <a-descriptions-item label="审批类型">{{ currentRow.type }}</a-descriptions-item>
              <a-descriptions-item label="来源单号">{{ currentRow.sourceNo }}</a-descriptions-item>
              <a-descriptions-item label="审批状态">{{ currentRow.status }}</a-descriptions-item>
              <a-descriptions-item label="申请人">{{ currentRow.applicant }}</a-descriptions-item>
              <a-descriptions-item label="申请部门">{{ currentRow.department }}</a-descriptions-item>
              <a-descriptions-item label="申请时间">{{ currentRow.applyTime }}</a-descriptions-item>
              <a-descriptions-item label="审批通过影响">{{ approvalEffect(currentRow) }}</a-descriptions-item>
            </a-descriptions>

            <template v-if="currentRow.type === '采购计划审批'">
              <div class="purchase-section-title">集团采购预算参考</div>
              <div class="purchase-impact-grid">
                <div v-for="item in currentRow.detail.budgetRefs" :key="item.period" class="purchase-impact-item">
                  <div class="purchase-impact-title">{{ item.period }}</div>
                  <div class="purchase-impact-desc">总预算：{{ formatMoney(item.totalBudget) }}</div>
                  <div class="purchase-impact-desc">当前剩余预算：{{ formatMoney(item.remainingBudget) }}</div>
                </div>
              </div>
              <a-descriptions :column="2" bordered>
                <a-descriptions-item label="计划名称">{{ currentRow.detail.planName }}</a-descriptions-item>
                <a-descriptions-item label="计划分类">{{ currentRow.detail.planClass }}</a-descriptions-item>
                <a-descriptions-item label="采购组织">{{ currentRow.detail.purchaseOrg }}</a-descriptions-item>
                <a-descriptions-item label="计划总额">{{ formatMoney(currentRow.detail.totalAmount) }}</a-descriptions-item>
                <a-descriptions-item label="明细数量">{{ currentRow.detail.lineCount }} 条</a-descriptions-item>
                <a-descriptions-item label="计划说明">{{ currentRow.detail.description }}</a-descriptions-item>
              </a-descriptions>
              <a-divider />
              <div class="purchase-section-title">采购明细列表</div>
              <a-table row-key="id" :columns="lineColumns" :data="currentRow.detail.lines" :pagination="false">
                <template #lineMoney="{ record, column }">{{ formatMoney(record[column.dataIndex]) }}</template>
              </a-table>
            </template>

            <template v-if="currentRow.type === '采购任务变更审批'">
              <a-descriptions :column="2" bordered>
                <a-descriptions-item label="来源计划">{{ currentRow.detail.planNo }}</a-descriptions-item>
                <a-descriptions-item label="计划明细编号">{{ currentRow.detail.lineNo }}</a-descriptions-item>
                <a-descriptions-item label="物料信息" :span="2">{{ currentRow.detail.material }}</a-descriptions-item>
                <a-descriptions-item label="原采购数量">{{ currentRow.detail.oldQuantity }}</a-descriptions-item>
                <a-descriptions-item label="变更后采购数量">{{ currentRow.detail.newQuantity }}</a-descriptions-item>
                <a-descriptions-item label="原期望需求时间">{{ currentRow.detail.oldDemandDate }}</a-descriptions-item>
                <a-descriptions-item label="变更后期望需求时间">{{ currentRow.detail.newDemandDate }}</a-descriptions-item>
                <a-descriptions-item label="变更原因" :span="2">{{ currentRow.detail.reason }}</a-descriptions-item>
                <a-descriptions-item label="影响说明" :span="2">{{ currentRow.detail.impact }}</a-descriptions-item>
              </a-descriptions>
            </template>

            <template v-if="currentRow.type === '采购任务作废审批'">
              <a-descriptions :column="2" bordered>
                <a-descriptions-item label="来源计划">{{ currentRow.detail.planNo }}</a-descriptions-item>
                <a-descriptions-item label="计划明细编号">{{ currentRow.detail.lineNo }}</a-descriptions-item>
                <a-descriptions-item label="物料信息" :span="2">{{ currentRow.detail.material }}</a-descriptions-item>
                <a-descriptions-item label="当前采购员">{{ currentRow.detail.buyer }}</a-descriptions-item>
                <a-descriptions-item label="来源需求处理">{{ currentRow.detail.releaseDemand }}</a-descriptions-item>
                <a-descriptions-item label="作废原因" :span="2">{{ currentRow.detail.cancelReason }}</a-descriptions-item>
                <a-descriptions-item label="影响说明" :span="2">{{ currentRow.detail.impact }}</a-descriptions-item>
              </a-descriptions>
            </template>

            <template v-if="currentRow.type === '整单采购计划作废审批'">
              <a-descriptions :column="2" bordered>
                <a-descriptions-item label="计划编号">{{ currentRow.detail.planNo }}</a-descriptions-item>
                <a-descriptions-item label="计划名称">{{ currentRow.detail.planName }}</a-descriptions-item>
                <a-descriptions-item label="计划总额">{{ formatMoney(currentRow.detail.totalAmount) }}</a-descriptions-item>
                <a-descriptions-item label="明细数量">{{ currentRow.detail.lineCount }} 条</a-descriptions-item>
                <a-descriptions-item label="已分配任务数">{{ currentRow.detail.assignedCount }}</a-descriptions-item>
                <a-descriptions-item label="执行中任务数">{{ currentRow.detail.runningCount }}</a-descriptions-item>
                <a-descriptions-item label="作废原因" :span="2">{{ currentRow.detail.cancelReason }}</a-descriptions-item>
                <a-descriptions-item label="影响说明" :span="2">{{ currentRow.detail.impact }}</a-descriptions-item>
              </a-descriptions>
            </template>

            <template v-if="currentRow.type === '采购任务异议审批'">
              <a-descriptions :column="2" bordered>
                <a-descriptions-item label="来源计划">{{ currentRow.detail.planNo }}</a-descriptions-item>
                <a-descriptions-item label="计划明细编号">{{ currentRow.detail.lineNo }}</a-descriptions-item>
                <a-descriptions-item label="物料信息" :span="2">{{ currentRow.detail.material }}</a-descriptions-item>
                <a-descriptions-item label="采购员">{{ currentRow.detail.buyer }}</a-descriptions-item>
                <a-descriptions-item label="采购方式">{{ currentRow.detail.purchaseMethod }}</a-descriptions-item>
                <a-descriptions-item label="执行状态">{{ currentRow.detail.executeStatus }}</a-descriptions-item>
                <a-descriptions-item label="异议类型">{{ currentRow.detail.objectionType }}</a-descriptions-item>
                <a-descriptions-item label="建议处理方式">{{ currentRow.detail.suggestion }}</a-descriptions-item>
                <a-descriptions-item label="抄送计划员">{{ currentRow.detail.notifyPlanner }}</a-descriptions-item>
                <a-descriptions-item label="异议原因" :span="2">{{ currentRow.detail.reason }}</a-descriptions-item>
                <a-descriptions-item label="影响说明" :span="2">{{ currentRow.detail.impact }}</a-descriptions-item>
              </a-descriptions>
            </template>

            <a-divider />
            <a-space>
              <a-button v-if="currentRow.status === '待审批'" type="primary" @click="openApprove(currentRow)">审批</a-button>
              <a-button @click="detailVisible = false">关闭</a-button>
            </a-space>
          </template>
        </a-drawer>

        <a-modal v-model:visible="approveVisible" title="审批处理" width="720px" @ok="submitApprove">
          <a-alert v-if="currentRow" type="warning" show-icon class="purchase-alert">
            当前审批角色为采购领导；审批通过或驳回后，将按申请类型更新对应业务状态。
          </a-alert>
          <a-descriptions v-if="currentRow" :column="2" bordered style="margin-bottom: 16px">
            <a-descriptions-item label="申请编号">{{ currentRow.id }}</a-descriptions-item>
            <a-descriptions-item label="审批类型">{{ currentRow.type }}</a-descriptions-item>
            <a-descriptions-item label="来源单号">{{ currentRow.sourceNo }}</a-descriptions-item>
            <a-descriptions-item label="审批时效">{{ currentRow.timeStatus }}</a-descriptions-item>
          </a-descriptions>
          <a-form :model="approveForm" layout="vertical">
            <a-form-item label="审批结果" required>
              <a-radio-group v-model="approveForm.result">
                <a-radio value="通过">通过</a-radio>
                <a-radio value="驳回">驳回</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="审批意见">
              <a-textarea v-model="approveForm.opinion" placeholder="可填写审批意见" :auto-size="{ minRows: 3, maxRows: 5 }" />
            </a-form-item>
            <a-alert v-if="currentRow" type="info" show-icon>
              {{ approvalResultEffect(currentRow, approveForm.result) }}
            </a-alert>
          </a-form>
        </a-modal>
      </div>
    `,
  }

  mountProPage({
    pageKey: 'purchase-plan/approval-workbench',
    title: '采购领导审批工作台',
    pageComponent: ApprovalWorkbenchPage,
  })
})()
