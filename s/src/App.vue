<template>
  <div class="container">
    <header-cmp></header-cmp>
    <hr>
    <div class="row">
      <server-cmp></server-cmp>
      <server-details></server-details>
    </div>
    <hr>
    <footer-cmp></footer-cmp>
  </div>
</template>
<script>
import Servers from "./components/Servers/Server.vue";
import ServerDetails from "./components/Servers/ServerDetails.vue";
import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";

export default {
  components: {
    "header-cmp": Header,
    "server-cmp": Server,
    "server-details": ServerDetails,
    "footer-cmp": Footer
  }
};
</script>
