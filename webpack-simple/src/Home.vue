<template>
  <div>
    <app-server-status v-for="_server in 5"></app-server-status>
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus";
export default {
  components: {
    "app-server-status": ServerStatus
  }
};
</script>
