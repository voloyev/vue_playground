<template>
  <div>
    <p>server status {{status}}</p>
    <hr />
    <button @click="changeStatus">Change status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus: function() {
      this.status = "Normal";
    }
  }
};
</script>
