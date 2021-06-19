<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="homepoint" :to="`/`">
            <img src="~/assets/image/logonavbar.png" style="width:50%" />
          </nuxt-link>
        </div>
        <div v-if="!isAuth" style="display: flex;">
          <nuxt-link class="loginpoint" :to="`/login`"
            ><div>Login</div>
          </nuxt-link>
          <nuxt-link class="loginpoint" :to="`/register`"
            ><div>\register</div></nuxt-link
          >
        </div>
        <div v-else>
          <b-dropdown
            size="lg"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template v-slot:button-content>
              <div
                style="color: black; font-family: Prompt;font-weight: 500;font-size: 20px;"
              >
                {{ user.username }}
              </div>
              <!-- {{ user.username }} -->
            </template>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </nav>

    <Nuxt />

    <img src="~/assets/image/Footer.png" class="footer" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: this.$store.state.auth.auth,
      isAuth: this.$store.state.auth.isAuth
    };
  },
  methods: {
    logout() {
      this.$store.commit("auth/logout");
      this.$store.commit("auth/isAuth", false);
      this.$cookies.remove("livesteam-token");
      window.location.assign("/login");
    }
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.navbar-brand {
  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 60px;
  display: flex;
  align-items: center;
  padding-top: 0px;
  margin-left: -100px;

  color: #000000;
}
.footer {
  width: 100%;
  margin-right: 0px;
}
.loginpoint {
  font-family: Prompt;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
}
</style>
