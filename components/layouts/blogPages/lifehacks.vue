<template>
  <div class="blog-wrapper">
    <div class="title-block">
      <p class="page-title">{{ $t("blog.lifehacks.title") }}</p>
      <div class="blog-img"></div>
    </div>
    <div
      class="description-block"
      v-for="(item, index) in content"
      :key="index"
    >
      <div class="icon"></div>
      <div class="text">
        <h2 class="second-page-title">
          <div class="mobile-icon"></div>
          {{ item.title }}
        </h2>
        <p class="page-text">{{ item.text }}</p>
      </div>
    </div>
    <div class="navigation-block">
      <div class="left-buttons">
        <div class="active-btn">3</div>
        <nuxt-link to="/blog/washer" class="next-btn">4</nuxt-link>
      </div>
      <div class="right-button">
        <div class="all-articles">
          <nuxt-link to="/articles">
            {{ $t("blog.howWash.allButton") }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          title: this.$t("blog.lifehacks.howWashTitle"),
          text: this.$t("blog.lifehacks.howWashDescription"),
        },
        {
          title: this.$t("blog.lifehacks.shoesTitle"),
          text: this.$t("blog.lifehacks.shoesDescription"),
        },
        {
          title: this.$t("blog.lifehacks.slimTitle"),
          text: this.$t("blog.lifehacks.slimDescription"),
        },
        {
          title: this.$t("blog.lifehacks.woolenTitle"),
          text: this.$t("blog.lifehacks.woolenDescription"),
        },
        {
          title: this.$t("blog.lifehacks.childTitle"),
          text: this.$t("blog.lifehacks.childDescription"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-wrapper {
  width: 100%;
  padding: 27.8em 15em 12.7em 15em;
  @include max($large) {
    padding: 17.1em 3.2em 7em 3.2em;
  }
  @include max($small) {
    padding: 9.72em 1.6em 6em 1.6em;
  }
  .title-block {
    .page-title {
      margin-bottom: 2.42em;
      @include max($large) {
        margin-bottom: 2.2em;
      }
      @include max($large) {
        margin-bottom: 1.35em;
      }
    }
    .blog-img {
      width: 115.03em;
      height: 61.7em;
      background: url("/img/blog-img/lifehacks.png") center no-repeat;
      background-size: cover;
      @include max($large) {
        width: 69.84em;
        height: 37.5em;
      }
      @include max($small) {
        background: url("/img/blog-img/lifehacksMobile.png") center no-repeat;
        background-size: cover;
        width: 100%;
        height: 29.5em;
      }
    }
    .page-text {
      margin-top: 8.63em;
      width: 70%;
      @include max($large) {
        margin-top: 1.9em;
        width: 100%;
      }
      @include max($small) {
        margin-top: 2.09em;
        width: 100%;
      }
    }
  }
  .description-block {
    padding-top: 6em;
    display: flex;
    align-items: flex-start;
    position: relative;
    width: 70%;
    @include max($large) {
      padding-top: 3em;
      width: 100%;
    }
    .text {
      .second-page-title {
        display: flex;
        align-items: center;
        @include max($small) {
          .mobile-icon {
            width: 0.77em;
            height: 0.77em;
            border-radius: 100%;
            background-color: $blue-sky;
            margin-right: 0.6em;
            padding-right: 0.7em;
          }
        }
      }
      .page-text {
        padding-top: 0.73em;
        @include max($large) {
          padding-top: 0.5em;
        }
      }
      @include max($large) {
        margin-left: 4.8em;
      }
      @include max($small) {
        margin-left: 0;
      }
    }
    .icon {
      position: absolute;
      margin-top: 0.6em;
      left: -4em;
      width: 1.92em;
      height: 1.92em;
      border-radius: 100%;
      background-color: $blue-sky;
      @include max($large) {
        position: static;
        padding-right: 2em;
      }
      @include max($small) {
        display: none;
      }
    }
  }
  .navigation-block {
    margin: 16.75em 0 0 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: TT Hazelnuts;
    .left-buttons {
      display: flex;
      .active-btn {
        width: 7.12em;
        height: 3.26em;
        font-size: 2.01em;
        font-weight: 900;
        cursor: pointer;

        border-radius: 2em;
        color: $default-text-color;
        background-color: $blue-sky;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .next-btn {
        cursor: pointer;
        width: 3.26em;
        height: 3.26em;
        font-size: 2.01em;
        font-weight: 900;
        border: 1px solid $blue-sky;
        border-radius: 2em;
        color: $blue-sky;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1em;
      }
    }
    .right-button {
      .all-articles {
        width: 10.48em;
        height: 3.76em;
        cursor: pointer;
        font-size: 2.01em;
        font-weight: 900;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        border-radius: 2em;
        a {
          color: $default-text-color;
        }
        background-color: $blue-sky;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    @include max($large) {
      margin: 6em 0 0 0;
    }
    @include max($small) {
      margin: 3em 0 0 0;
      flex-direction: column;
      width: 100%;
      .left-buttons {
        display: flex;
        justify-content: space-between;
        .active-btn {
          width: 2.92em;
          height: 2.92em;
        }
        .next-btn {
          margin: 0;
          width: 6.6em;
          height: 2.92em;
        }
      }
      .right-button {
        .all-articles {
          width: 100%;
          height: 3.35em;
          margin-top: 9.8%;
        }
      }
    }
  }
}
</style>