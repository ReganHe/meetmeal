<template>
  <footer>
    <ul>
      <li>
        <div v-if="pageType == 0"><img src="../assets/home_active.jpg" alt="home"></div>
        <div v-if="pageType == 0">首页</div>
        <router-link to="/" v-if="pageType != 0">
          <span class="icon"><img src="../assets/home.png" alt="home"></span>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <div v-if="pageType == 1"><img src="../assets/order_active.jpg" alt="order"></div>
        <div v-if="pageType == 1">
          <span>订单</span>
        </div>
        <router-link to="/order" v-if="pageType != 1">
          <span class="icon"><img src="../assets/order_icon.gif" alt="order"></span>
          <span>订单</span>
        </router-link>
      </li>
      <li class="add">
        <img src="../assets/add.png" alt="add"></li>
      <li>
        <div><img src="../assets/message_icon.gif" alt="message"></div>
        <div>消息</div>
      </li>
      <li>
        <div><img src="../assets/me_icon.gif" alt="me"></div>
        <div>我的</div>
      </li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    props: {
      pageType: String
    }
  }
</script>

<style>

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  background-image: url(../assets/footer_bg.png);
  background-position: center;
  background-position-x: 53%;
  background-repeat: no-repeat;
  background-size: 135%;
  padding-top: 10px;
}
footer img {
  max-width: 100%;
}
footer .add img {
  border-radius: 50%;
}
footer .icon {
  display: block;
}
footer ul {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
}
</style>
