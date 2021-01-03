new Vue ({
    el: '#vue-app',
    data: {
        age: 25,
        a: 0,
        b: 0
    },
    methods: {
        // addToA: function() {
        //     console.log('add To A')
        //     return this.a + this.age
        // },
        // addToB: function() {
        //     console.log('add To B')
        //     return this.b + this.age
        // }
    },
    computed: {
        addToA: function() {
            console.log('add To A')
            return this.a + this.age
        },
        addToB: function() {
            console.log('add To B')
            return this.b + this.age
        }
    }
})