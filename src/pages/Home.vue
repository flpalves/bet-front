<template>
 <div class="container">
   <div class="row">
     <b-col md="3">
       Menu Interno
     </b-col>
     <b-col md="9">
       <b-row>
         <b-col md="6">
           <MeusPontos />
           <MeuRanking />
         </b-col>
         <b-col md="6">
           <MeuFeed />
         </b-col> 
       </b-row>
       <b-row>
         <b-col md="6">
           <UltimosJogos />
         </b-col>
         <b-col> 
           <ProximosJogos />
         </b-col>
       </b-row>
       <b-row>
         <b-col md="12">
           <Apostar />
         </b-col>
       </b-row>
     </b-col>
   </div>
 </div>
</template>

<script>
import MeusPontos from '../components/MeusPontos.vue'; 
import UltimosJogos  from '../components/UltimosJogos.vue'; 
import ProximosJogos  from '../components/ProximosJogos.vue'; 
import MeuRanking  from '../components/MeuRanking.vue'; 
import MeuFeed  from '../components/MeuFeed.vue'; 
import Apostar  from '../components/Apostar.vue'; 
export default {
  props: {
    
  },
  data: function(){
    return{
     
    }
  },
  components: {
    MeusPontos,
    UltimosJogos,
    ProximosJogos,
    MeuRanking,
    MeuFeed,
    Apostar
  },
  methods: {
   
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
