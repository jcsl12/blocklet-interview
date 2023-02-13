
const getters = {
  // 系统级
  menuCollapsed: state => state.system.menuCollapsed,
  theme: state => state.system.theme,

  // 用户级
  uroutes: state => state.auth.uroutes,
  uperms: state => state.auth.uperms,
  authorized: state => !!state.account.authorized,

  // 其他
}
export default getters
