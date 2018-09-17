<template>
    <div>
        <div>
            <div class="home">{{home}}</div>
            <div class="versus"> <a href="">6</a> x <a href="">4</a> </div>
            <div class="away">{{away}}</div>
        </div>
    </div>
</template>

<script>

export default {
    
  props: ['home','away'],
  data: function(){
    return{
     
    }
  },
  methods: {
   
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a{
        font-size: 22px;
        font-weight: bold;
    }
</style>
