<template>
  <div class="mobile-menu-wrapper">
    <div class="mobile-link-group">
      <div class="link-wrapper">
        <nuxt-link to="/" class="mobile-link">{{
          $t("menu.productLink")
        }}</nuxt-link>
        <div class="arrow">
          <div class="top"></div>
          <div class="bottom"></div>
        </div>
      </div>
      <div class="link-wrapper">
        <nuxt-link to="/" class="mobile-link">{{
          $t("menu.aboutLink")
        }}</nuxt-link>
      </div>
      <div class="link-wrapper">
        <nuxt-link to="/" class="mobile-link">{{
          $t("menu.articlesLink")
        }}</nuxt-link>
      </div>
      <div class="link-wrapper">
        <nuxt-link to="/" class="mobile-link">{{
          $t("menu.contactLink")
        }}</nuxt-link>
        <div class="arrow">
          <div class="top"></div>
          <div class="bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.mobile-menu-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: $main-color;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .mobile-link-group {
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
      padding-left: 12.4em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .mobile-link {
        color: $default-text-color;
      }
      .arrow {
        position: absolute;
        right: 0;
        .top {
          width: 0.6em;
          height: 0.15em;
          background-color: $default-text-color;
          transform: rotate(45deg) translateX(-3px);
        }
        .bottom {
          width: 0.6em;
          height: 0.15em;
          background-color: $default-text-color;
          transform: rotate(-45deg) translateX(-3px);
        }
      }
    }
  }
}
</style>