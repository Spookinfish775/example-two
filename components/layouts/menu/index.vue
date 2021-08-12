<template>
  <div class="menu-wrapper">
    <div class="link-group">
      <nuxt-link to="/" class="link product">{{
        $t("menu.productLink")
      }}</nuxt-link>
      <div class="productSubMenu">
        <ProductSubMenu />
      </div>
      <nuxt-link to="/" class="link">{{ $t("menu.aboutLink") }}</nuxt-link>
    </div>
    <div class="logo">
      <img src="/img/logo.svg" alt="logo" />
    </div>
    <div class="link-group">
      <nuxt-link to="/" class="link">{{ $t("menu.articlesLink") }}</nuxt-link>
      <nuxt-link to="/" class="link">{{ $t("menu.contactLink") }}</nuxt-link>
      <div class="contactSubMenu">
        <ContactSubMenu />
      </div>
      <span class="lang-bar link">{{ $t("menu.langBar") }}</span>
    </div>
    <div class="menu-button" @click="openMenu">
      <div class="top line"></div>
      <div class="middle line"></div>
      <div class="bottom line"></div>
    </div>
    <transition name="slide-fade">
      <div class="menu-mobile" v-if="menuVisibility">
        <MobileMenu />
      </div>
    </transition>
  </div>
</template>

<script>
import ProductSubMenu from "./productsSubMenu.vue";
import ContactSubMenu from "./contactsSubMenu.vue";
import MobileMenu from "./mobileMenu/index.vue";
export default {
  data() {
    return {
      menuVisibility: false,
    };
  },
  components: {
    ProductSubMenu,
    ContactSubMenu,
    MobileMenu,
  },
  methods: {
    openMenu() {
      if (this.menuVisibility == false) {
        this.menuVisibility = true;
      } else {
        this.menuVisibility = false;
      }
      let btn = document.querySelector(".menu-button");
      btn.classList.toggle("active");
    },
  },
};
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
}
.menu-wrapper {
  width: 100%;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  .link-group {
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .link {
      font-size: 1.4em;
      font-weight: 700;
      text-transform: uppercase;
    }
    .productSubMenu {
      display: none;
      position: absolute;
      top: 8.5em;
      left: 17.8em;
    }
    .contactSubMenu {
      display: none;
      position: absolute;
      top: 8.5em;
      right: 17.8em;
    }
  }
  .logo {
    padding-top: 2.9em;
    width: 10.6em;
    img {
      width: 100%;
    }
  }
  .menu-button {
    display: none;
  }
  @include max($large) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 3.2em;
    .link-group {
      display: none;
      .link {
        font-size: 1.4em;
      }
      .productSubMenu {
        display: none;
        position: absolute;
        top: 8.5em;
        left: 17.8em;
      }
      .contactSubMenu {
        display: none;
        position: absolute;
        top: 8.5em;
        right: 17.8em;
      }
    }
    .logo {
      padding-top: 2.9em;
      width: 10.6em;
      img {
        width: 100%;
      }
    }
    .menu-button {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 3.3em;
      height: 2.93em;
      z-index: 10;
      .line {
        height: 0.3em;
        background-color: $main-color;
        transition: 0.4s;
      }
      .top {
        width: 2em;
        align-self: flex-end;
        margin-right: 0.37em;
      }
      .middle {
        opacity: 1;
      }
      .bottom {
        width: 2em;
        margin-left: 0.37em;
      }
      &.active {
        .line {
          background-color: $default-text-color;
        }
        .middle {
          opacity: 0;
          // position: absolute;
        }
        .top {
          transform: rotate(-46deg) translate(-2.2em);
        }
        .bottom {
          transform: rotate(46deg) translate(-1.5em);
        }
      }
    }
    .menu-mobile {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>