<template>
  <div class="movie-item">
    <div class="pic">
      <img :src="item.pic" :alt="item.name" />
    </div>
    <div class="desc">
      <h3>《 {{item.name}} 》</h3>
      <p><b>观看时间</b> :  {{item.time}} </p>
      <p><b>推荐度</b> : {{item.level}}分</p>
      <p>
        <b>一句话概括</b> :
        {{item.desc}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {
        pic: "//image.woai996.com/picGo/20210307164451.png",
        name: "血钻",
        time: "2021年3月7日",
        level: 9,
        desc: "如果你的女友想要一颗钻戒，带她看这部电影也许可以打消这个念头。",
        month: 3,
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
.movie-item {
  margin: 10px;
  height: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  padding: 20px;
  margin-bottom 20px

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .pic {
    width: 30%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .desc {
    padding-left: 20px;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 1rem;
    }
  }
}
</style>