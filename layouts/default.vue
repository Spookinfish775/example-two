<template>
  <div class="default-layout">
    <div class="menu">
      <MyMenu />
    </div>
    <div class="content">
      <Nuxt />
    </div>
    <div class="form">
      <MyForm />
    </div>
    <div class="footer">
      <MyFooter />
    </div>
  </div>
</template>

<script>
function fontSize() {
  let width = 1447; // ширина, от которой идет отсчет
  let fontSize; // минимальный размер шрифта
  let bodyWidth = document.documentElement.clientWidth;
  if (bodyWidth <= 1024) {
    fontSize = 70;
  }
  if (bodyWidth <= 550) {
    fontSize = 160;
  }
  if (bodyWidth <= 450) {
    fontSize = 200;
  }
  if (bodyWidth > 1024) {
    fontSize = 62.5;
  }
  let multiplier = bodyWidth / width; // проверку убрал, пусть шрифт уменьшается если разрешение меньше 1000
  fontSize = Math.floor(fontSize * multiplier);
  document.body.style.fontSize = fontSize + "%";
}
window.onresize = fontSize;
fontSize();

import MyMenu from "~/components/layouts/menu/index.vue";
import MyFooter from "~/components/layouts/footer/index.vue";
import MyForm from "~/components/layouts/form/index.vue";
export default {
  components: {
    MyMenu,
    MyFooter,
    MyForm,
  },
};
</script>

<style lang="scss">
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