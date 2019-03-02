<template functional>
  <div class="not-found layout align-center wrap-column justify-center">
    <h2>OOPS...</h2>
    <h1>404</h1>
    <p>Error</p>
    <p>Sorry, the page you are looking for could not be found</p>
  </div>
</template>

<style lang="scss">
@mixin set-font-style($margin: 0, $color: #fff, $fontSize: 2.5em) {
  margin: $margin;
  font-size: $fontSize;
  color: $color;
}

.not-found {
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  > h2 {
    @include set-font-style();
  }

  > h1 {
    @include set-font-style(0, #444, 8.5em);
    font-weight: bold;
  }

  > p {
    @include set-font-style(0 0 .5em 0, #444, 2.5em);
  }

  > p + p {
    @include set-font-style(0, #fff, 1.5em);
    border-top: 1px solid #fff;
    padding: 1em 1.5em 0 1.5em;
  }
}
</style>
