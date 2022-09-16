<template>
  <First />
  <p>Dado: {{testando}} </p>
  <LifeCycle />
</template>

<script>

  import First from './components/First.vue';
  import LifeCycle from './components/LyfeCicle.vue';
 export default {
  name: 'app',
  components: { 
    First,
    LifeCycle
  }, 
  data()
  {
    return {
    testando: "Jooj",
  }
}

 }
</script>