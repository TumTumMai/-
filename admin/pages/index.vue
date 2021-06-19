<template>
  <div class="bg-image card-body ">
    <div class="container ">
      <div class="box login-box-body bg-secondary mb-3">
        <img src="~/assets/icon/S__13746207.jpg" width="150px" height="100px" />
        <p class="login-box-msg ">
          ADMIN
        </p>
        <div class="boxlogin"></div>
        <form action="../../index2.html" method="post">
          <div class="form-group has-feedback">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="email"
            />
            <span
              class="glyphicon glyphicon-envelope form-control-feedback"
            ></span>
          </div>
          <div class="form-group has-feedback">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="password"
            />
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox icheck">
                <label class="">
                  <div
                    class="icheckbox_square-blue"
                    aria-checked="false"
                    aria-disabled="false"
                    style="position: relative;"
                  >
                    <input
                      type="checkbox"
                      style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"
                    /><ins
                      class="iCheck-helper"
                      style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"
                    ></ins>
                  </div>
                </label>
              </div>
            </div>
            <!-- /.col -->

            <div class="col-12">
              <nuxt-link :to="`/account`">
                <button
                  type="submit"
                  class="signin btn btn-primary btn-block btn-flat"
                  @click="submit"
                >
                  Sign In
                </button>
              </nuxt-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      email: "mingtest@gmail.com",
      password: "123456789"
    };
  },
  methods: {
    async submit() {
      const login = {
        email: this.email,
        password: this.password
      };
      try {
        await this.$auth.loginWith("local", { data: login });
        this.$router.push("/account");
      } catch (error) {}

      // const { data } = await this.$axios.post("/api/auth/signin", login);
      // const token = data.accessToken;
      // const set = await this.$auth.setUserToken(token);
      // console.log("set", set);
    }
  }
};
</script>

<style>
.bg-image {
  background-image: url("~@/assets/Background/orangeBG.gif");
  background-repeat: repeat-x;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.box {
  width: 45%;
  padding: 5%;
  border-radius: 7px;
  margin-top: -7px;
  font-size: 19px;
  color: #fd7e14 !important;
  background-color: #ffffff !important;
}
.signin {
  background-color: #fd7e14;
  border-color: #fd7e14;
}

.signin:hover {
  background-color: #fd7e14;
  border-color: #fd7e14;
}
</style>
