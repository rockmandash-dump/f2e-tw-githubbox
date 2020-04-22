<template>
  <div class="container">
    <img src="./assets/logo.png" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss">
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: darken;

  > img {
    width: 90%;
    max-width: 600px;
  }
}
</style>
