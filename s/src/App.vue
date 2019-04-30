<template>
  <div class="container">
    <header-cmp></header-cmp>
    <hr>
    <div class="row">
      <server></server>
      <server-details></server-details>
    </div>
    <hr>
    <footer-cmp></footer-cmp>
  </div>
</template>
<script>
import Server from "./components/Servers/Server.vue";
import ServerDetails from "./components/Servers/ServerDetails.vue";
import HeaderCmp from "./components/Shared/Header.vue";
import FooterCmp from "./components/Shared/Footer.vue";

export default {
  components: {
    HeaderCmp,
    Server,
    ServerDetails,
    FooterCmp
  }
};
</script>
