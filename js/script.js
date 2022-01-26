Vue.config.devtools = true;
console.log('Vue ok', Vue);
const app = new Vue({
    el: '#root',
    data: {
        name: 'Hasbulla',
        lastName: 'Magomedov',
        age: '20',
        avatar: 'https://staticfanpage.akamaized.net/wp-content/uploads/sites/6/2021/06/hasbulla-3-768x432.jpg',
    }
});