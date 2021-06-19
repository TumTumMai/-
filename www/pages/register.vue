<template>
  <div class="hedaer">
    <navbar></navbar>
    <div class="contain_flex">
      <div style="width: 50%; height: 100%; margin-top: -50px">
        <div class="textregis">
          <h1>Register</h1>
        </div>
        <div class="textshop">
          <img
            src="~/assets/image/vector.png"
            width="26"
            height="25"
            style="margin-right: 10px"
          />
          Online Shopping
        </div>
        <div class="textlive">
          <img
            src="~/assets/image/bx_bx-chat.png"
            width="26"
            height="25"
            style="margin-right: 10px"
          />
          Live Chat
        </div>
        <div class="textmulti">
          <img
            src="~/assets/image/vector(1).png"
            width="26"
            height="25"
            style="margin-right: 10px"
          />
          Multi Angle Camera
        </div>
      </div>
      <div style="width: 50%; height: 100%; border-radius: 10px">
        <div class="newinput">
          <input
            class="inputnoneoutline"
            type="text"
            placeholder="ชื่อ"
            v-model="form.username"
          />
          <div class="registeralert">
            <div v-if="validate.username">{{ validate.username }}</div>
          </div>
          <input
            class="inputnoneoutline"
            type="text"
            placeholder="นามสกุล"
            v-model="form.lastname"
          />
          <input
            class="inputnoneoutline"
            placeholder="วัน/เดือน/ปีเกิด"
            type="text"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            id="date"
            v-model="form.birthday"
          />
          <div class="registeralert">
            <div v-if="validate.birthdaye">{{ validate.birthday }}</div>
          </div>

          <input
            class="inputnoneoutline"
            type="email"
            placeholder="อีเมล"
            v-model="form.email"
          />
          <div class="registeralert">
            <div v-if="validate.email">{{ validate.email }}</div>
          </div>

          <input
            class="inputnoneoutline"
            type="password"
            placeholder="รหัสผ่าน"
            v-model="form.password"
          />

          <input
            class="inputnoneoutline"
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            v-model="form.confrimpassword"
          />

          <div class="confirm" @click="register()">สมัคร</div>

          <div class="haveaccount">
            <nuxt-link class="login pointer" :to="`/login`">
              <p class="font-weight-bold registertext">
                เข้าสู่ระบบ มีบัญชีแล้ว?
              </p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <b-modal ref="modal" hide-footer hide-header>
      <div class="d-block text-center">
        <h3>register completed</h3>
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
        username: "",
        lastname: "",
        email: "",
        password: "",
        confrimpassword: "",
        birthday: ""
      },
      validate: {}
    };
  },

  components: {
    navbar
  },
  methods: {
    login() {
      console.log(this.form.name);
      if (this.form.password !== this.form.confirmpassword) {
        alert("ไปสู่หน้า Login");
        {
          {
          }
        }
        return;
      }
    },
    register(evt) {
      console.log(this.form);
      this.$axios
        .post(process.env.baseUrl + "/api/auth/signup", this.form)
        .then(res => {
          console.log(res.data);
          this.$refs["modal"].show();
        })
        .catch(err => {
          console.log(err.response.data);
          err.response.data.forEach(item => {
            this.$set(this.validate, item.key, item.message);
          });
          console.log("valid", this.validate);
        });
    },
    clickedOK() {
      this.$refs["modal"].hide();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.hedaer {
  font-size: 25px;
  background-image: url("~assets/image/BG.png");
  height: 100vh;
  background-size: cover;
}
.info {
  border: 1px solid #fff;
}
.registertext {
  color: #070707;
}
.haveaccount {
  margin-left: 80px;
  color: #070707;
}
.nav_bg {
  background-color: #fff;
}
.contain_flex {
  display: flex;
}
.newinput {
  background-color: white;
  padding: 50px;
  margin: 76px 12rem 7px 45px;
  margin-left: 25px;
  margin-right: 10rem;
  border-radius: 10px;
  width: 410px;
}
.confirm {
  background: #f49300;
  text-align: center;
  margin-left: 70px;
  margin-right: 70px;
  font-size: 1rem;
  width: 150px;
  height: 37px;
  padding: 7px;
  border-radius: 5px;
  color: #ffff;
}
.inputnoneoutline {
  outline: none;
  border: 1px;
  margin-bottom: 40px;
  font-size: 15px;
  border-bottom: 1px solid #d0d0d0 !important;
  width: 100%;
}
.haveaccount {
  display: flex;
  margin-top: 10px;
  color: #848484;
  font-size: 14px;
}
.me {
  margin-right: 7px;
}
.textregis {
  margin-top: 230px;
  text-align: center;
  color: #ffff;
  font-size: 48px;
  margin-right: 75px;
}
.textshop {
  text-align: center;
  font-size: 20px;
  color: #ffff;
  margin-right: 30px;
  margin-top: 40px;
  font-weight: 600;
}
.textlive {
  text-align: center;
  font-size: 20px;
  color: #ffff;
  margin-right: 100px;
  margin-top: 30px;
  font-weight: 600;
}
.textmulti {
  text-align: center;
  font-size: 20px;
  color: #ffff;
  // margin-right:50px;
  margin-top: 27px;
  font-weight: 600;
}
.registeralert {
  font-size: 12px;
  color: red;
}
</style>
