

<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from "./template/Nav";

export default {

  name: "App",
  components: {
    appNav: Nav
  }
};
</script>

<style>

</style>
