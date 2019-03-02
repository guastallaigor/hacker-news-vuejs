<template >
  <div class="top-stories">
    <div class="layout wrap-column align-center justify-center mt-negative">
      <h1 class="title">Hacker News</h1>
      <h3 class="subtitle">{{ getName }}</h3>
    </div>
    <div class="layout wrap-row align-center justify-center">
      <Card
        v-for="card in stories.data"
        :key="card.id"
        :card="card"
        :less-padding="true"
        @click="open(card)"
      >
        <h2 class="card-title">{{ card.title | textSubstr(80) }}</h2>
        <p>{{ card.time | formatTime }}</p>
        <p>Score: {{ card.score }} points | by: {{ card.by }}</p>
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
  computed: {
    ...mapState({ stories: state => state.allStories.stories }),
    getName () {
      const { name } = this.$route

      return `${name.charAt(0).toUpperCase()}${name.slice(1).replace('-', ' ')}`
    }
  },
  created () {
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

      return `Time posted: ${minuteHourDay} ago`
    }
  },
  methods: {
    ...mapActions ('allStories', [
      'getTopStories',
      'getBestStories',
      'getNewStories'
    ]),
    async getStories () {
      const { name } = this.$route
      name === 'top-stories'
        ? this.getTopStories()
        : name === 'best-stories'
          ? this.getBestStories()
          : this.getNewStories()
    },
    open (card) {
      if (card && card.url) {
        window.open(card.url, 'toolbar=no,menubar=no,scrollbars=no,location=no,status=no', 'noopener')

        return
      }

      // this.$router.push(`/story/${card.id}`)
    }
  }
}
</script>

<style lang="scss">
@mixin titles () {
  margin: 0 auto .2em auto;
  color: #fff;
}

.top-stories {
  margin: 2% auto;
  text-shadow: 2px 2px 10px #000;
}

.title {
  font-size: 3em;
}

.title, .subtitle {
  @include titles();
}

.mt-negative {
  margin-top: -1.2em;
}
</style>
