<template >
  <div class="top-stories">
    <div class="layout wrap-row align-center justify-center">
      <Card
        v-for="card in stories.data" :key="card.id"
        :card="card"
        @click="open(card)"
      >
        <h3>{{ card.title }}</h3>
        <p>{{ card.time | formatTime }}</p>
        <p>Score: {{ card.score }}</p>
      </Card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Card: () => import('@/components/Card')
  },
  computed: mapState({ stories: state => state.allStories.stories }),
  created() {
    this.getStories()
  },
  filters: {
    formatTime (value) {
      const calc = Date.now() / 1000 - Number(value)
      let divider = 0
      let minuteHourDay = ''

      switch (calc) {
        case calc < 3600:
          divider = 60
          minuteHourDay = 'minute'
          break;
        case calc < 86400:
          divider = 3600
          minuteHourDay = 'hour'
          break;
        default:
          divider = 86400
          minuteHourDay = 'day'
          break;
      }

      const time = Math.floor(calc / divider)
      minuteHourDay = time === 1
        ? `${time} ${minuteHourDay}`
        : `${time} ${minuteHourDay}s`

      return `Time posted: ${minuteHourDay} back`
    }
  },
  methods: {
    ...mapActions('allStories', [
      'getTopStories',
      'getBestStories',
      'getNewStories'
    ]),
    async getStories() {
      const { name } = this.$route
      name === 'top-stories'
        ? this.getTopStories()
        : name === 'best-stories'
          ? this.getBestStories()
          : this.getNewStories()
    },
    open(card) {
      if (card && card.url) {
        window.open(card.url, '_blank', 'noopener')

        return
      }

      // this.$router.push(`/story/${card.id}`)
    }
  }
}
</script>

<style lang="scss">
.top-stories {
  margin: 2% auto;
}
</style>
