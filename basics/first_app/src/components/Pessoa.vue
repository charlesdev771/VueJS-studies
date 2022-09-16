import Form from './Form';

<template>

    <h2>Descricao: </h2>
    <h2>nome: {{nome}}: </h2>
    <h2 class="teste">idade: {{age}}: </h2>
    <h2 v-if="height > 1.9" class="test2">altura: {{height}}: </h2>
    <h2 v-else="height < 1.90">Sou baixo</h2>
    <a v-bind:href="link" _target="_blank">Link</a>
    <div>
        <button @click="show_email">Mostrar</button>
    </div>
    <p v-show="mostrar_email">Acessar email: {{email}}</p>


    <form action="" @submit="sendForm">
        <Form />
    </form>


    <ul>
        <li v-for="(back, index) in backend" v-bind:key="index">
            {{back}}
        </li>

    </ul>


</template>


<script>
import Form from './Form.vue';

    export default {
    name: "Pessoa",
    data() {
        return {
            nome: "Charles",
            age: "21",
            height: 1.93,
            link: "https://google.com",
            backend: ["django", "flask", "node", "django", "flask", "node", "django", "flask", "node"],
        };
    },
    methods: {
        show_email() {
            this.mostrar_email = !this.mostrar_email;
        }
    },
    components: { Form }
}

</script>

<style scoped>
    .test2
    {
        color: green;
    }
</style>