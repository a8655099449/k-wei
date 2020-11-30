<template>
  <header :class="{ navbar: true, isHome: this.isHome }">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <router-link :to="$localePath" class="home-link">
      <img
        class="logo"
        v-if="$themeConfig.logo"
        :src="$withBase($themeConfig.logo)"
        :alt="$siteTitle"
      />
      <span ref="siteName" class="site-name" v-if="$siteTitle">{{
        $siteTitle
      }}</span>
    </router-link>

    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px',
            }
          : {}
      "
    >
      <Mode />
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <SearchBox
        v-else-if="
          $themeConfig.search !== false && $frontmatter.search !== false
        "
      />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from "@AlgoliaSearchBox";
import SearchBox from "@SearchBox";
import SidebarButton from "@theme/components/SidebarButton";
import NavLinks from "@theme/components/NavLinks";
import Mode from "@theme/components/Mode";

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, Mode },

  data() {
    return {
      linksWrapMaxWidth: null,
      isHome: false,
    };
  },
  created() {
    this.getRouter();
  },
  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, "paddingLeft")) +
      parseInt(css(this.$el, "paddingRight"));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener("resize", handleLinksWrapWidth, false);
  },

  computed: {
    algolia() {
      return this.$themeLocaleConfig.algolia || this.$themeConfig.algolia || {};
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    },
  },
  watch: {
    $route: "getRouter",
  },
  methods: {
    getRouter(e) {
   
      let path = this.$route.fullPath.split('#')[0]

      this.isHome = path === "/";
    },
  },
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">
@require '../styles/mode.styl';

$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 1.5rem;

.navbar {
  --background-color: rgba(0, 0, 0, 0);
  padding: $navbar-vertical-padding $navbar-horizontal-padding;
  line-height: $navbarHeight - 1.4rem;
  box-shadow: var(--box-shadow);
  background: var(--background-color);

  a, span, img {
    display: inline-block;
  }

  .logo {
    height: $navbarHeight - 1.4rem;
    min-width: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    vertical-align: top;
    border-radius: 50%;
  }

  .site-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color);
    position: relative;
    background: var(--background-color);
  }

  .links {
    padding-left: 1.5rem;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: $navbar-horizontal-padding;
    top: $navbar-vertical-padding;
    display: flex;
    background-color: var(--background-color);

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }
  }
  .site-name {
    color: var(--mytext-color);
  }

  a, span, img {
    color: var(--mytext-color);
  }

  .iconfont {
    color: var(--mytext-color);
  }
}

.isHome {
  --background-color: rgba(0, 0, 0, 0);
  .site-name {
    color: var(--mytext-color);
  }

  a, span, img {
    color: var(--mytext-color);
  }

  .iconfont {
    color: var(--mytext-color);
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;

    .can-hide {
      display: none;
    }

    .home-link {
      display: none;
    }

    .links {
      padding-left: 0.2rem;
    }
  }
}
</style>
