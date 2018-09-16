<template>
 <div class="container">
   <div class="row">
     <b-col md="3">
       Menu Interno
     </b-col>
     <b-col md="9">
       <b-row>
         <d-col md="4">
           <MeusPontos />
         </d-col>
       </b-row>
     </b-col>
   </div>
 </div>
</template>

<script>
import MeusPontos from './MeusPontos.vue'; 
export default {
  props: {
    
  },
  data: function(){
    return{
     
    }
  },
  components: {
    MeusPontos
  },
  methods: {
   
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
