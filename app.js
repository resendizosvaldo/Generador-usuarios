const app = Vue.createApp({
    data() {
        return {
            nombre: 'Osvaldo',
            apellido: 'Resendiz',
            email: 'juanlopez@jotmail.com',
            genero: 'male',
            foto: 'https://randomuser.me/api/portraits/women/71.jpg'
        }
    },
    methods: {
        async cambiarUsuario() {
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json()

            console.log(results);


            this.nombre = results[0].name.first,
                this.apellido = results[0].name.last,
                this.email = results[0].email,
                this.genero = results[0].gender,
                this.foto = results[0].picture.large,
                this.location = results[0].location.country
        }
    }
})

app.mount('#app');