<template>
  <div class="Login">
    <h1>Kakao Login</h1>
    <img
      alt="Kakao logo"
      src="../assets/kakaoLoginBtn.png"
      v-on:click="login()"
    />
  </div>
</template>

<script>
export default {
  methods: {
    login: function () {
      window.Kakao.Auth.authorize({
        redirectUri: "http://localhost:4000/auth/kakao/callback",
      });
    },
  },
  beforeMount(){
  
  }
};

</script>