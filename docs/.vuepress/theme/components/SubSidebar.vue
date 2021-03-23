<script>
import { isActive } from "@theme/helpers/utils";

export default {
  data() {
    return {
      show: true
    }
  },
  computed: {
    headers() {
      const headers = (this.$page.headers || []).filter(
        (header) => header.level === 2
      );
      return headers;
    },
  },
  methods: {
    isLinkActive(header) {
      return isActive(this.$route, this.$page.path + "#" + header.slug);
    },
    handleShow(){
      this.show = !this.show
    }
  },
  render(h) {
    console.log(this.$page.headers);
    return h(
      "ul",
      {
        class: { "sub-sidebar-wrapper": true },
        style: { left:this.show ? "0px" : "-30vw" },
      },
      [
        ...(this.$page.headers || []).map((header) => {
          return h(
            "li",
            {
              class: {
                active: this.isLinkActive(header),
                [`level-${header.level}`]: true,
              },
              attr: { key: header.title },
            },
            [
              h(
                "router-link",
                {
                  class: { "sidebar-link": true },
                  props: { to: `${this.$page.path}#${header.slug}` },
                },
                header.title
              ),
            ]
          );
        }),
        h("i", {
          class: {
            "show-side-bar": true,
            iconback: true,
            // iconback: this.show,
            // iconcaidan:!this.show,
            iconfont: true,
            show:!this.show,
          },
          on:{
            click:this.handleShow
          }
        }),
      ]
    );
  },
};
</script>

<style lang="stylus" scoped>
.sub-sidebar-wrapper[class] {
  // width: 12rem;
  padding-left: 0;
  list-style: none;
  font-size: 12px;
  position: fixed;
  left: 0;
  top: 45px;
  bottom: 0;
  width: 19vw;
  overflow-y: scroll;
  // overflow-x auto
  padding: 0;
  border-right: 1px solid var(--border-color);
  padding-top: 40px;
  transition 1s

  .show-side-bar {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0px;
    top: 0px;
    // background: #fff;
    font-size: 20px;
    cursor: pointer;
    display flex
    align-items center
    justify-content center
    transition 1s
  }
  .show-side-bar.show{
    position: fixed;
    left: 40px;
    top: 100px;
    // border 1px solid #000
    transform rotate(180deg)
    font-size 40px

  }

  li {
    padding: 0.2rem 0;
    cursor: pointer;
    border-left: 1px solid var(--border-color);

    a {
      padding: 0.35rem 1rem 0.35rem 0rem;
      color: var(--text-color);
    }

    &:hover {
      a {
        color: $accentColor;
      }
    }

    &.active {
      border-left: 3px solid $accentColor;

      a {
        color: $accentColor;
      }
    }

    &.level-1 {
      padding-left: 0.4rem;

      a {
        font-weight: 600;
      }
    }

    &.level-2 {
      padding-left: 0.9rem;

      a {
        font-weight: 600;
        font-size: 16px;
      }
    }

    &.level-3 {
      padding-left: 1.5rem;
    }
  }
}
</style>

