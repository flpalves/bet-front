<template>


<b-container>
  <b-col md="6" offset-md="3">
      <div class="login-form">
        <div class="main-div">
            <div class="panel">
              <h2>Bem vindo ao Bet League</h2>
              <p>Insira seu login e senha</p>
            </div>
            <form id="Login">
              <div class="form-group">
                  <input type="text" class="form-control" id="inputText" placeholder="Login">
              </div>
              <div class="form-group">
                  <input type="password" class="form-control" id="inputPassword" placeholder="Senha">
              </div>
              <button type="submit" class="btn btn-primary btn-block">Login</button>
              <div class="forgot">
                  <a href="">Esqueceu a senha?</a>
              </div>
            </form>
        </div>
      </div>
    
  </b-col>
</b-container>




</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
