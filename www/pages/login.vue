<template>
  <div class="bgpage">
    <div class="headder">
      <navbar></navbar>
      <div class="container runlogin">
        <b-row class="test1">
          <b-col class="col1">
            <h1>Login</h1>
            <br />
            <br />
            <ul class="deletedot">
              <li><img src="~/assets/image/Multi.png" />Anywhere Live!</li>
              <br />
              <li><img src="~/assets/image/photolive.png" />Multi camera</li>
              <br />
              <li><img src="~/assets/image/basket.png" />E-commerce channel</li>
            </ul>
          </b-col>
          <b-col>
            <div class="bgcard">
              <div class="group">
                <!-- <div class="face">
                  <a
                    href="#"
                    class="btn btn-primary btn-lg active"
                    role="button"
                    aria-pressed="true"
                  >
                    <img src="~/assets/image/facebook.png" /> Sign in with
                    Facebook
                  </a>
                </div> -->
                <div class="fecebook" style="margin-left: 130px">
                  <client-only>
                    <v-facebook-login
                      app-id="2614720792121731"
                      @login="onFbLogin"
                      @error="onErrorLogin"
                    ></v-facebook-login>
                  </client-only>
                </div>

                <div class="form-group row">
                  <!-- <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="email" />
                  </div> -->
                  <div class="col-sm-12">
                    <input
                      type="text"
                      class="input-style-nonborder mt-3"
                      placeholder="Email"
                      v-model="form.email"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12">
                    <input
                      type="password"
                      class="input-style-nonborder mt-5"
                      placeholder="Password"
                      v-model="form.password"
                    />
                    <div class="d-flex justify-content-between mt-4">
                      <div>
                        <div class="form-check">
                          <input
                            v-model="isRememberMe"
                            class="form-check-input position-static"
                            type="checkbox"
                            id="blankCheckbox"
                            value="option1"
                            aria-label="re"
                          />
                          Remember Me
                        </div>
                      </div>
                      <div class="Forget-p">Forget Password?</div>
                    </div>
                    <br />
                    <br />
                    <button @click="onSubmit" class="button">
                      เข้าสู่ระบบ
                    </button>
                  </div>
                  <div class="d-flex justify-content-center w-100">
                    <p class="font-weight-lightbold">ยังไม่มีบัญชี?</p>
                    <div class="pointer">
                      <p @click="register" class="font-weight-bold">
                        ลงทะเบียน
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-modal ref="modal" hide-footer hide-header>
      <div class="d-block text-center">
        <h3>Login completed</h3>
      </div>
      <b-button class="mt-3" block @click="clickedOK">OK</b-button>
    </b-modal>
  </div>
</template>
<script>
import navbar from "~/components/navbar_white";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        Error: null
      },
      isRememberMe: false
    };
  },
  components: {
    navbar,
    imageURL() {
      return `${process.env.baseUrl}/uploads`;
    }
  },
  mounted() {
    const Em = this.$cookies.get("emailremeber");
    if (typeof Em !== "undefined") {
      this.form.email = Em;
    }
  },
  methods: {
    async onFbLogin({ authResponse }) {
      if (!authResponse) {
        return false;
      }
      const { accessToken, userID } = authResponse;
      const credentials = await this.$axios.get(
        `https://graph.facebook.com/${userID}?fields=id,name,email,picture&access_token=${accessToken}`
      );
      console.warn(credentials);
      this.signinFacebook(credentials.data);
    },
    onErrorLogin(error) {
      console.log("Facebook login error");
    },
    signinFacebook(data) {
      this.$axios
        .post(process.env.baseUrl + "/api/auth/siginfacebook", data)
        .then(res => {
          console.log(res.data);
          res.data.username = res.data.name;
          this.$cookies.set("livesteam-token", JSON.stringify(res.data));
          this.$router.push("/");
        });
    },
    onSubmit() {
      this.$axios
        .post(process.env.baseUrl + "/api/auth/signin", this.form)
        .then(res => {
          console.log(res.data);
          this.$refs["modal"].show();
          this.$cookies.set("livesteam-token", JSON.stringify(res.data));
          if (this.isRememberMe == true) {
            this.$cookies.set("emailremeber", JSON.stringify(this.form.email));
          } else {
            this.$cookies.remove("emailremeber");
          }
        })
        .catch(err => {
          console.log(err.message);
          alert("Password failed");
        });
    },
    clickedOK() {
      this.$refs["modal"].hide();
      this.$router.push("/");
    },
    register() {
      console.log();
      {
        this.$router.push({
          path: "/register"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.bgpage {
  min-height: 100vh;
  align-items: center;
}
.test1 {
  align-items: center;
}
.pointer {
  cursor: pointer;
}
.bgcard {
  text-align: center;
  background: #fff;
  width: 115%;
  padding: 32px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
}
.deletedot {
  list-style-type: none;
  color: #ffff;
}
ul {
  padding: 0;
  li {
    img {
      width: 30px;
    }
  }
}

.headder {
  background-image: url("../assets/image/BG.png");
  height: 100vh;
  background-size: cover;
}
.col1 {
  color: #ffff;
  font-style: normal;
  font-weight: 500;
}
.group {
  margin-top: 50px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
}
.d-flexjustify-content-between {
  font-family: Prompt;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #5b5b5b;
}
.button {
  font-family: Prompt;
  width: 210px;
  height: 50px;
  left: 875px;
  top: 649px;
  color: #fff;
  background-color: #f49300;
  border-color: transparent;
  border-radius: 6px;
}
.form-check {
  font-family: Prompt;
  color: #848484;
  font-size: 14px;
}
.Forget-p {
  font-family: Prompt;
  color: #5b5b5b;
  font-size: 14px;
}
.container {
  padding: 3%;
  font-family: Prompt;
}
.font-weight-lightbold {
  color: #848484;
}
.image {
  vertical-align: middle;
  border-style: none;
  margin-right: 46px;
}
.face {
  background: #3b5998;
}
</style>
