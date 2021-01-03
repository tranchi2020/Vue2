new Vue ({
    el: '#vue-app',
    data: {
        name: 'Tran Chi',
        job: 'DEV',
        website: 'https://tranchi2020.github.io',
        websiteTag: '<a href="https://tranchi2020.github.io">Tran Chi Developer</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ', ' + this.name
        }
    }
})