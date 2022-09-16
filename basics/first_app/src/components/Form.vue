<template>
    <input v-show="nome" type="text" placeholder="" name="name" />
    <input type="submit" value="Submit">
</template>


<script>
    export default {
        name: 'Form',

        data()
        {
            return {
                nome: 'Eu',
            };
        }
    }
</script>