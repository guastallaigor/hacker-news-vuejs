<template>
  <div id="layout">
    <github-corner/>
    <router-view></router-view>
    <vue-progress-bar/>
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
