<template>
  <First />
  <p>Dado: {{testando}} </p>
  <LifeCycle />
  <Pessoa />
</template>

<script>

  import First from './components/First.vue';
  import LifeCycle from './components/LyfeCicle.vue';
  import Pessoa from './components/Pessoa.vue';
  import Form from './components/Form.vue';

 export default {
  props: {
  },
  name: 'app',
  components: {
    First,
    LifeCycle,
    Pessoa,
    Pessoa
}, 
  data()
  {
    return {
    testando: "Jooj",
  }
}

 }
</script>

<style>

  body
  {
    background: #777;

  }
  .teste
  {
    color: pink;
  }

</style>