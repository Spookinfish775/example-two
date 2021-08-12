<template>
  <div class="product-links-wrapper">
    <div class="product-link-group">
      <div class="link-wrapper">
        <a to="/" class="product-link">{{
          $t("menu.productSubMenuLinks[0]")
        }}</a>
      </div>
      <div class="link-wrapper">
        <a to="/" class="product-link">{{
          $t("menu.productSubMenuLinks[1]")
        }}</a>
      </div>
      <div class="link-wrapper">
        <a to="/" class="product-link">{{
          $t("menu.productSubMenuLinks[2]")
        }}</a>
      </div>
      <div class="link-wrapper">
        <a to="/" class="product-link">{{
          $t("menu.productSubMenuLinks[3]")
        }}</a>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.product-links-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $main-color;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .product-link-group {
    width: 100%;
    height: 46.3em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .link-wrapper {
      width: 92%;
      font-size: 2em;
      color: $default-text-color;
      font-weight: 900;
      padding-left: 6.2em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .product-link {
        text-transform: uppercase;
        color: $default-text-color;
      }
    }
  }
}
</style>