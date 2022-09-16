<template>
    <p>Meu nome e {{ nome }}</p>
    <h1>Ola view</h1>
</template>

<script>
    export default {
  methods: {
  },
        name: "First",
        data()
        {
            return {
                nome: 'Charles',
            }
        }
    }
</script>