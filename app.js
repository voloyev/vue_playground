new Vue({
  el: "#app",
  data: {
    attachedRed: false
  },
  computed: {
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    }
  }
});
