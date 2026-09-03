;(function () {
  const buyers = [
    {
      id: 'BUY-001',
      name: '周强',
      code: 'CG-001',
      phone: '138-0000-2101',
      inService: '在职',
      leaveStatus: '未请假',
      leaveRange: '-',
      categories: ['包装材料', '标准件'],
      workload: '低',
      workloadPercent: 42,
      pending: 6,
      running: 4,
      recentDone: 28,
      recommendText: '负责包装材料与标准件，当前任务负荷较低，适合承接瓶盖与螺栓类任务。',
    },
    {
      id: 'BUY-002',
      name: '陈琳',
      code: 'CG-002',
      phone: '138-0000-2102',
      inService: '在职',
      leaveStatus: '未请假',
      leaveRange: '-',
      categories: ['机电', '备品备件'],
      workload: '中',
      workloadPercent: 63,
      pending: 8,
      running: 6,
      recentDone: 19,
      recommendText: '机电类采购经验稳定，适合承接伺服电机、泵类等计划明细。',
    },
    {
      id: 'BUY-003',
      name: '赵磊',
      code: 'CG-003',
      phone: '138-0000-2103',
      inService: '在职',
      leaveStatus: '请假中',
      leaveRange: '2026-08-31 ~ 2026-09-02',
      categories: ['机电', '紧急备件'],
      workload: '中',
      workloadPercent: 58,
      pending: 5,
      running: 7,
      recentDone: 16,
      recommendText: '品类匹配但当前请假中，推荐时需要计划员人工判断是否延后或换人。',
    },
    {
      id: 'BUY-004',
      name: '刘洋',
      code: 'CG-004',
      phone: '138-0000-2104',
      inService: '已离职',
      leaveStatus: '未请假',
      leaveRange: '-',
      categories: ['钢材', '五金'],
      workload: '',
      workloadPercent: 0,
      pending: 0,
      running: 0,
      recentDone: 0,
      recommendText: '该人员已离职，不参与采购任务推荐与分配。',
    },
  ]

  const taskRows = [
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
      amount: 14400,
      demandDate: '2026-09-10',
      assignStatus: '未分配',
      executeStatus: '待执行',
      riskStatus: '正常',
      orderStatus: '未生成采购订单',
      buyerId: '',
      recommendedBuyerId: '',
      recommendReason: '',
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
      amount: 5400,
      demandDate: '2026-09-08',
      assignStatus: '未分配',
      executeStatus: '待执行',
      riskStatus: '正常',
      orderStatus: '未生成采购订单',
      buyerId: '',
      recommendedBuyerId: 'BUY-001',
      recommendReason: '品类匹配且当前负荷低',
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
      amount: 103200,
      demandDate: '2026-09-01',
      assignStatus: '已分配',
      executeStatus: '待执行',
      riskStatus: '正常',
      orderStatus: '未生成采购订单',
      buyerId: 'BUY-002',
      recommendedBuyerId: 'BUY-002',
      recommendReason: '紧急计划，机电品类匹配',
      objectionStatus: '异议已通过待计划员处理',
      objectionInfo: {
        type: '数量/时间不合理',
        reason: '采购员反馈供应商无法满足 2026-09-01 到货，建议调整期望需求时间或变更采购员承接。',
        suggestion: '变更采购任务',
        leaderResult: '采购领导审核通过',
        leaderOpinion: '异议成立，已抄送采购计划员-赵露处理。',
        submitter: '陈琳',
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
      amount: 54000,
      demandDate: '2026-09-02',
      assignStatus: '未分配',
      executeStatus: '待执行',
      riskStatus: '正常',
      orderStatus: '未生成采购订单',
      buyerId: '',
      recommendedBuyerId: '',
      recommendReason: '',
      objectionStatus: '无异议',
      objectionInfo: null,
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
      amount: 12800,
      demandDate: '2026-09-14',
      assignStatus: '已分配',
      executeStatus: '待执行',
      riskStatus: '变更审批中',
      orderStatus: '未生成采购订单',
      buyerId: 'BUY-002',
      recommendedBuyerId: 'BUY-002',
      recommendReason: '明细变更审批中，暂不允许重新分配',
      objectionStatus: '无异议',
      objectionInfo: null,
    },
  ]

  const PurchaseTaskAssignmentPage = {
    data() {
      return {
        filters: {
          keyword: '',
          planClass: '',
          category: '',
          assignStatus: '',
          executeStatus: '',
          riskStatus: '',
          department: '',
        },
        rows: taskRows,
        buyers,
        selectedKeys: [],
        activeBuyerId: 'BUY-001',
        assignVisible: false,
        recommendVisible: false,
        requestVisible: false,
        objectionVisible: false,
        requestType: 'change',
        currentRow: null,
        assignForm: {
          buyerId: '',
          reason: '',
          remark: '',
        },
        requestForm: {
          newQuantity: '',
          newDemandDate: '',
          reason: '',
          impact: '',
          releaseDemand: true,
        },
        columns: [
          { title: '明细编号', dataIndex: 'id', slotName: 'id', width: 110 },
          { title: '计划信息', dataIndex: 'planNo', slotName: 'plan', width: 180 },
          { title: '物料信息', dataIndex: 'material', slotName: 'material', width: 210 },
          { title: '品类', dataIndex: 'category', width: 100 },
          { title: '采购部门', dataIndex: 'departments', width: 160 },
          { title: '计划数量', dataIndex: 'quantity', width: 110 },
          { title: '期望需求时间', dataIndex: 'demandDate', width: 130 },
          { title: '执行状态', dataIndex: 'executeStatus', slotName: 'executeStatus', width: 110 },
          { title: '分配状态', dataIndex: 'assignStatus', slotName: 'assignStatus', width: 110 },
          { title: '异议状态', dataIndex: 'objectionStatus', slotName: 'objectionStatus', width: 170 },
          { title: '变更/作废状态', dataIndex: 'riskStatus', slotName: 'riskStatus', width: 130 },
          { title: '当前采购员', dataIndex: 'buyerId', slotName: 'buyer', width: 120 },
          { title: '推荐采购员', dataIndex: 'recommendedBuyerId', slotName: 'recommendedBuyer', width: 140 },
          { title: '推荐说明', dataIndex: 'recommendReason', width: 220 },
          { title: '操作', slotName: 'operations', width: 260 },
        ],
        recommendColumns: [
          { title: '明细编号', dataIndex: 'id', width: 100 },
          { title: '物料信息', dataIndex: 'material', slotName: 'material' },
          { title: '推荐采购员', dataIndex: 'recommendedBuyerId', slotName: 'recommendedBuyer', width: 170 },
          { title: '推荐原因', dataIndex: 'recommendReason' },
          { title: '人工调整', slotName: 'adjust', width: 190 },
        ],
      }
    },
    computed: {
      filteredRows() {
        return this.rows.filter((row) => {
          const keyword = this.filters.keyword.trim()
          const hitKeyword = !keyword || [row.id, row.planNo, row.material, row.materialCode].some((item) => item.includes(keyword))
          const hitPlanClass = !this.filters.planClass || row.planClass === this.filters.planClass
          const hitCategory = !this.filters.category || row.category === this.filters.category
          const hitAssign = !this.filters.assignStatus || row.assignStatus === this.filters.assignStatus
          const hitExecute = !this.filters.executeStatus || row.executeStatus === this.filters.executeStatus
          const hitRisk = !this.filters.riskStatus || row.riskStatus === this.filters.riskStatus
          const hitDept = !this.filters.department || row.departments.includes(this.filters.department)
          return hitKeyword && hitPlanClass && hitCategory && hitAssign && hitExecute && hitRisk && hitDept
        })
      },
      activeBuyer() {
        return this.buyers.find((buyer) => buyer.id === this.activeBuyerId) || this.buyers[0]
      },
      selectedRows() {
        return this.rows.filter((row) => this.selectedKeys.includes(row.id))
      },
      pendingCount() {
        return this.rows.filter((row) => row.assignStatus === '未分配').length
      },
      confirmCount() {
        return this.rows.filter((row) => row.assignStatus === '未分配' && row.recommendedBuyerId).length
      },
      highLoadCount() {
        return this.buyers.filter((buyer) => buyer.workload === '高' || buyer.leaveStatus === '请假中' || buyer.inService !== '在职').length
      },
      urgentCount() {
        return this.rows.filter((row) => row.planClass === '紧急采购计划' && row.assignStatus !== '已分配').length
      },
      objectionTodoCount() {
        return this.rows.filter((row) => row.objectionStatus === '异议已通过待计划员处理').length
      },
      recommendRows() {
        return this.rows.filter((row) => row.assignStatus === '未分配' && row.recommendedBuyerId)
      },
    },
    methods: {
      formatMoney(value) {
        return `¥${Number(value).toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      },
      statusColor(status) {
        const map = {
          未分配: 'gray',
          已分配: 'green',
          审批中: 'purple',
          待执行: 'gray',
          执行中: 'blue',
          已完成: 'green',
          正常: 'green',
          无异议: 'green',
          异议审核中: 'purple',
          异议已驳回: 'red',
          异议已通过待计划员处理: 'orange',
          已处理: 'green',
          变更审批中: 'purple',
          作废审批中: 'red',
          已作废: 'red',
        }
        return map[status] || 'blue'
      },
      buyerById(id) {
        return this.buyers.find((buyer) => buyer.id === id)
      },
      buyerName(id) {
        const buyer = this.buyerById(id)
        return buyer ? buyer.name : '-'
      },
      resetFilters() {
        this.filters = {
          keyword: '',
          planClass: '',
          category: '',
          assignStatus: '',
          executeStatus: '',
          riskStatus: '',
          department: '',
        }
      },
      selectBuyer(buyer) {
        this.activeBuyerId = buyer.id
      },
      onSelectionChange(keys) {
        this.selectedKeys = keys
      },
      oneClickRecommend() {
        this.rows.forEach((row) => {
          if (row.assignStatus !== '未分配') return
          const candidate = this.buyers.find((buyer) =>
            buyer.inService === '在职' &&
            buyer.leaveStatus === '未请假' &&
            buyer.categories.includes(row.category)
          )
          if (candidate) {
            row.recommendedBuyerId = candidate.id
            row.recommendReason = `${row.category}品类匹配，当前负荷${candidate.workload}，待处理${candidate.pending}项`
            row.assignStatus = '未分配'
          }
        })
        this.recommendVisible = true
        this.$message.success('已生成推荐分配结果，请计划员确认后再生效')
      },
      openManualAssign(row) {
        if (row && row.riskStatus !== '正常') {
          this.$message.warning('该明细正在变更/作废审批中，不允许重新分配')
          return
        }
        this.currentRow = row || null
        if (row) this.selectedKeys = [row.id]
        this.assignForm = {
          buyerId: row && row.buyerId ? row.buyerId : this.activeBuyerId,
          reason: row && row.assignStatus === '已分配' ? '重新分配采购员' : '手动分配采购员',
          remark: '',
        }
        this.assignVisible = true
      },
      applyManualAssign() {
        if (!this.assignForm.buyerId) {
          this.$message.warning('请选择采购员')
          return
        }
        this.selectedRows.forEach((row) => {
          row.buyerId = this.assignForm.buyerId
          row.recommendedBuyerId = this.assignForm.buyerId
          row.recommendReason = this.assignForm.reason || '计划员手动确认'
          row.assignStatus = '已分配'
          if (row.objectionStatus === '异议已通过待计划员处理') row.objectionStatus = '已处理'
        })
        this.assignVisible = false
        this.$message.success(`已确认分配 ${this.selectedRows.length || 1} 条采购任务`)
      },
      canChangeTask(row) {
        return ['待执行', '执行中'].includes(row.executeStatus) && row.riskStatus === '正常' && row.orderStatus !== '已生成采购订单未收货'
      },
      canCancelTask(row) {
        return ['待执行', '执行中'].includes(row.executeStatus) && row.riskStatus === '正常' && row.orderStatus !== '已生成采购订单未收货'
      },
      canWithdrawTask(row) {
        return ['变更审批中', '作废审批中'].includes(row.riskStatus)
      },
      openTaskRequest(row, type) {
        this.currentRow = row
        this.requestType = type
        this.requestForm = {
          newQuantity: row.quantity,
          newDemandDate: row.demandDate,
          reason: '',
          impact: '',
          releaseDemand: true,
        }
        this.requestVisible = true
      },
      submitTaskRequest() {
        if (!this.requestForm.reason || !this.requestForm.impact) {
          this.$message.warning('请填写申请原因和影响说明')
          return
        }
        this.currentRow.riskStatus = this.requestType === 'change' ? '变更审批中' : '作废审批中'
        if (this.currentRow.objectionStatus === '异议已通过待计划员处理') this.currentRow.objectionStatus = '已处理'
        this.requestVisible = false
        this.$message.success(`${this.currentRow.id} 已由采购计划员提交${this.requestType === 'change' ? '变更' : '作废'}申请，需采购领导审批`)
      },
      withdrawTaskRequest(row) {
        row.riskStatus = '正常'
        this.$message.success(`${row.id} 已撤回审批，恢复原状态`)
      },
      withdrawEditTaskRequest(row) {
        const type = row.riskStatus === '作废审批中' ? 'cancel' : 'change'
        row.riskStatus = '正常'
        this.openTaskRequest(row, type)
        this.$message.info(`${row.id} 已撤回审批，可修改后重新提交`)
      },
      viewObjection(row) {
        this.currentRow = row
        this.objectionVisible = true
      },
      confirmSingle(row) {
        if (!row.recommendedBuyerId) {
          this.$message.warning('请先选择推荐采购员')
          return
        }
        row.buyerId = row.recommendedBuyerId
        row.assignStatus = '已分配'
        this.$message.success(`${row.id} 已确认分配给 ${this.buyerName(row.buyerId)}`)
      },
      confirmRecommendations() {
        this.recommendRows.forEach((row) => this.confirmSingle(row))
        this.recommendVisible = false
      },
      goPlanList() {
        window.location.href = 'purchase-plan-list.html'
      },
      viewTask(row) {
        this.$modal.info({
          title: `采购任务明细 ${row.id}`,
          content: `计划：${row.planNo}；物料：${row.material}；采购部门：${row.departments}；期望需求时间：${row.demandDate}；当前采购员：${this.buyerName(row.buyerId)}。`,
        })
      },
    },
    template: `
      <div class="purchase-page">
        <div class="purchase-page-header">
          <div>
            <div class="purchase-page-title">采购任务分配</div>
            <div class="purchase-page-desc">采购计划员可对计划明细进行手动分配、自动推荐、人工确认与重新分配；采购员异议经采购领导审核通过后，在此由计划员处理变更、作废或改派。</div>
          </div>
          <a-space>
            <a-button @click="goPlanList">返回采购计划列表</a-button>
            <a-button type="primary" @click="oneClickRecommend">
              <template #icon><icon-thunderbolt /></template>
              一键推荐分配
            </a-button>
          </a-space>
        </div>

        <div class="purchase-kpi-grid">
          <a-card class="purchase-kpi-card">
            <div class="purchase-kpi-label">待分配明细</div>
            <div class="purchase-kpi-value">{{ pendingCount }}</div>
            <div class="purchase-kpi-sub">需要计划员处理</div>
          </a-card>
          <a-card class="purchase-kpi-card">
            <div class="purchase-kpi-label">推荐草案</div>
            <div class="purchase-kpi-value">{{ confirmCount }}</div>
            <div class="purchase-kpi-sub">自动推荐不直接生效</div>
          </a-card>
          <a-card class="purchase-kpi-card">
            <div class="purchase-kpi-label">人员提醒</div>
            <div class="purchase-kpi-value">{{ highLoadCount }}</div>
            <div class="purchase-kpi-sub">请假/已离职/高负荷需关注</div>
          </a-card>
          <a-card class="purchase-kpi-card">
            <div class="purchase-kpi-label">异议待处理</div>
            <div class="purchase-kpi-value">{{ objectionTodoCount }}</div>
            <div class="purchase-kpi-sub">采购领导通过后抄送计划员</div>
          </a-card>
        </div>

        <a-card class="purchase-filter-card" :bordered="false">
          <a-form :model="filters" layout="vertical">
            <a-row :gutter="16">
              <a-col :span="6">
                <a-form-item label="计划/明细/物料">
                  <a-input v-model="filters.keyword" placeholder="请输入计划编号、明细编号、物料" allow-clear />
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
              <a-col :span="4">
                <a-form-item label="品类">
                  <a-select v-model="filters.category" placeholder="全部" allow-clear>
                    <a-option value="包装材料">包装材料</a-option>
                    <a-option value="标准件">标准件</a-option>
                    <a-option value="机电">机电</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="4">
                <a-form-item label="分配状态">
                  <a-select v-model="filters.assignStatus" placeholder="全部" allow-clear>
                    <a-option value="未分配">未分配</a-option>
                    <a-option value="已分配">已分配</a-option>
                  </a-select>
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
              <a-col :span="4">
                <a-form-item label="变更/作废状态">
                  <a-select v-model="filters.riskStatus" placeholder="全部" allow-clear>
                    <a-option value="正常">正常</a-option>
                    <a-option value="变更审批中">变更审批中</a-option>
                    <a-option value="作废审批中">作废审批中</a-option>
                    <a-option value="已作废">已作废</a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="2">
                <a-form-item label=" ">
                  <a-space>
                    <a-button type="primary">查询</a-button>
                    <a-button @click="resetFilters">重置</a-button>
                  </a-space>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-card>

        <div class="assignment-layout">
          <a-card class="assignment-main-card" :bordered="false">
            <template #title>待分配采购任务</template>
            <template #extra>
              <a-space>
                <a-button :disabled="!selectedKeys.length" @click="openManualAssign()">批量手动分配</a-button>
                <a-button type="primary" status="success" :disabled="!confirmCount" @click="recommendVisible = true">确认推荐结果</a-button>
              </a-space>
            </template>
            <a-alert type="info" show-icon class="purchase-alert">
              分配逻辑：系统只生成推荐草案，计划员可修改后确认；请假、已离职、高负荷人员会在右侧看板提示。
            </a-alert>
            <a-table
              row-key="id"
              :columns="columns"
              :data="filteredRows"
              :pagination="{ pageSize: 5, showTotal: true }"
              :scroll="{ x: 1680 }"
              :row-selection="{ type: 'checkbox', showCheckedAll: true }"
              :selected-keys="selectedKeys"
              @selection-change="onSelectionChange"
            >
              <template #id="{ record }">
                <a-link @click="viewTask(record)">{{ record.id }}</a-link>
              </template>
              <template #plan="{ record }">
                <div>{{ record.planNo }}</div>
                <a-tag :color="record.planClass === '紧急采购计划' ? 'red' : 'blue'">{{ record.planClass }}</a-tag>
              </template>
              <template #material="{ record }">
                <div class="purchase-material-name">{{ record.material }}</div>
                <div class="purchase-material-code">{{ record.materialCode }}｜{{ record.spec }}</div>
              </template>
              <template #assignStatus="{ record }">
                <a-tag :color="statusColor(record.assignStatus)">{{ record.assignStatus }}</a-tag>
              </template>
              <template #executeStatus="{ record }">
                <a-tag :color="statusColor(record.executeStatus)">{{ record.executeStatus }}</a-tag>
              </template>
              <template #riskStatus="{ record }">
                <a-tag :color="statusColor(record.riskStatus)">{{ record.riskStatus }}</a-tag>
              </template>
              <template #objectionStatus="{ record }">
                <a-tag :color="statusColor(record.objectionStatus)">{{ record.objectionStatus }}</a-tag>
              </template>
              <template #buyer="{ record }">
                <span>{{ buyerName(record.buyerId) }}</span>
              </template>
              <template #recommendedBuyer="{ record }">
                <a-select v-if="record.assignStatus === '未分配' && record.recommendedBuyerId" v-model="record.recommendedBuyerId" size="small" style="width: 120px">
                  <a-option v-for="buyer in buyers" :key="buyer.id" :value="buyer.id" :disabled="buyer.inService !== '在职'">{{ buyer.name }}{{ buyer.inService !== '在职' ? '（已离职）' : '' }}</a-option>
                </a-select>
                <span v-else>{{ buyerName(record.recommendedBuyerId) }}</span>
              </template>
              <template #operations="{ record }">
                <a-space>
                  <a-link @click="viewTask(record)">查看</a-link>
                  <a-link v-if="record.assignStatus === '未分配' && record.riskStatus === '正常'" @click="openManualAssign(record)">手动分配</a-link>
                  <a-link v-if="record.assignStatus === '未分配' && record.recommendedBuyerId" @click="confirmSingle(record)">确认分配</a-link>
                  <a-link v-if="record.assignStatus === '已分配' && record.riskStatus === '正常'" @click="openManualAssign(record)">重新分配</a-link>
                  <a-link v-if="canChangeTask(record)" @click="openTaskRequest(record, 'change')">申请变更</a-link>
                  <a-link v-if="canCancelTask(record)" status="danger" @click="openTaskRequest(record, 'cancel')">申请作废</a-link>
                  <a-link v-if="record.objectionStatus !== '无异议'" @click="viewObjection(record)">异议信息</a-link>
                  <a-link v-if="canWithdrawTask(record)" @click="withdrawEditTaskRequest(record)">撤回修改</a-link>
                  <span v-if="record.riskStatus !== '正常'" class="purchase-muted">需采购领导审批</span>
                </a-space>
              </template>
            </a-table>
          </a-card>

          <a-card class="buyer-board" :bordered="false">
            <template #title>采购员信息看板</template>
            <div class="buyer-board-desc">用于辅助推荐与人工确认，重点展示在职、请假、负荷与负责品类等分配判断信息。</div>
            <div
              v-for="buyer in buyers"
              :key="buyer.id"
              class="buyer-card"
              :class="{ active: buyer.id === activeBuyerId }"
              @click="selectBuyer(buyer)"
            >
              <div class="buyer-card-head">
                <div>
                  <div class="buyer-name">{{ buyer.name }}</div>
                  <div class="buyer-code">{{ buyer.code }}｜{{ buyer.phone }}</div>
                </div>
                <a-tag :color="buyer.inService === '在职' ? 'green' : 'red'">{{ buyer.inService }}</a-tag>
              </div>
              <div v-if="buyer.inService === '在职'" class="buyer-tags">
                <a-tag :color="buyer.leaveStatus === '请假中' ? 'orange' : 'blue'">{{ buyer.leaveStatus }}</a-tag>
                <a-tag :color="buyer.workload === '高' ? 'red' : buyer.workload === '中' ? 'orange' : 'green'">负荷{{ buyer.workload }}</a-tag>
              </div>
              <template v-if="buyer.inService === '在职'">
                <div class="buyer-meta">请假时间：{{ buyer.leaveRange }}</div>
                <div class="buyer-meta">负责品类：{{ buyer.categories.join('、') }}</div>
              </template>
              <div v-else class="buyer-left-status">已离职，不参与任务推荐与分配</div>
              <div v-if="buyer.inService === '在职'" class="buyer-load">
                <div>当前任务负荷</div>
                <div class="buyer-load-bar"><span :style="{ width: buyer.workloadPercent + '%' }"></span></div>
                <div>{{ buyer.workloadPercent }}%</div>
              </div>
              <div v-if="buyer.inService === '在职'" class="buyer-counts">
                <span>待处理 {{ buyer.pending }}</span>
                <span>执行中 {{ buyer.running }}</span>
                <span>近30天完成 {{ buyer.recentDone }}</span>
              </div>
            </div>
            <a-divider />
            <div class="buyer-detail">
              <div class="buyer-detail-title">{{ activeBuyer.name }} 推荐解释</div>
              <div>{{ activeBuyer.recommendText }}</div>
            </div>
          </a-card>
        </div>

        <a-modal v-model:visible="assignVisible" title="手动/重新分配采购员" width="720px" @ok="applyManualAssign">
          <a-alert type="warning" show-icon class="purchase-alert">
            手动分配或重新分配需由采购计划员确认后生效；已进入变更/作废审批中的明细不允许直接分配。
          </a-alert>
          <a-descriptions :column="2" bordered style="margin-bottom: 16px">
            <a-descriptions-item label="本次处理明细">{{ selectedRows.length || 1 }} 条</a-descriptions-item>
            <a-descriptions-item label="分配方式">{{ assignForm.reason || '手动分配采购员' }}</a-descriptions-item>
          </a-descriptions>
          <a-form :model="assignForm" layout="vertical">
            <a-form-item label="采购员" required>
              <a-select v-model="assignForm.buyerId" placeholder="请选择采购员">
                <a-option v-for="buyer in buyers" :key="buyer.id" :value="buyer.id" :disabled="buyer.inService !== '在职'">
                  {{ buyer.name }}｜{{ buyer.inService === '在职' ? buyer.categories.join('、') + '｜负荷' + buyer.workload + '｜' + buyer.leaveStatus : '已离职' }}
                </a-option>
              </a-select>
            </a-form-item>
            <a-form-item label="分配原因" required>
              <a-input v-model="assignForm.reason" placeholder="请输入分配或重新分配原因" />
            </a-form-item>
            <a-form-item label="备注">
              <a-textarea v-model="assignForm.remark" placeholder="补充说明任务交接、紧急程度或人工调整原因" :auto-size="{ minRows: 3, maxRows: 5 }" />
            </a-form-item>
          </a-form>
        </a-modal>

        <a-modal
          v-model:visible="requestVisible"
          :title="requestType === 'change' ? '采购任务明细申请变更' : '采购任务明细申请作废'"
          width="860px"
          @ok="submitTaskRequest"
        >
          <a-alert :type="requestType === 'change' ? 'warning' : 'error'" show-icon class="purchase-alert">
            仅采购计划员可发起{{ requestType === 'change' ? '变更' : '作废' }}申请；提交后进入审批中，必须由采购领导审批通过后才生效，审批通过前不改变原采购任务。
          </a-alert>
          <a-descriptions v-if="currentRow" :column="3" bordered style="margin-bottom: 16px">
            <a-descriptions-item label="申请人">采购计划员-王敏</a-descriptions-item>
            <a-descriptions-item label="审批角色">采购领导</a-descriptions-item>
            <a-descriptions-item label="生效方式">审批通过后生效</a-descriptions-item>
            <a-descriptions-item label="计划编号">{{ currentRow.planNo }}</a-descriptions-item>
            <a-descriptions-item label="明细编号">{{ currentRow.id }}</a-descriptions-item>
            <a-descriptions-item label="物料">{{ currentRow.material }}</a-descriptions-item>
            <a-descriptions-item label="当前数量">{{ currentRow.quantity }}</a-descriptions-item>
            <a-descriptions-item label="当前期望需求时间">{{ currentRow.demandDate }}</a-descriptions-item>
            <a-descriptions-item label="订单状态">{{ currentRow.orderStatus }}</a-descriptions-item>
          </a-descriptions>
          <a-form :model="requestForm" layout="vertical">
            <a-row v-if="requestType === 'change'" :gutter="16">
              <a-col :span="12">
                <a-form-item label="变更后采购数量" required>
                  <a-input v-model="requestForm.newQuantity" placeholder="仅允许变更采购数量" />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="变更后期望需求时间" required>
                  <a-date-picker v-model="requestForm.newDemandDate" style="width: 100%" />
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item :label="requestType === 'change' ? '变更原因' : '作废原因'" required>
              <a-select v-model="requestForm.reason" placeholder="请选择原因">
                <a-option value="需求数量调整">需求数量调整</a-option>
                <a-option value="期望需求时间调整">期望需求时间调整</a-option>
                <a-option value="需求取消">需求取消</a-option>
                <a-option value="计划重复">计划重复</a-option>
                <a-option value="其他">其他</a-option>
              </a-select>
            </a-form-item>
            <a-form-item label="影响说明" required>
              <a-textarea v-model="requestForm.impact" placeholder="请说明对采购执行、采购员任务和供应保障的影响" :auto-size="{ minRows: 3, maxRows: 5 }" />
            </a-form-item>
            <a-form-item v-if="requestType === 'cancel'" label="来源需求处理">
              <a-checkbox v-model="requestForm.releaseDemand">采购领导审批通过后释放/回写来源需求</a-checkbox>
            </a-form-item>
          </a-form>
        </a-modal>

        <a-modal v-model:visible="objectionVisible" title="采购任务异议审批信息" width="860px" :footer="false">
          <a-alert type="info" show-icon class="purchase-alert">
            此处仅展示采购员异议及采购领导审核结果；审批流由后台配置，不在本页面展示。计划员可据此发起任务变更、作废或重新分配采购员。
          </a-alert>
          <a-descriptions v-if="currentRow && currentRow.objectionInfo" :column="2" bordered>
            <a-descriptions-item label="计划编号">{{ currentRow.planNo }}</a-descriptions-item>
            <a-descriptions-item label="明细编号">{{ currentRow.id }}</a-descriptions-item>
            <a-descriptions-item label="物料">{{ currentRow.material }}</a-descriptions-item>
            <a-descriptions-item label="当前采购员">{{ buyerName(currentRow.buyerId) }}</a-descriptions-item>
            <a-descriptions-item label="异议状态">{{ currentRow.objectionStatus }}</a-descriptions-item>
            <a-descriptions-item label="提出人">{{ currentRow.objectionInfo.submitter }}</a-descriptions-item>
            <a-descriptions-item label="异议类型">{{ currentRow.objectionInfo.type }}</a-descriptions-item>
            <a-descriptions-item label="建议处理">{{ currentRow.objectionInfo.suggestion }}</a-descriptions-item>
            <a-descriptions-item label="提交时间">{{ currentRow.objectionInfo.submitTime }}</a-descriptions-item>
            <a-descriptions-item label="审核时间">{{ currentRow.objectionInfo.approveTime }}</a-descriptions-item>
            <a-descriptions-item label="采购领导审核结果">{{ currentRow.objectionInfo.leaderResult }}</a-descriptions-item>
            <a-descriptions-item label="审核意见">{{ currentRow.objectionInfo.leaderOpinion }}</a-descriptions-item>
            <a-descriptions-item label="异议原因" :span="2">{{ currentRow.objectionInfo.reason }}</a-descriptions-item>
          </a-descriptions>
          <a-divider />
          <a-space v-if="currentRow && currentRow.objectionStatus === '异议已通过待计划员处理'">
            <a-button type="primary" @click="openTaskRequest(currentRow, 'change')">按异议申请变更</a-button>
            <a-button status="danger" @click="openTaskRequest(currentRow, 'cancel')">按异议申请作废</a-button>
            <a-button @click="openManualAssign(currentRow)">变更采购员</a-button>
          </a-space>
        </a-modal>

        <a-modal v-model:visible="recommendVisible" title="一键推荐分配结果确认" width="980px" @ok="confirmRecommendations">
          <a-alert type="info" show-icon class="purchase-alert">
            以下为系统推荐草案，采购计划员可修改采购员后确认；推荐草案不作为业务分配状态，确认后任务才正式分配给采购员。
          </a-alert>
          <a-table
            row-key="id"
            :columns="recommendColumns"
            :data="recommendRows"
            :pagination="false"
          >
            <template #material="{ record }">
              <div class="purchase-material-name">{{ record.material }}</div>
              <div class="purchase-material-code">{{ record.materialCode }}｜{{ record.category }}｜{{ record.quantity }}</div>
            </template>
            <template #recommendedBuyer="{ record }">
              <a-tag color="blue">{{ buyerName(record.recommendedBuyerId) }}</a-tag>
            </template>
            <template #adjust="{ record }">
              <a-select v-model="record.recommendedBuyerId" size="small" style="width: 160px">
                <a-option v-for="buyer in buyers" :key="buyer.id" :value="buyer.id" :disabled="buyer.inService !== '在职'">{{ buyer.name }}{{ buyer.inService !== '在职' ? '（已离职）' : '' }}</a-option>
              </a-select>
            </template>
          </a-table>
        </a-modal>
      </div>
    `,
  }

  mountProPage({
    pageKey: 'purchase-plan/task-assignment',
    title: '采购任务分配',
    pageComponent: PurchaseTaskAssignmentPage,
  })
})()
