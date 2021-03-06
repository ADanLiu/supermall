import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types";

export default {
  addCart(context, payLoad) {
    return new Promise((resolve, reject) => {
      //payLoad新添加的商品
      let oldProduct = context.state.cartList.find(
        item => item.iid === payLoad.iid
      );
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct);
        resolve("当前商品数量加一");
      } else {
        payLoad.count = 1;
        context.commit(ADD_TO_CART, payLoad);
        resolve("当前商品已增加至购物车");
      }
    });
  }
};
