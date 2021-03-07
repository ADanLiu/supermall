<template>
  <scroll id="tab-menu" ref="scroll">
    <div class="menu-list">
      <div
        class="menu-list-item"
        v-for="(item, index) in categories"
        :key="index"
        @click="itemClick(index)"
        :class="{ active: index === currentIndex }"
      >
        {{ item.title }}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "TabMenu",
  components: { Scroll },
  props: {
    categories: Array,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      //把当前Index传出去，用于后面显示当前分类的详细数据
      this.$emit("selectItem", index);
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.scroll.refresh();
    }, 200);
  },
};
</script>

<style scoped>
#tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
  position: relative;
}

.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}

.menu-list-item.active {
  font-weight: 600;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>