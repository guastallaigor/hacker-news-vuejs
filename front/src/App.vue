<template>
  <div class="app" id="app">
    <transition name="slide" mode="in-out">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato');

body {
  font-family: 'Lato';
  padding: 1em;
  background: linear-gradient(to left, #f46b45, #eea849)
}

* {
  box-sizing: border-box;
  font-weight: normal;
}

::-webkit-scrollbar {
  width: 11px;
  height: 11px;
}

::-webkit-scrollbar-thumb {
  background: #0052cc;
}

::-webkit-scrollbar-track {
  background: #c3c3c3;
}

.app {
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
}
</style>
