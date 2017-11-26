new Vue({
  el: '#app',
  data: {
    title: 'World Hello!',
    link:  'http://google.com',
    finishedLink: "<a href='http://google.com.ua'>Google ua</a>",
    counter: 0,
    x: 0,
    y: 0,
    name: 'Bob'
  },

  methods: {
    sayHello: function() {
      this.title = 'Hello!';
      return this.title;
    },

    increase: function(step, event){
      this.counter += step;
    },

    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },

    alertMe: function() {
      alert('Alert!');
    }
  }
});

new Vue({
  el: '#exercise',
  data: {
    myName: 'Volodymyr',
    myAge: 25,
    imgLink: "https://i.pinimg.com/originals/c4/dd/5d/c4dd5d671bb86d8551e9697c2d9ece06.gif"
  },

  methods: {
    modyfyAge: function() {
      return this.myAge * 3;
    },

    randNum: function() {
      return Math.random(1);
    }
  }
});

new Vue({
  el: '#exercise2',
  data: {
    value: ''
  },
  methods: {
    alertOnClick: function() {
      alert('You clicked the button!');
    },

    listenValue: function(event) {
      this.value = event.target.value;
    }
  }
});
