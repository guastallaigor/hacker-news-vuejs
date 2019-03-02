<template>
  <div id="layout">
    <github-corner/>
    <div class="layout wrap-column mt-negative has-title">
      <h1 class="title">Hacker News</h1>
      <h3 class="subtitle" v-if="getName">{{ getName }}</h3>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <button type="button" @click="goToRoute" class="go-back" v-if="$route.name !== 'menu'">
      <img :src="require('@/assets/arrow.svg')" alt="Arrow left fab button">
    </button>
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
const routes = ['top-stories', 'best-stories', 'new-stories']

export default {
  name: 'Layout',
  components: {
    GithubCorner
  },
  computed: {
    getName () {
      const { name } = this.$route

      if (name && routes.includes(name)) {
        return `${name.charAt(0).toUpperCase()}${name.slice(1).replace('-', ' ')}`
      }

      return ''
    }
  },
  methods: {
    goToRoute () {
      const { name } = this.$route

      if (name && name.includes('user')) {
        this.$router.back()

        return
      }

      this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all .2s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.go-back {
  border-radius: 100px;
  z-index: 999;
  padding: 14px;
  background-color: #eea849;
  position: fixed;
  right: 8px;
  border: 0;
  bottom: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
  transition: all .2s ease-out;
  will-change: opacity;
  user-select: none;
  outline: none;

  @media screen and (max-width: 1024px) {
    padding: 8px;
    right: 10px;
    bottom: 10px;
  }

  &:hover {
    opacity: .75;
  }
}

@mixin titles () {
  margin: 0 auto .2em auto;
  color: #fff;
}

.has-title {
  text-shadow: 2px 2px 10px #000;

  .title {
    font-size: 3em;

    @media screen and (max-width: 425px) {
      font-size: 2.4em;
    }
  }

  .title, .subtitle {
    @include titles();
  }

  .mt-negative {
    margin-top: -1.2em;
  }
}
</style>
