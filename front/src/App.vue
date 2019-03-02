<template>
  <div class="app" id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato');

body, html {
  font-family: 'Lato';
  background: linear-gradient(to left, #f46b45, #eea849);
}

* {
  box-sizing: border-box;
  font-weight: normal;
}

@media screen and (min-width: 1024px) {
  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  ::-webkit-scrollbar-thumb {
    background: #eea849;
  }

  ::-webkit-scrollbar-track {
    background: #c3c3c3;
  }
}

.app {
  height: inherit;
  width: inherit;
  scroll-behavior: smooth;
}
</style>
