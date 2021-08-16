<template>
  <div class="blog-wrapper">
    <div class="title-block">
      <h1 class="page-title">{{ $t("blog.howWash.title") }}</h1>
      <div class="blog-img"></div>
      <p class="page-text">{{ $t("blog.howWash.description") }}</p>
    </div>
    <div class="description-block">
      <div class="second-page-title">
        <p>{{ $t("blog.howWash.sortByColorTitle") }}</p>
      </div>
      <div class="page-text">
        <p>{{ $t("blog.howWash.sortByColorDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="second-page-title">
        <p>{{ $t("blog.howWash.sortByCompounTitle") }}</p>
      </div>
      <div class="page-text">
        <p>{{ $t("blog.howWash.sortByCompounDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="second-page-title">
        <p>{{ $t("blog.howWash.sortByDirtTitle") }}</p>
      </div>
      <div class="page-text">
        <p>{{ $t("blog.howWash.sortByDirtDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="second-page-title">
        <p>{{ $t("blog.howWash.choiceWashModeTitle") }}</p>
      </div>
      <div class="page-text">
        <p>{{ $t("blog.howWash.choiceWashModeDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="tit second-page-title">
        <div class="icon">
          <img src="/img/blog-img/washMode.svg" alt="" />
        </div>
        <p>{{ $t("blog.howWash.washModeTitle") }}</p>
      </div>
      <div class="page-text paddleft">
        <p>{{ $t("blog.howWash.washModeDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="second-page-title" id="big-title">
        <p>{{ $t("blog.howWash.washTempTitle") }}</p>
      </div>
      <div class="page-text" id="big-description">
        <p>{{ $t("blog.howWash.washTempDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="tit second-page-title">
        <div class="icon">
          <img src="/img/blog-img/naturDry.svg" alt="" />
        </div>
        <p>{{ $t("blog.howWash.dryTitle") }}</p>
      </div>
      <div class="page-text paddleft">
        <p>{{ $t("blog.howWash.dryDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="tit second-page-title">
        <div class="icon">
          <img src="/img/blog-img/drySpnin.svg" alt="" />
        </div>
        <p>{{ $t("blog.howWash.spinningTitle") }}</p>
      </div>
      <div class="page-text paddleft">
        <p>{{ $t("blog.howWash.spinningDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="tit second-page-title">
        <div class="icon">
          <img src="/img/blog-img/ironing.svg" alt="" />
        </div>
        <p>{{ $t("blog.howWash.ironingTitle") }}</p>
      </div>
      <div class="page-text paddleft">
        <p>{{ $t("blog.howWash.ironingDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="tit second-page-title">
        <div class="icon">
          <img src="/img/blog-img/dryClean.svg" alt="" />
        </div>
        <p>{{ $t("blog.howWash.dryСleaningTitle") }}</p>
      </div>
      <div class="page-text paddleft">
        <p>{{ $t("blog.howWash.dryСleaningDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="tit second-page-title">
        <div class="icon">
          <img src="/img/blog-img/dontWash.svg" alt="" />
        </div>
        <p>{{ $t("blog.howWash.dontWashTitle") }}</p>
      </div>
      <div class="page-text paddleft">
        <p>{{ $t("blog.howWash.dontWashDescription") }}</p>
      </div>
    </div>
    <div class="navigation-block">
      <div class="left-buttons">
        <div class="active-btn">1</div>
        <div class="next-btn">2</div>
      </div>
      <div class="right-button">
        <div class="all-articles">
          {{ $t("blog.howWash.allButton") }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-wrapper {
  width: 100%;
  padding: 0 12em;
  margin-top: 20em;

  .title-block {
    .page-title {
      line-height: 4.6em;
    }
    .blog-img {
      width: 115.03em;
      height: 61.7em;
      background: url("/img/blog-img/howWashBlog.png") center no-repeat;
      background-size: cover;
    }
    .page-text {
      margin-top: 3em;
      width: 70%;
    }
  }
  .description-block {
    width: 70%;
    margin-top: 6em;
    .tit {
      display: flex;
      align-items: center;
      .icon {
        margin: 0 1em 0 0;
        width: 1.32em;
        height: 1.32em;
        img {
          width: 100%;
        }
      }
    }
    .page-text {
      margin-top: 1.3em;
    }
  }
  .navigation-block {
    margin: 18em 0 12em 0;
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

        border-radius: 2em;
        color: $default-text-color;
        background-color: $blue-sky;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .next-btn {
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
        font-size: 2.01em;
        font-weight: 900;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        border-radius: 2em;
        color: $default-text-color;
        background-color: $blue-sky;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @include max($large) {
    padding: 0 3.4em;
    margin-top: 20em;
    .tit {
      display: flex;
      align-items: center;
      .icon {
        margin: 0 1em 0 0;
      }
    }
    .title-block {
      .page-title {
        line-height: 1.6em;
        margin-bottom: 2em;
      }
      .blog-img {
        width: 100%;
        height: 37.5em;
      }
      .page-text {
        margin-top: 2em;
        width: 96%;
      }
    }
    .description-block {
      width: 96%;
      margin-top: 6em;
      .page-text {
        margin-top: 1.3em;
      }
      .paddleft {
        padding-left: 7%;
      }
    }
    .navigation-block {
      margin: 18em 0 12em 0;
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

          border-radius: 2em;
          color: $default-text-color;
          background-color: $blue-sky;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .next-btn {
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
          font-size: 2.01em;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 2em;
          color: $default-text-color;
          background-color: $blue-sky;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  @include max($small) {
    padding: 0 2em;
    margin-top: 10em;
    .title-block {
      .page-title {
        line-height: 1.6em;
        margin-bottom: 2em;
      }
      .blog-img {
        width: 100%;
        height: 34.5em;
        background: url("/img/blog-img/howWashBlogMobile.png") center no-repeat;
        background-size: cover;
      }
      .page-text {
        margin-top: 2em;
        width: 96%;
      }
    }
    .description-block {
      width: 96%;
      margin-top: 3em;
      .page-text {
        margin-top: 1em;
      }
      .paddleft {
        padding-left: 0%;
      }
    }
    .navigation-block {
      margin: 6em 0 6em 0;
      width: 100%;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .left-buttons {
        display: flex;
        justify-content: space-between;
        width: 86%;
        .active-btn {
          width: 3em;
          height: 3em;
          font-size: 2.01em;
          font-weight: 900;
        }
        .next-btn {
          width: 6.7em;
          height: 3em;
          font-size: 2.01em;
          font-weight: 900;
          margin-left: 1em;
        }
      }
      .right-button {
        margin-top: 2em;
        .all-articles {
          width: 15.54em;
          height: 3.8em;
          font-size: 1.8em;
        }
      }
    }
  }
}
</style>