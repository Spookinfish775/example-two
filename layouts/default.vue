<template>
  <div class="default-layout">
    <div class="menu">
      <MyMenu />
    </div>
    <div class="content">
      <transition name="route">
        <Nuxt />
      </transition>
    </div>
    <div class="footer">
      <MyFooter />
    </div>
  </div>
</template>

<script>
function fontSize() {
  let width = 1440; // ширина, от которой идет отсчет
  let fontSize; // минимальный размер шрифта
  let bodyWidth = document.documentElement.clientWidth;
  if (bodyWidth < 320) {
    fontSize = 285;
  }
  if (bodyWidth >= 320) {
    fontSize = 285;
  }
  if (bodyWidth >= 576) {
    fontSize = 159;
  }
  if (bodyWidth >= 768) {
    fontSize = 119;
  }
  if (bodyWidth >= 992) {
    fontSize = 92;
  }
  if (bodyWidth >= 1200) {
    fontSize = 63;
  }
  if (bodyWidth >= 1400) {
    fontSize = 63;
  }
  let multiplier = bodyWidth / width; // проверку убрал, пусть шрифт уменьшается если разрешение меньше 1000
  fontSize = Math.floor(fontSize * multiplier);
  document.body.style.fontSize = fontSize + "%";
}
window.onresize = fontSize;
fontSize();

import MyMenu from "~/components/layouts/menu/index.vue";
import MyFooter from "~/components/layouts/footer/index.vue";
export default {
  components: {
    MyMenu,
    MyFooter,
  },
  computed: {
    route() {
      return this.$route.fullPath;
    },
  },
  watch: {
    route() {
      window.scrollTo({
        behavior: "smooth",
        top: "0px",
      });
    },
  },
};
</script>

<style lang="scss">
.route-enter-active,
.route-leave-active {
  transition: opacity 0.6s;
}
.route-enter,
.route-leave-to {
  opacity: 0;
}
.default-layout {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  .content {
    flex-grow: 1;
  }
}
</style>