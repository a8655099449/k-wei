<!--
 * @Date: 2020-11-27 20:09:59
 * @LastEditors: kuangw
 * @LastEditTime: 2021-01-16 21:42:22
 * @FilePath: \my-node\docs\.vuepress\theme\components\NoteAbstract.vue
 * @desc: Do not edit
-->
<template>
  <div class="abstract-wrapper">
    <NoteAbstractItem
      v-for="(item) in currentPageData"
      :key="item.path"
      :item="item"
      :currentPage="currentPage"
      :currentTag="currentTag" />
  </div>
</template>

<script>
import NoteAbstractItem from './NoteAbstractItem'

export default {
  components: { NoteAbstractItem },
 
  props: ['data', 'currentPage', 'currentTag'],
  computed: {
    currentPageData () {
      const start = this.currentPage * 10 - 10
      const end = this.currentPage * 10
      return this.data.slice(start, end)
    }
  }
}
</script>

<style lang="stylus" scoped>
.abstract-wrapper
  width 100%
</style>
