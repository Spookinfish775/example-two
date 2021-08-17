<template>
  <div class="blog-wrapper">
    <div class="title-block">
      <h1 class="page-title">{{ $t("blog.howWash.title") }}</h1>
      <div class="blog-img"></div>
      <p class="page-text">{{ $t("blog.howWash.description") }}</p>
    </div>

    <div
      class="description-block"
      v-for="(item, index) in content"
      :key="index"
    >
      <div class="icon" v-if="item.icon">
        <img :src="item.icon" />
      </div>
      <div>
        <h2 class="second-page-title">
          <img class="mobile-icon" v-if="item.icon" :src="item.icon" />
          {{ item.title }}
        </h2>
        <p class="page-text">{{ item.text }}</p>
      </div>
    </div>
    <div class="navigation-block">
      <div class="left-buttons">
        <div class="active-btn">1</div>
        <nuxt-link to="/blog/washSheets" class="next-btn">2</nuxt-link>
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
          title: this.$t("blog.howWash.sortByColorTitle"),
          text: this.$t("blog.howWash.sortByColorDescription"),
        },
        {
          title: this.$t("blog.howWash.sortByCompounTitle"),
          text: this.$t("blog.howWash.sortByCompounDescription"),
        },
        {
          title: this.$t("blog.howWash.sortByDirtTitle"),
          text: this.$t("blog.howWash.sortByDirtDescription"),
        },
        {
          title: this.$t("blog.howWash.choiceWashModeTitle"),
          text: this.$t("blog.howWash.choiceWashModeDescription"),
        },
        {
          title: this.$t("blog.howWash.washModeTitle"),
          text: this.$t("blog.howWash.washModeDescription"),
          icon: "/img/blog-img/washMode.svg",
        },
        {
          title: this.$t("blog.howWash.washTempTitle"),
          text: this.$t("blog.howWash.washTempDescription"),
        },
        {
          title: this.$t("blog.howWash.dryTitle"),
          text: this.$t("blog.howWash.dryDescription"),
          icon: "/img/blog-img/naturDry.svg",
        },
        {
          title: this.$t("blog.howWash.spinningTitle"),
          text: this.$t("blog.howWash.spinningDescription"),
          icon: "/img/blog-img/drySpnin.svg",
        },
        {
          title: this.$t("blog.howWash.ironingTitle"),
          text: this.$t("blog.howWash.ironingDescription"),
          icon: "/img/blog-img/ironing.svg",
        },
        {
          title: this.$t("blog.howWash.dryСleaningTitle"),
          text: this.$t("blog.howWash.dryСleaningDescription"),
          icon: "/img/blog-img/dryClean.svg",
        },
        {
          title: this.$t("blog.howWash.dontWashTitle"),
          text: this.$t("blog.howWash.dontWashDescription"),
          icon: "/img/blog-img/dontWash.svg",
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
      background: url("/img/blog-img/howWashBlog.png") center no-repeat;
      background-size: cover;
      @include max($large) {
        width: 69.84em;
        height: 37.5em;
      }
      @include max($small) {
        background: url("/img/blog-img/howWashBlogMobile.png") center no-repeat;
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
    @include max($large) {
      padding-top: 3em;
    }
    .second-page-title {
      display: flex;
      align-items: center;
      .mobile-icon {
        display: none;
        width: 1.3em;
        height: 1.3em;
        margin: 0 0.5em 0 0;
        @include max($small) {
          display: inline;
          position: relative;
        }
      }
    }
    .icon {
      position: relative;
      @include max($large) {
        width: 4em;
        height: 4em;
        margin: 0 4.5em 0 0;
      }
      @include max($small) {
        display: none;
      }
      img {
        position: absolute;
        left: -7em;
        width: 4em;
        height: 4em;
        @include max($large) {
          position: static;
        }
        @include max($small) {
          width: 2.5em;
          height: 2.5em;
        }
      }
    }
    .page-text {
      padding-top: 0.73em;
      @include max($large) {
        padding-top: 0.5em;
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