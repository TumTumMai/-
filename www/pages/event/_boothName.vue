<template>
  <div style="background-color:#f8f8f8;">
    <div id="hhhh"></div>
    <div class="hedaer">
      <div>
        <nuxt-link to="/mycart"
          ><div class="container" style="text-align: end;">
            <img src="~/assets/image/mycart.png" /></div
        ></nuxt-link>

        <div class="container livestream container">
          <div>
            <h1 class="topevent" style="padding-top:30px">Event</h1>
          </div>

          <div class="head" style="margin-bottom: 0px;">
            <div>
              <nuxt-link to="/livestream">
                <img
                  class="container videolive"
                  src="~/assets/image/playgay.png"
                  width="75%"
                  height="75%"
                />
              </nuxt-link>
              <h1 class="allbooth">All Booth</h1>

              <div class="container">
                <div class="row booth" style="margin-bottom: 0px;">
                  <div
                    v-for="item in miniboothevent"
                    :key="item.id"
                    :class="index + 1 > 4 ? 'boothline2 col-3' : 'col-3'"
                    style="margin-bottom: 25px;"
                  >
                    <nuxt-link
                      class="description"
                      style="font-family: Prompt; margin-bottom 20 px"
                      :to="`/event/booth/${item._id}`"
                    >
                      <img
                        :src="`${imageURL}/${item.image}`"
                        class="img-fluid px-1 "
                        style="width: 100%;height: 145px;"
                      />
                      {{ item.MiniBoothName }}
                      <br />
                      <div class="video_des">{{ item.Location }}</div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <footer class="footer">
      <img src="~/assets/image/Footer.png" width="100%" />
    </footer> -->
  </div>
</template>
<script>
// import navbar from "~/components/navbar_white";
export default {
  layout: "default-nonavbar",
  data() {
    return {
      user: this.$store.state.auth.auth,
      isAuth: this.$store.state.auth.isAuth,
      miniboothevent: [
        // {
        //   id: 1,
        //   name: "Booth Name",
        //   des: "DescriptionDescriptionDescription",
        //   img: require("~/assets/image/show1.png")
        // }
      ]
    };
  },
  // components: {
  //   navbar
  // },
  computed: {
    miniboothname() {
      return this.$route.params.boothName;
    },
    // miniboothid() {
    //   return this.$route.params.id;
    // },
    imageURL() {
      return `${process.env.baseUrl}/uploads`;
    }
  },
  mounted() {
    this.getminibooth();
  },
  methods: {
    async getminibooth() {
      const cats = await this.$axios
        .get(`${process.env.baseUrl}/image/${this.miniboothname}`)
        .then(res => res.data.mini);
      this.miniboothevent = cats;

      for (let index = 0; index => 1; index++) {
        this.miniboothname.push(cats[index]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.livestream {
  text-align: center;
  // width: 1200px;
  margin: auto;
}

.head {
  font-size: 20px;
  // margin-top: 25px;
  margin-bottom: 20px;
  margin-right: 0px;
  background-color: #f8f8f8;
}
.allbooth {
  margin-right: 925px;
  font-size: 32px;
  margin-top: 45px;
  margin-bottom: 10px;
}
.booth img {
  margin: 0;
}
.footer img {
  margin: 0;
}
.row {
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 100px;
}
.livestream {
  background-color: #f8f8f8;
}
.videolive {
  margin: auto;
  width: 1080px;
  height: 750px;
}
.description {
  color: #000000 !important;
  margin-top: 10px;
  font-size: 14px;
}
.boothline2 {
  margin-top: 30px;
}
.video_des {
  font-family: Prompt;
  font-size: 10px;
  color: #c4c4c4 !important;
  word-wrap: break-word;
}
</style>
