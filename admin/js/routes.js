/**
 * Arco Design Pro 路由树 + 静态页映射
 */
window.ArcoProPageHref = {
  'demand-management/detail': 'demand-management-prototype.html',
  'demand-management/prototype': 'demand-management-prototype.html',
  'demand-management/my-requests': 'demand-management-prototype.html#mine',
  'demand-management/approval': 'demand-management-prototype.html#approval',
  'demand-management/request-detail': 'demand-management-prototype.html#detail',
  'purchase-plan/group-demand-pool': 'group-demand-pool.html',
  'purchase-plan/list': 'purchase-plan-list.html',
  'purchase-plan/create': 'create-purchase-plan.html',
  'purchase-plan/task-assignment': 'purchase-task-assignment.html',
  'purchase-plan/buyer-task-list': 'buyer-task-list.html',
  'purchase-plan/approval-workbench': 'purchase-approval-workbench.html',
  'dashboard/workplace': 'dashboard.html',
  'dashboard/ecommerce': 'dashboard-ecommerce.html',
  'dashboard/crm': 'dashboard-crm.html',
  'dashboard/academy': 'dashboard-academy.html',
  'dashboard/finance': 'dashboard-finance.html',
  'dashboard/analytics': 'dashboard-analytics.html',
  'dashboard/customer': 'dashboard-customer.html',
  'dashboard/productivity': 'dashboard-productivity.html',
  'dashboard/banking': 'dashboard-banking.html',
  'list/search-table': 'list-search-table.html',
  'list/card': 'list-card.html',
  'list/kanban': 'list-kanban.html',
  'list/tree-table': 'list-tree-table.html',
  'list/filter-table': 'list-filter-table.html',
  'list/tag-filter': 'list-tag-filter.html',
  'list/master-detail': 'list-master-detail.html',
  'list/editable': 'list-editable.html',
  'list/calendar': 'list-calendar.html',
  'list/media': 'list-media.html',
  'list/import': 'list-import.html',
  'form/basic': 'form-basic.html',
  'form/group': 'form-group.html',
  'form/step': 'form-step.html',
  'form/step-vertical': 'form-step-vertical.html',
  'profile/basic': 'profile-basic.html',
  'profile/advanced': 'profile-advanced.html',
  'result/success': 'result-success.html',
  'result/waiting': 'result-waiting.html',
  'result/warning': 'result-warning.html',
  'result/error': 'result-error.html',
  'exception/403': 'exception-403.html',
  'exception/404': 'exception-404.html',
  'exception/500': 'exception-500.html',
  'component/basic': 'component-basic.html',
  'component/extended': 'component-extended.html',
  'component/rich-text': 'component-rich-text.html',
  'component/form': 'component-form.html',
  'component/form-extended': 'component-form-extended.html',
  'component/table-extended': 'component-table-extended.html',
  'component/list': 'component-list.html',
  'chart/component': 'component-chart.html',
  'chart/extended': 'component-chart-extended.html',
  'chart/metric-card': 'component-metric-card.html',
  'chart/palette': 'component-chart-palette.html',
  'user/home': 'user-home.html',
  'user/setting': 'user-setting.html',
  'user/message': 'message-list.html',
}

window.ArcoProRoutes = [
  {
    name: '需求管理',
    key: 'demand-management',
    children: [
      { name: '需求明细', key: 'demand-management/detail' },
      { name: '我的需求申请', key: 'demand-management/my-requests' },
      { name: '需求审批管理', key: 'demand-management/approval' },
      { name: '需求详情页', key: 'demand-management/request-detail' },
    ],
  },
  {
    name: '采购计划管理',
    key: 'purchase-plan',
    children: [
      { name: '集团需求池', key: 'purchase-plan/group-demand-pool' },
      { name: '采购计划列表', key: 'purchase-plan/list' },
      { name: '创建采购计划', key: 'purchase-plan/create' },
      { name: '采购任务分配', key: 'purchase-plan/task-assignment' },
      { name: '采购员任务列表', key: 'purchase-plan/buyer-task-list' },
      { name: '采购领导审批工作台', key: 'purchase-plan/approval-workbench' },
    ],
  },
]

;(function attachHref(routes) {
  routes.forEach((route) => {
    if (route.children) {
      attachHref(route.children)
      return
    }
    const href = window.ArcoProPageHref[route.key]
    if (href) route.href = href
  })
})(window.ArcoProRoutes)

/** 菜单图标组件名（Font Awesome，见 js/fa-icons.js） */
window.ArcoProRoutes.getIconComponent = function getIconComponent(key) {
  const root = key.split('/')[0]
  const map = {
    dashboard: 'icon-dashboard',
    'purchase-plan': 'icon-list',
    list: 'icon-list',
    form: 'icon-settings',
    profile: 'icon-file',
    result: 'icon-check-circle',
    exception: 'icon-exclamation-circle',
    component: 'icon-tool',
    chart: 'icon-chart-area',
    user: 'icon-avatar-user',
  }
  return map[root] || 'icon-file'
}

window.ArcoProRoutes.getBreadcrumb = function getBreadcrumb(pageKey) {
  const locale = window.ArcoProLocale.menu
  function walk(nodes, trail) {
    for (const node of nodes) {
      const next = trail.concat(node.name)
      if (node.key === pageKey) return next
      if (node.children) {
        const found = walk(node.children, next)
        if (found) return found
      }
    }
    return null
  }
  const names = walk(window.ArcoProRoutes, [])
  return (names || ['采购计划管理']).map((n) => locale[n] || n)
}

window.ArcoProRoutes.getDefaultOpenKeys = function getDefaultOpenKeys(pageKey) {
  const parts = pageKey.split('/')
  if (parts.length > 1) return [parts[0]]
  return []
}

/** VibePM Pro 统一契约导出（跨 Theme / Vibe Pack 扫描；Arco 运行时仍用 ArcoPro*） */
window.VibePMProPageHref = window.VibePMProPageHref || window.ArcoProPageHref
window.VibePMProRoutes = window.VibePMProRoutes || window.ArcoProRoutes
