<!--
 * @Date: 2020-11-27 20:09:59
 * @LastEditors: kuangw
 * @LastEditTime: 2021-01-17 22:18:40
 * @FilePath: \my-node\docs\.vuepress\theme\components\NoteAbstractItem.vue
 * @desc: Do not edit
-->
<template>
  <div class="abstract-item" @click="$router.push(item.path)">
    <div class="img-box">
      <img :src="imgPic" />
    </div>
    <!-- <i v-if="item.frontmatter.sticky" class="iconfont reco-sticky"></i> -->
    <div class="content">
      <!-- <i v-if="item.frontmatter.sticky" class="iconfont reco-sticky"></i> -->
      <!-- 标题 -->
      <div class="title">
        <!-- <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i> -->
        <router-link :to="item.path">{{ item.title }}</router-link>
      </div>
      <!--    <div class="desc">
        描述
      </div> -->

      <div class="abstract" v-html="item.excerpt"></div>

      <hr class="hr" />
      <PageInfo :pageInfo="item" :currentTag="currentTag"> </PageInfo>
    </div>
  </div>
</template>

<script>
import PageInfo from "./PageInfo";
import { miniPicArr } from "../helpers/bz";
export default {
  data: {
    imgPic: "",
  },
  components: { PageInfo },
  props: ["item", "currentPage", "currentTag"],
  created() {
    console.log(this.item.frontmatter.pic);
    if (this.item.frontmatter.pic) {
      this.imgPic = this.item.frontmatter.pic;
    } else {
      this.imgPic = miniPicArr[parseInt(Math.random() * miniPicArr.length)];
    }
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/mode.styl';

.abstract-item {
  position: relative;
  margin: 0 auto 20px;
  padding: 16px 20px;
  width: 100%;
  overflow: hidden;
  border-radius: $borderRadius;
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition: all 0.3s;
  background-color: var(--background-color);
  cursor: pointer;
  display: flex;
  // align-items stretch
  align-self stretch
  max-height 600px
  .img-box {
    width: 30%;
    margin-right: 20px;
    max-height: 600px;
    overflow: hidden;
    display flex
    align-items center

    img {
      width: 100%;
      border-radius: 4px;
      object-fit: cover;
      border-radius 3px
    }
  }

  .content {
    width: calc(70% - 20px);
    // height 100%
    // directio
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0;
    margin-top: 0;
  }

  &> * {
    pointer-events: auto;
  }

  .reco-sticky {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    color: $accentColor;
    font-size: 2.4rem;
  }

  &:hover {
    box-shadow: var(--box-shadow-hover);
  }

  .title {
    position: relative;
    font-size: 1.28rem;
    line-height: 36px;
    display: inline-block;

    .reco-lock {
      font-size: 1.28rem;
      color: $accentColor;
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: 0.3s ease-in-out;
    }

    &:hover a {
      color: $accentColor;
    }

    &:hover:after {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }

  .tags {
    .tag-item {
      &.active {
        color: $accentColor;
      }

      &:hover {
        color: $accentColor;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .tags {
    display: block;
    margin-top: 1rem;
    margin-left: 0 !important;
  }

  .abstract-item {
    display: block;

    .content {
      width: 100%;
    }

    .img-box {
      width: 100%;
    }
  }
}
</style>
