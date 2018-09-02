import VueLibTempalte from './markdown-it-vue'

const install = function (Vue) {
  Vue.component(VueLibTempalte.name, VueLibTempalte)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

VueLibTempalte.install = install
export default VueLibTempalte
