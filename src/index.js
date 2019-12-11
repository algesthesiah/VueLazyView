import VueLazyView from './VueLazyView'

VueLazyView.install = function(Vue) {
  Vue.component(VueLazyView.name, VueLazyView)
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueLazyView)
}

export default VueLazyView
