<template>
  <div class="home-blog">
    <div class="hero" :style="{ ...bgImageStyle }">
      <!--  <div
        class="mask"
        :style="{
          background: `
            url(${$frontmatter.bgImage ?
            $withBase($frontmatter.bgImage) :
            require('../images/home-bg.jpg')}) center/cover no-repeat
          `
        }"
      >
      
      
      </div> -->
      <!-- 背景视频 -->
      <div class="mask" ref="homeWarp">
        <bgVideo v-if="isBgVideo" />
        <HomeBgImg v-else />
      </div>
      <a href="#content" class="down-arrows iconfont iconxiala"></a>
      <ModuleTransition delay="0.08">
        <homeText />
      </ModuleTransition>
    </div>
    <div id="content"></div>

    <ModuleTransition delay="0.16">
      <div v-show="recoShowModule" class="home-blog-wrapper">
        <div class="blog-list">
          <!-- 博客列表 -->
          <note-abstract
            :data="$recoPosts"
            :currentPage="currentPage"
          ></note-abstract>
          <!-- 分页 -->
          <pagation
            class="pagation"
            :total="$recoPosts.length"
            :currentPage="currentPage"
            @getCurrentPage="getCurrentPage"
          />
        </div>
        <div class="info-wrapper">
          <PersonalInfo />
          <h4>
            <i class="iconfont reco-category"></i> {{ homeBlogCfg.category }}
          </h4>
          <ul class="category-wrapper">
            <li
              class="category-item"
              v-for="(item, index) in this.$categories.list"
              :key="index"
            >
              <router-link :to="item.path">
                <span class="category-name">{{ item.name }}</span>
                <span
                  class="post-num"
                  :style="{ backgroundColor: getOneColor() }"
                  >{{ item.pages.length }}</span
                >
              </router-link>
            </li>
          </ul>
          <hr />
          <h4 v-if="$tags.list.length !== 0">
            <i class="iconfont reco-tag"></i> {{ homeBlogCfg.tag }}
          </h4>
          <TagList @getCurrentTag="getPagesByTags" />
          <h4
            v-if="
              $themeConfig.friendLink && $themeConfig.friendLink.length !== 0
            "
          >
            <i class="iconfont reco-friend"></i> {{ homeBlogCfg.friendLink }}
          </h4>
          <FriendLink />
        </div>
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <Content v-show="recoShowModule" class="home-center" custom />
    </ModuleTransition>
  </div>
</template>

<script>
import TagList from "@theme/components/TagList";
import FriendLink from "@theme/components/FriendLink";
import NoteAbstract from "@theme/components/NoteAbstract";
import pagination from "@theme/mixins/pagination";
import ModuleTransition from "@theme/components/ModuleTransition";
import PersonalInfo from "@theme/components/PersonalInfo";
import { getOneColor } from "@theme/helpers/other";
import moduleTransitonMixin from "@theme/mixins/moduleTransiton";
import bgVideo from "./bgVideo";
import HomeBgImg from "./HomeBgImg";
import homeText from "./homeText";
export default {
  mixins: [pagination, moduleTransitonMixin],
  components: {
    NoteAbstract,
    TagList,
    FriendLink,
    ModuleTransition,
    PersonalInfo,
    bgVideo,
    homeText,
    HomeBgImg,
  },
  data() {
    return {
      recoShow: false,
      currentPage: 1,
      tags: [],
      isBgVideo: true, //背面壁纸使用视频还是图片
    };
  },

  computed: {
    homeBlogCfg() {
      return this.$recoLocales.homeBlog;
    },
    actionLink() {
      const { actionLink: link, actionText: text } = this.$frontmatter;

      return {
        link,
        text,
      };
    },
    heroImageStyle() {
      return (
        this.$frontmatter.heroImageStyle || {
          maxHeight: "200px",
          margin: "6rem auto 1.5rem",
        }
      );
    },
    bgImageStyle() {
      const initBgImageStyle = {
        // height: '350px',
        height: "100vh",
        textAlign: "center",
        overflow: "hidden",
      };
      const { bgImageStyle } = this.$frontmatter;

      return bgImageStyle
        ? { ...initBgImageStyle, ...bgImageStyle }
        : initBgImageStyle;
    },
    heroHeight() {
      return document.querySelector(".hero").clientHeight;
    },
  },
  mounted() {
    this.recoShow = true;
    this._setPage(this._getStoragePage());
    setTimeout(() => {
      this.pageTitleHeight = this.$refs.homeWarp.clientHeight;
      // this.pTbgBar = document.querySelector(".pt-bgBar");
      // this.pTbgBar.style.opacity = "0";
      document.documentElement.scrollTop = 0;
      this._root = document.querySelector(":root");

      window.addEventListener("scroll", this.handleScrollChange);
    }, 100);
    // 获得屏幕宽度
    this.isBgVideo = document.documentElement.clientWidth > 800;
  },
  methods: {
    // 获取当前页码
    getCurrentPage(page) {
      this._setPage(page);
      setTimeout(() => {
        window.scrollTo(0, this.heroHeight);
      }, 100);
    },
    // 根据分类获取页面数据
    getPages() {
      let pages = this.$site.pages;
      pages = pages.filter((item) => {
        const { home, date } = item.frontmatter;
        return !(home == true || date === undefined);
      });
      // reverse()是为了按时间最近排序排序
      this.pages = pages.length == 0 ? [] : pages;
    },
    getPagesByTags(tagInfo) {
      this.$router.push({ path: tagInfo.path });
    },
    _setPage(page) {
      this.currentPage = page;
      this.$page.currentPage = page;
      this._setStoragePage(page);
    },
    getOneColor,
    handleScrollChange(e) {
      clearTimeout(this.ScrollTimer);

      this.ScrollTimer = setTimeout(() => {
        let prop = document.documentElement.scrollTop / this.pageTitleHeight;
        if (prop > 1 || isNaN(prop)) {
          prop = 1;
        }
        this._root.style.setProperty("--nav-opacity", prop);
      }, 100);
    },
  },
};
</script>

