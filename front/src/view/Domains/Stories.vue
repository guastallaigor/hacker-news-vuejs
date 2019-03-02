<template >
  <div class="top-stories">
    <div class="layout wrap-row align-center justify-center">
      <Card
        v-for="card in stories.data"
        :key="card.id"
        :card="card"
        :less-padding="true"
        @click="open(card)"
      >
        <h2 class="card-title">{{ card.title | textSubstr(getSubstr) }}</h2>
        <p><strong>Posted:</strong>&nbsp;{{ card.time | formatTime }}
          &nbsp;|&nbsp;
          <strong>Score:</strong>&nbsp;{{ card.score }} points</p>
        <p>by: {{ card.by | textSubstr(50) }}</p>
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
    getSubstr() {
      if (window && window.innerWidth < 425) {
        return 30
      }

      return 80
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

      return `${minuteHourDay} ago`
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
.top-stories {
  margin: 2% auto;
  text-shadow: 2px 2px 10px #000;

  strong {
    text-shadow: 2px 2px 6px #000;
  }

  @media screen and (max-width: 425px) {
    font-size: 1em;
  }
}
</style>
