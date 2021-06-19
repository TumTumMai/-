export { default as Footer } from '../..\\components\\footer.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as NavbarWhite } from '../..\\components\\navbar_white.vue'

export const LazyFooter = import('../..\\components\\footer.vue' /* webpackChunkName: "components_footer" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyNavbarWhite = import('../..\\components\\navbar_white.vue' /* webpackChunkName: "components_navbar_white" */).then(c => c.default || c)
