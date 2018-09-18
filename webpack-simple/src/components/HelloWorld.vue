<template>
  <p> Server status {{ status  }}</p>
  <button @click="changeStatus">Change status</button>
</template>

<script>
 export default {
   data: function() {
     return {
       status: 'Critical'
     }
   },
   methods: {
     changeStatus() {
       this.status = "Normal";
     }
   }
};
</script>
