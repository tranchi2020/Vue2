new Vue ({
    el: '#vue-app',
    data: {
        name: 'Tran Chi',
        job: 'DEV'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ', ' + this.name
        }
    }
})