<style lang="stylus">
.home-blog {
  // padding: $navbarHeight 0 0;
  padding: 0 0;
  margin: 0px auto;

  .down-arrows {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    bottom: 2rem;
    font-size: 30px;
    cursor: pointer;
    opacity: 0.2;
    z-index: 10;
    animation: arrowsMov 3s infinite;
    /* &:hover {
      animation: none;
    } */
  }

  @keyframes arrowsMov {
    0% {
      bottom: 4rem;
      opacity: 0.2;
    }

    100% {
      bottom: 0;
      opacity: 0;
    }
  }

  .hero {
    position: relative;

    .mask {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;

      .bg-video {
        // width: 100vw;
        // height: 100vh;
      }

      &:after {
        display: block;
        content: ' ';
        background: var(--mask-color);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 0;
        opacity: 0.2;
      }
    }

    figure {
      position: absolute;
      background: yellow;
    }

    h1 {
      margin: 7rem auto 1.8rem;
      font-size: 2.5rem;
    }

    h1, .description, .action, .huawei {
      color: #fff;
    }

    .description {
      margin: 1.8rem auto;
      font-size: 1.6rem;
      line-height: 1.3;
    }
  }

  .home-blog-wrapper {
    display: flex;
    align-items: flex-start;
    margin: 20px auto 0;
    max-width: $homePageWidth;

    .blog-list {
      flex: auto;
      width: 0;

      .abstract-wrapper {
        .abstract-item:last-child {
          margin-bottom: 0px;
        }
      }
    }

    .info-wrapper {
      position: -webkit-sticky;
      position: sticky;
      top: 70px;
      // overflow: hidden;
      transition: all 0.3s;
      margin-top: 15px;
      margin-left: 15px;
      flex: 0 0 300px;
      height: auto;
      box-shadow: var(--box-shadow);
      border-radius: $borderRadius;
      box-sizing: border-box;
      padding: 0 15px;
      background: var(--background-color);

      &:hover {
        box-shadow: var(--box-shadow-hover);
      }

      h4 {
        color: var(--text-color);
      }

      .category-wrapper {
        list-style: none;
        padding-left: 0;

        .category-item {
          margin-bottom: 0.4rem;
          padding: 0.4rem 0.8rem;
          transition: all 0.5s;
          border-radius: $borderRadius;
          box-shadow: var(--box-shadow);
          background-color: var(--background-color);

          &:hover {
            transform: scale(1.04);
          }

          a {
            display: flex;
            justify-content: space-between;

            .post-num {
              width: 1.6rem;
              height: 1.6rem;
              text-align: center;
              line-height: 1.6rem;
              border-radius: $borderRadius;
              background: #eee;
              font-size: 13px;
              color: #fff;
            }
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .home-blog {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      margin: 0 -1.5rem;
      height: 450px;

      img {
        // max-height: 210px;
        // margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 6rem auto 1.8rem;
        font-size: 2rem;
      }

      h1, .description, .action {
        // margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      display: block !important;

      .blog-list {
        width: auto;
      }

      .info-wrapper {
        // display none!important
        margin-left: 0;

        .personal-info-wrapper {
          display: none;
        }
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-blog {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      margin: 0 -1.5rem;

      // height 350px
      img {
        // max-height: 210px;
        // margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 6rem auto 1.8rem;
        font-size: 2rem;
      }

      h1, .description, .action {
        // margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      display: block !important;

      .blog-list {
        width: auto;
      }

      .info-wrapper {
        // display none!important
        margin-left: 0;

        .personal-info-wrapper {
          display: none;
        }
      }
    }
  }
}
</style>
