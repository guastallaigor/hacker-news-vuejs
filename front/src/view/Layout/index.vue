<template>
  <div>
    <github-corner/>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
import HackerNewsService from '@/services/HackerNewsService'

export default {
  name: 'Layout',
  components: {
    GithubCorner
  },
  created() {
    this.getTopStories()
  },
  methods: {
    async getTopStories() {
      const { data } = await HackerNewsService.getTopStories()
      console.log(data)
    }
  }
}
</script>

<style lang="scss">
.puff-in-center {
	-webkit-animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	        animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

@-webkit-keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(2px);
            filter: blur(2px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(2px);
            filter: blur(2px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
</style>
