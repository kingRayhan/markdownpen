// $(".editor").resizable({ 
//     handleSelector: ".splitter",
//     resizeHeight: false
// });


var preWrittenCode = `
# Hello World
This is **markdown Previewer** powered by **vue.js v2**

---

### Used library

* [Vue.js](https://vuejs.org/)
* [Marked.js](https://github.com/chjj/marked)
* [LowDash.js](https://lodash.com/)
`;


new Vue({
  el: '#app',
  data: {
    input: preWrittenCode
  },
  computed: {
    compiledMarkdown(){
      return marked(this.input)
    },
    wordCount(){
      if(this.input == '') return 0;
      return this.input.split(' ').length;
    },
    charCount(){
      return this.input.length;
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 200)
  }
});