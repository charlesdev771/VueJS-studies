const meyNameApp = {
    data()
    {
        return {
            name: "Charles",
            input_name: ""
        }
    },
        methods: {
            submitForm(e) {
                this.name = this.input_name;
            console.log(this.input_name);
        }
    }
}

Vue.createApp(meyNameApp).mount('#app');