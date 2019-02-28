<template functional>
  <div class="card" :style="{ backgroundImage: `url(${props.url})` }">
    <h1 class="text-shadow">{{ props.title }}</h1>
  </div>
</template>

<style lang="scss">
.card {
  text-align: center;
  margin-right: 2em;
  width: 400px;
  cursor: pointer;
  background-size: cover !important;
  border-radius: 10px;
  background-position: center !important;
  color: white;
  height: 200px;
  padding: 1em 2em;
  position: relative;
  box-shadow: 0 0 5px rgba(0,0,0,.3),
      0 0 10px rgba(0,0,0,.1);
  will-change: box-shadow, top;
  transition: top .25s ease-out;
  top: 0;

  > h1 {
    font-size: 3.9em;
  }

  &:hover {
    box-shadow: 0 0 15px rgba(0,0,0,.4),
      0 0 25px rgba(0,0,0,.2);
    top: -5px;
  }
}

.text-shadow {
  text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04),
    3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04),
    0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04),
    7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04),
    0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04),
    12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04),
    14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04),
    16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04),
    18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04),
    1.25rem 1.25rem rgba(0, 0, 0, 0.04);
}
</style>
