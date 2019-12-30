import Quote from "./Quote.vue";


const VueQuote = {
    install(Vue, options) {
      Vue.component(Quote.name, Quote)
    }
};
  
export default VueQuote;


// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueQuote)
}