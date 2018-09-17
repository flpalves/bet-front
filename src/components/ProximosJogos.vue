<template>
  <div>
      <b-card title="Meus Jogos">
          <div class="card-text">
              <h2>Rodada 01</h2>
              <JogoIndividualExterno home="Felipe" away="Lua" />
              <hr>
              <JogoEquipeExterno home="Flamengo" away="Fluminense" />
          </div>
      </b-card>
  </div>
</template>

<script>
import JogoIndividualExterno from '../components/JogoIndividualExterno.vue'; 
import JogoEquipeExterno from '../components/JogoEquipeExterno.vue'; 

export default {
  props: {
    
  },
  data: function(){
    return{
     
    }
  },
  components : {
    JogoIndividualExterno,
    JogoEquipeExterno
  },
  methods: {
   
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
