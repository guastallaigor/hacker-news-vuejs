<template >
  <div class="top-stories">
    <div class="layout wrap-row align-center justify-center">
      <Card
        v-for="(card, $index) in stories"
        :key="$index"
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
      <div class="loader layout justify-center" v-if="loading">
        <rotate-square2/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import RotateSquare2 from '@/components/RotateSquare2'

export default {
  components: {
    Card: () => import('@/components/Card'),
    RotateSquare2
  },
  data: () => ({
    page: 1,
    first: false,
    scrollY: 0
  }),
  created() {
    this.first = true
    this.getStories()
  },
  mounted() {
    this.scroll()
  },
  computed: {
    ...mapState({
      stories: state => state.allStories.stories,
      requestData: state => state.allStories.requestData,
      loading: state => state.loading.loading
    }),
    getSubstr () {
      if (window && window.innerWidth < 425) {
        return 30
      }

      return 80
    },
    showMore () {
      const { requestData } = this

      return requestData.total && (requestData.to !== requestData.total)
    }
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
          break
        case calc < 86400:
          divider = 3600
          minuteHourDay = 'hour'
          break
        default:
          divider = 86400
          minuteHourDay = 'day'
          break
      }

      const time = Math.floor(calc / divider)
      minuteHourDay = time === 1
        ? `${time} ${minuteHourDay}`
        : `${time} ${minuteHourDay}s`

      return `${minuteHourDay} ago`
    }
  },
  methods: {
    ...mapActions('allStories', [
      'getTopStories',
      'getBestStories',
      'getNewStories'
    ]),
    async getStories () {
      const { page, stories } = this
      const query = { page }
      const { name } = this.$route

      name === 'top-stories'
        ? await this.getTopStories(query)
        : name === 'best-stories'
          ? await this.getBestStories(query)
          : await this.getNewStories(query)

      this.$router.push({ query })
    },
    scroll () {
      window.onscroll = () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop
        const offset = document.documentElement.offsetHeight || document.body.offsetHeight

         if ((window.innerHeight + scrollPos) >= (offset - 50)) {
           this.paginate()
         }
       }
    },
    paginate () {
      if (this.first) {
        this.first = false

        return
      }

      if (this.loading) return

      this.page += 1
      this.getStories()
    },
    open (card) {
      if (card && card.url) {
        window.open(card.url, 'toolbar=no,menubar=no,scrollbars=no,location=no,status=no', 'noopener')
      }

      // this.$router.push(`/story/${card.id}`)
    }
  }
}
</script>

<style lang="scss">
.top-stories {
  margin: 0 auto;
  text-shadow: 2px 2px 10px #000;
  width: 100%;
  height: 100%;

  > .layout {
    width: inherit;
    height: inherit;
  }

  strong {
    text-shadow: 2px 2px 6px #000;
  }

  @media screen and (max-width: 425px) {
    font-size: 1em;
  }

  .loader {
    margin: 45px auto 10px auto;
    width: 100%;
  }
}
</style>
