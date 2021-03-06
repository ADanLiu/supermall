<template>
  <div class="bottom-bar">
    <check-button
      class="select-all"
      :is-checked="isSelectAll"
      @click.native="checkClick"
    />
    <span>全选</span>
    <span class="total-price">合计: ¥{{ totalPrice }}</span>
    <span class="buy-product">去计算({{ checkLength }})</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((total, item) => {
          return total + item.price * item.count;
        }, 0);
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },

    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    checkClick() {
      let isSelectAll = this.cartList.find((item) => !item.checked);

      if (isSelectAll) {
        this.cartList.forEach((item) => {
          item.checked = true;
        });
      } else {
        this.cartList.forEach((item) => {
          item.checked = false;
        });
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 49px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}
.select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.total-price {
  margin-left: 40px;
  font-size: 16px;
  color: #666;
}

.buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>