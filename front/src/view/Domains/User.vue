<template>
  <div class="user">
    <div class="loader layout justify-center" v-if="loading">
      <rotate-square2/>
    </div>
    <div class="centered-div layout justify-center"
      v-if="user && user.id"
    >
      <Card
        :not-clickable="true"
        :less-padding="true"
      >
        <h2>User: {{ user.id }}</h2>
        <p><strong v-if="user.created">Created:</strong>&nbsp;{{ user.created | formatTime }}
          &nbsp;|&nbsp;
          <strong v-if="user.karma">Karma:</strong>&nbsp;{{ user.karma }}</p>
        <p><strong v-if="user.about">About:</strong>&nbsp;{{ user.about | textSubstr(35) }}</p>
        <a
          v-if="user.submitted"
          :href="`https://news.ycombinator.com/submitted?id=${user.id}`"
          rel="noopener"
          target="_blank"
          class="submitted"
        >
          Submitted
        </a>
      </Card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import RotateSquare2 from '@/components/RotateSquare2'

export default {
  components: {
    RotateSquare2,
    Card: () => import('@/components/Card')
  },
  props: {
    id: {
      type: String,
      default: '',
      required: true
    }
  },
  computed: mapState({
    user: state => state.user.user,
    loading: state => state.loading.loading
  }),
  created () {
    this.getUserInformation()
  },
  methods: {
    ...mapActions('user', ['getUser']),
    async getUserInformation () {
      await this.getUser(this.id)
    }
  }
}
</script>

<style lang="scss">
.submitted {
  color: #fff;

  &:hover {
    opacity: .75;
  }
}
</style>
