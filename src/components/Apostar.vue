<template>
    <div>
        <b-row>
            <b-col>
                <h2>Apostar</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="4">
                <ApostarJogo />
                <ApostarJogo />
                <ApostarJogo />
                <ApostarJogo />
            </b-col>
            <b-col md="4">
                <ApostarJogo />
                <ApostarJogo />
                <ApostarJogo />
                <ApostarJogo />
            </b-col>
            <b-col md="4">
                <ApostarJogo />
                <ApostarJogo />
                <ApostarJogo />
                <ApostarJogo />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import ApostarJogo from '../components/ApostarJogo.vue'; 

export default {
  props: {
    
  },
  data: function(){
    return{
     
    }
  },
  methods: {
   
  },
  components : {
      ApostarJogo
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
