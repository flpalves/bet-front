<template>
  <b-container>
    <b-col md="6" offset-md="3">
        <div class="login-form">
          <div class="main-div">
              <div class="panel">
                <h2>Bem vindo ao Bet League</h2>
                <p>Insira seu login e senha</p>
                <p>{{usuario}}</p>
                <p>{{senha}}</p>
                
              </div>
              <form id="Login">
                <div class="form-group">
                    <input type="text" class="form-control" id="inputText" v-model="usuario" placeholder="Login">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="inputPassword" v-model="senha" placeholder="Senha">
                </div>
                <button type="submit" @click.prevent="goToHome()" class="btn btn-primary btn-block">Login</button>
                <div class="forgot">
                    <!-- <router-link to="/esqueci-senha">esqueci minha senha</router-link> -->
                </div>
              </form>
              <!-- <router-view></router-view> -->
          </div>
        </div>
    </b-col>
  </b-container>
</template>

<script>
  export default {
    props: {

    },
    data: function(){
      return{
        usuario : null,
        senha : null
      }
    },
    methods: {
      goToHome : function(){
        this.$router.push({ path: 'home' })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
