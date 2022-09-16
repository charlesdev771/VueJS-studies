<template>
    <p>clo: {{ name }}</p>
    <p>clo: {{ nome }}</p>
</template>   


<script>

    export default {

        name: 'LifeCycle',
        data() 
        {

            return {

                nome: "Ainda nao sabemos",
        }
    },
    created()
    {
        this.nome = "Charles"
    }, 
    mounted()
    {
        this.nome = "Bob"
    }
    }
</script>