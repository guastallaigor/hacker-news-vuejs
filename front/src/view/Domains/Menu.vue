<template>
  <div class="menu">
    <div class="layout align-center justify-center" id="cards">
      <Card
        v-for="(card, i) in cards" :key="i"
        :title="card.title"
        :url="card.url"
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
        url: 'https://images.all-free-download.com/images/graphiclarge/abstract_modern_design_vector_background_illustration_570122.jpg'
      },
      {
        title: 'Best Stories',
        url: 'https://images.all-free-download.com/images/graphiclarge/abstract_modern_design_vector_background_illustration_570122.jpg'
      },
      {
        title: 'New Stories',
        url: 'https://images.all-free-download.com/images/graphiclarge/abstract_modern_design_vector_background_illustration_570122.jpg'
      }
    ]
  })
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
