<template functional>
  <div
    class="card"
    :style="props.card && props.card.url ? `background-image: url(${props.card.url})` : ''"
    :class="{'less-padding': props.lessPadding}"
    v-on="listeners"
  >
    <h1 class="text-shadow" v-if="props.showTitle">{{ props.card.title }}</h1>
    <slot/>
  </div>
</template>

<style lang="scss">
.card {
  text-align: center;
  margin: 2em;
  width: 400px;
  cursor: pointer;
  background-size: cover;
  border-radius: 10px;
  box-sizing: border-box;
  background-position: center;
  background-color: transparent;
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

  @media screen and (max-width: 425px) {
    width: 300px;
    margin: 1em;
    font-size: 1em;
    padding: 0em 1.5em;

    > h1 {
      font-size: 3.1em;
    }
  }

  &:hover {
    box-shadow: 0 0 15px rgba(0,0,0,.4),
      0 0 25px rgba(0,0,0,.2);
    top: -5px;
  }
}

.less-padding {
  padding: 0 1.3em !important;
}

.text-shadow {
  text-shadow: 1px 1px rgba(0, 0, 0, 0.04),
    2px 2px rgba(0, 0, 0, 0.04),
    3px 3px rgba(0, 0, 0, 0.04),
    4px 4px rgba(0, 0, 0, 0.04),
    0.125rem 0.125rem rgba(0, 0, 0, 0.04),
    6px 6px rgba(0, 0, 0, 0.04),
    7px 7px rgba(0, 0, 0, 0.04),
    8px 8px rgba(0, 0, 0, 0.04),
    9px 9px rgba(0, 0, 0, 0.04),
    0.3125rem 0.3125rem rgba(0, 0, 0, 0.04),
    11px 11px rgba(0, 0, 0, 0.04),
    12px 12px rgba(0, 0, 0, 0.04),
    13px 13px rgba(0, 0, 0, 0.04),
    14px 14px rgba(0, 0, 0, 0.04),
    0.625rem 0.625rem rgba(0, 0, 0, 0.04),
    16px 16px rgba(0, 0, 0, 0.04),
    17px 17px rgba(0, 0, 0, 0.04),
    18px 18px rgba(0, 0, 0, 0.04),
    19px 19px rgba(0, 0, 0, 0.04),
    1.25rem 1.25rem rgba(0, 0, 0, 0.04);
}
</style>
