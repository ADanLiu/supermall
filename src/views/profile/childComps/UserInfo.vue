<template>
  <div class="use-info">
    <img class="avator" src="~assets/img/profile/avatar.svg" alt="" />
    <div class="info">
      <div class="login">登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt="" />
        <span>暂无绑定的手机号</span>
      </div>
    </div>
    <div class="arrow">
      <img src="~assets/img/common/arrow-left.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>

<style scoped>
.use-info {
  height: 85px;
  background-color: var(--color-tint);
  padding: 6px 15px;

  display: flex;
  color: #fff;
}

.avator {
  width: 65px;
  height: 65px;
  margin-left: 12px;
}

.info {
  flex: 1;
  padding-left: 20px;
}

.info .login {
  margin-top: 15px;
}

.phone img {
  width: 20px;
  height: 30px;
  vertical-align: middle;
  margin-left: -5px;
}
.phone span {
  font-size: 13px;
}
.arrow img {
  width: 20px;
  margin-top: 22px;
}
</style>