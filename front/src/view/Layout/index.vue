<template>
  <div id="layout">
    <github-corner/>
    <router-view></router-view>
    <vue-progress-bar/>
    <button type="button" @click="$router.back()" class="go-back" v-if="$route.name !== 'menu'">
      <img :src="require('@/assets/arrow.svg')" alt="Arrow left fab button">
    </button>
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'

export default {
  name: 'Layout',
  components: {
    GithubCorner
  }
}
</script>

<style lang="scss">
.go-back {
  border-radius: 100px;
  z-index: 999;
  padding: 14px;
  background-color: #eea849;
  position: fixed;
  right: 15px;
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
</style>
