import Toast from "./Toast";

const obj = {};

obj.install = function(Vue) {
  //创建组件构造器
  const toastConstructor = Vue.extend(Toast);

  //new 方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastConstructor();

  //将组件对象，手动的挂载到某一个元素上
  toast.$mount(document.createElement("div"));

  //此时toast.$el对应的就是div
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
};

export default obj;
