<template>
  <div>
    <div v-for="item in moveList" :key="item.name">
      <MovieItem :item="item" />
    </div>
  </div>
</template>

<script>
import moveList from "./data/2020Movie";
import MovieItem from "./MovieItem";

export default {
  components: { MovieItem },
  data() {
    return {
      moveList: moveList,
    };
  },
};
</script>

<style>
</style>