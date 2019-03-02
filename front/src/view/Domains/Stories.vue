<template >
  <div class="top-stories centered-div">
    <div class="layout wrap-row align-center justify-center">
      <Card
        v-for="(card, $index) in stories"
        :key="$index"
        :card="card"
        :less-padding="true"
        @click.prevent.stop="open(card)"
      >
        <h2 class="card-title">{{ card.title | textSubstr(getSubstr) }}</h2>
        <p><strong>Posted:</strong>&nbsp;{{ card.time | formatTime }}
          &nbsp;|&nbsp;
          <strong>Score:</strong>&nbsp;{{ card.score }} points</p>
        <p @click.prevent.stop="goToUser(card.by)" class="user">by: {{ card.by | textSubstr(50) }}</p>
      </Card>
      <div class="loader layout justify-center" v-if="loading">
        <rotate-square2/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import RotateSquare2 from '@/components/RotateSquare2'

export default {
  components: {
    Card: () => import('@/components/Card'),
    RotateSquare2
  },
  data: () => ({
    page: 1
  }),
  created () {
    this.clear()
    const { query } = this.$route
    this.page = query && query.page && !isNaN(query.page)
      ? parseInt(query.page, 10)
      : 1
    this.getStories()
  },
  mounted () {
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
  methods: {
    ...mapMutations('allStories', ['clear']),
    ...mapActions('allStories', [
      'getTopStories',
      'getBestStories',
      'getNewStories'
    ]),
    async getStories () {
      const { page } = this
      const query = { page }
      const { name } = this.$route
      const routes = ['top-stories', 'best-stories', 'new-stories']
      if (!routes.includes(name)) return

      switch (name) {
        case 'top-stories':
          await this.getTopStories(query)
          break
        case 'best-stories':
          await this.getBestStories(query)
          break
        case 'new-stories':
          await this.getNewStories(query)
          break
      }

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
      if (this.loading) return

      this.page += 1
      this.getStories()
    },
    open (card) {
      if (card && card.url) {
        window.open(card.url, 'toolbar=no,menubar=no,scrollbars=no,location=no,status=no', 'noopener')
      }
    },
    goToUser (user) {
      this.$router.push(`/user/${user}`)
    }
  }
}
</script>

<style lang="scss">
.top-stories {
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

  .user:hover {
    text-decoration: underline;
  }
}
</style>
