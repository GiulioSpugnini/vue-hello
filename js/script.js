Vue.config.devtools = true;
console.log('Vue ok', Vue);
const app = new Vue({
    el: '#root',
    data: {
        name: 'Giulio',
        lastName: 'Spugnini',
        age: '25',
    }
});