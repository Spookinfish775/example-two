<template>
  <div class="blog-wrapper">
    <div class="title-block">
      <p class="title">{{ $t("blog.howWash.title") }}</p>
      <div class="blog-img"></div>
      <p class="description">{{ $t("blog.howWash.description") }}</p>
    </div>
    <div class="description-block">
      <div class="title">
        <p>{{ $t("blog.howWash.sortByColorTitle") }}</p>
      </div>
      <div class="description">
        <p>{{ $t("blog.howWash.sortByColorDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="title">
        <p>{{ $t("blog.howWash.sortByCompounTitle") }}</p>
      </div>
      <div class="description">
        <p>{{ $t("blog.howWash.sortByCompounDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="title">
        <p>{{ $t("blog.howWash.sortByDirtTitle") }}</p>
      </div>
      <div class="description">
        <p>{{ $t("blog.howWash.sortByDirtDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="title">
        <p>{{ $t("blog.howWash.choiceWashModeTitle") }}</p>
      </div>
      <div class="description">
        <p>{{ $t("blog.howWash.choiceWashModeDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="title">
        <div class="icon">
          <img src="/img/blog-img/washMode.svg" alt="" />
        </div>
        <p>{{ $t("blog.howWash.washModeTitle") }}</p>
      </div>
      <div class="description paddleft">
        <p>{{ $t("blog.howWash.washModeDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="title" id="big-title">
        <p>{{ $t("blog.howWash.washTempTitle") }}</p>
      </div>
      <div class="description" id="big-description">
        <p>{{ $t("blog.howWash.washTempDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="title">
        <div class="icon">
          <img src="/img/blog-img/naturDry.svg" alt="" />
        </div>
        <p>{{ $t("blog.howWash.dryTitle") }}</p>
      </div>
      <div class="description paddleft">
        <p>{{ $t("blog.howWash.dryDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="title">
        <div class="icon">
          <img src="/img/blog-img/drySpnin.svg" alt="" />
        </div>
        <p>{{ $t("blog.howWash.spinningTitle") }}</p>
      </div>
      <div class="description paddleft">
        <p>{{ $t("blog.howWash.spinningDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="title">
        <div class="icon">
          <img src="/img/blog-img/ironing.svg" alt="" />
        </div>
        <p>{{ $t("blog.howWash.ironingTitle") }}</p>
      </div>
      <div class="description paddleft">
        <p>{{ $t("blog.howWash.ironingDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="title">
        <div class="icon">
          <img src="/img/blog-img/dryClean.svg" alt="" />
        </div>
        <p>{{ $t("blog.howWash.dryСleaningTitle") }}</p>
      </div>
      <div class="description paddleft">
        <p>{{ $t("blog.howWash.dryСleaningDescription") }}</p>
      </div>
    </div>
    <div class="description-block">
      <div class="title">
        <div class="icon">
          <img src="/img/blog-img/dontWash.svg" alt="" />
        </div>
        <p>{{ $t("blog.howWash.dontWashTitle") }}</p>
      </div>
      <div class="description paddleft">
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
    .title {
      font-size: 3.83em;
      font-weight: 850;
      line-height: 4.6em;
      text-transform: uppercase;
      color: $main-color;
      font-family: TT Hazelnuts;
    }
    .blog-img {
      width: 115.03em;
      height: 61.7em;
      background: url("/img/blog-img/howWashBlog.png");
      background-size: cover;
    }
    .description {
      width: 68%;
      margin-top: 6em;
      font-size: 1.81em;
      font-weight: 400;
      line-height: 1.8em;
      color: $main-color;
    }
  }
  .description-block {
    margin-top: 5em;
    width: 68%;
    .title {
      position: relative;
      display: flex;
      align-items: center;
      .icon {
        position: absolute;
        left: -8%;
        width: 4.43em;
        height: 4.43em;
        img {
          width: 100%;
        }
      }
      p {
        font-size: 2.21em;
        font-weight: 900;
        text-transform: uppercase;
        line-height: 3.5em;
        color: $main-color;
      }
    }
    #big-title {
      p {
        line-height: 1.8em;
      }
    }
    .description {
      p {
        font-size: 1.81em;
        font-weight: 400;
        line-height: 1.8em;
        color: $main-color;
      }
    }
    #big-description {
      margin-top: 2.6em;
    }
  }
  .navigation-block {
    margin-top: 18em;
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
    padding: 0 4em;
    margin-top: 16em;
    .title-block {
      .title {
        font-size: 4.72em;
        font-weight: 900;
        line-height: 3.6em;
      }
      .blog-img {
        width: 118.92em;
      }
      .description {
        width: 100%;
        margin-top: 4em;
        font-size: 2.7em;
        line-height: 1.6em;
      }
    }
    .description-block {
      margin-top: 5em;
      width: 100%;
      .title {
        position: relative;
        display: flex;
        align-items: center;
        .icon {
          position: relative;
          left: 0;
          margin-right: 2em;
          width: 7.43em;
          height: 7.43em;
          img {
            width: 100%;
          }
        }
        p {
          font-size: 3.38em;
          line-height: 2.6em;
        }
      }
      #big-title {
        p {
          line-height: 1.4em;
        }
      }
      .description {
        p {
          font-size: 2.7em;
          font-weight: 400;
          line-height: 1.6em;
          color: $main-color;
        }
      }
      #big-description {
        margin-top: 2.2em;
      }
      .paddleft {
        padding-left: 9.5em;
      }
    }
    .navigation-block {
      margin-top: 18em;
      width: 100%;
      .left-buttons {
        .active-btn {
          width: 3.23em;
          height: 3.23em;
          font-size: 3.37em;
        }
        .next-btn {
          width: 7.11em;
          height: 3.23em;
          font-size: 3.37em;
          margin-left: 1em;
        }
      }
      .right-button {
        .all-articles {
          width: 10.48em;
          height: 3.76em;
          border-radius: 4em;
          font-size: 3.37em;
        }
      }
    }
  }
  @include max($small) {
    padding: 0 2.5em;
    margin-top: 12em;
    .title-block {
      .title {
        font-size: 3.12em;
        font-weight: 900;
        line-height: 2.2em;
      }
      .blog-img {
        background: url("/img/blog-img/howWashBlogMobile.png");
        background-size: contain;
        width: 40.9em;
        height: 42.04em;
      }
      .description {
        width: 100%;
        margin-top: 2em;
        font-size: 1.99em;
        line-height: 1.6em;
      }
    }
    .description-block {
      margin-top: 5em;
      width: 100%;
      .title {
        position: relative;
        display: flex;
        align-items: center;
        .icon {
          position: relative;
          left: 0;
          margin-right: 2em;
          width: 3.41em;
          height: 3.41em;
          img {
            width: 100%;
          }
        }
        p {
          font-size: 2.56em;
          line-height: 1.4em;
        }
      }
      #big-title {
        p {
          line-height: 1.4em;
        }
      }
      .description {
        p {
          font-size: 1.99em;
          margin-top: 1em;
          line-height: 1.6em;
        }
      }
      #big-description {
        margin-top: 1.9em;
      }
      .paddleft {
        padding-left: 0em;
      }
    }
    .navigation-block {
      margin-top: 16em;
      width: 100%;
      flex-direction: column;
      .left-buttons {
        justify-content: space-between;
        .active-btn {
          width: 2.99em;
          height: 2.99em;
          font-size: 2.85em;
        }
        .next-btn {
          width: 6.78em;
          height: 2.99em;
          font-size: 2.85em;
          margin-left: 0em;
        }
      }
      .right-button {
        margin-top: 4em;
        .all-articles {
          width: 100%;
          height: 3.44em;
          border-radius: 4em;
          font-size: 2.85em;
        }
      }
    }
  }
}
</style>