<template>
  <div class="menu">
    <div class="layout align-center justify-center" id="cards">
      <Card
        v-for="(card, i) in cards" :key="i"
        :card="card"
        @click="openLink(card.link)"
        :show-title="true"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  components: {
    Card
  },
  data: () => ({
    cards: [
      {
        title: 'Top Stories',
        url: 'https://ik.imagekit.io/6xhf1gnexgdgk/Webp.net-resizeimage__2__rkFNogU8E.jpg',
        link: 'top-stories'
      },
      {
        title: 'Best Stories',
        url: 'https://ik.imagekit.io/6xhf1gnexgdgk/Webp.net-resizeimage__2__rkFNogU8E.jpg',
        link: 'best-stories'
      },
      {
        title: 'New Stories',
        url: 'https://ik.imagekit.io/6xhf1gnexgdgk/Webp.net-resizeimage__2__rkFNogU8E.jpg',
        link: 'new-stories'
      }
    ]
  }),
  methods: {
    openLink(name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss">
.menu {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
