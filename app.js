// CREATING TEMPLATES USING VUE

// const app = Vue.createApp({
//   //data, functions
//   template: "<h2>I am a template</h2>",
// });

// app.mount("#app");

// OUTPUTTING A VARIABLE USING VUE

// const app = Vue.createApp({
//   data() {
//     return {
//       title: "The Final Empire",
//       author: "Nadeem Johnson",
//       age: 25,
//     };
//   },
// });

// app.mount("#app");

// REACTING TO EVENTS IN VUE

// const app = Vue.createApp({
//   data() {
//     return {
//       title: "The Final Empire",
//       author: "Nadeem Johnson",
//       age: 25,
//     };
//   },
//   methods: {
//     changeTitle(title) {
//       //   this.title = "Motion is power";
//       this.title = title;
//     },
//   },
// });

// app.mount("#app");

//CONDTIONAL RENDERING

// const app = Vue.createApp({
//   data() {
//     return {
//       showbooks: true,
//       title: "The Final Empire",
//       author: "Nadeem Johnson",
//       age: 25,
//       x: 0,
//       y: 0,
//     };
//   },
//   methods: {
//     toggleShowBooks() {
//       //   this.showbooks = false;
//       this.showbooks = !this.showbooks;
//     },
//   },
// });

// MOUSE EVENTS

// const app = Vue.createApp({
//   data() {
//     return {
//       showbooks: true,
//       title: "The Final Empire",
//       author: "Nadeem Johnson",
//       age: 25,
//       x: 0,
//       y: 0,
//     };
//   },
//   methods: {
//     handleEvent(e) {
//       console.log(e, e.type);
//     },
//     handleEvent(e, data) {
//       console.log(e, e.type);
//       if (data) {
//         console.log(data);
//       }
//     },
//     handleMouseMove(e) {
//       this.x = e.offsetX;
//       this.y = e.offsetY;
//     },
//   },
// });

//OUTPUTTING LISTS

// const app = Vue.createApp({
//   data() {
//     return {
//       showbooks: true,
//       books: [
//         {
//           title: "The Final Empire",
//           author: "Nadeem Johnson",
//         },
//         {
//           title: "Why Do We Fall?",
//           author: "Nadeem Johnson",
//         },
//         {
//           title: "Motion Power!",
//           author: "Nadeem Johnson",
//         },
//       ],
//     };
//   },
//   methods: {
//     toggleShowBooks() {
//       this.showbooks = !this.showbooks;
//     },
//   },
// });

// ATTRIBUTE BINDING

// const app = Vue.createApp({
//   data() {
//     return {
//       url: "https://codepen.io/royaladvisor/pen/BawqaRL",
//       showbooks: true,
//       books: [
//         {
//           title: "The Final Empire",
//           author: "Nadeem Johnson",
//           img: "https://images.squarespace-cdn.com/content/v1/5ae2fce87e3c3ae275ea2c9f/1526464175408-W92Q4MSAM40I8YF4HM64/tess-cover.jpg?format=1500w",
//         },
//         {
//           title: "Why Do We Fall?",
//           author: "Nadeem Johnson",
//           img: "https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg",
//         },
//         {
//           title: "Motion Power!",
//           author: "Nadeem Johnson",
//           img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
//         },
//       ],
//     };
//   },
//   methods: {
//     toggleShowBooks() {
//       this.showbooks = !this.showbooks;
//     },
//   },
// });

// app.mount("#app");

const app = Vue.createApp({
    data() {
      return {
        sum: "",
        operators: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "0",
          "+",
          "-",
          "*",
          "/",
          ".",
        ],
      };
    },
    methods: {
      addToSum(operator) {
        this.sum += operator;
      },
      evalSum() {
        this.sum = eval(this.sum);
      },
      clearSum() {
        this.sum = "";
      },
    },
  });
  
  app.mount("#app");
  