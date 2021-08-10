<template>
  <div class="main-wrapper">
    <Menu />
  </div>
</template>

<script>
import Menu from "../components/layouts/menu/index.vue";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
.main-wrapper {
  color: $main-color;
}
</style>