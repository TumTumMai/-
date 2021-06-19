<template>
  <div class="headder">
    <img
      src="~/assets/image/imgshowindex.png"
      style="width: 100%;margin: 0px;position: absolute;"
    />
    <div class="head">
      <!-- <div class="container toptop"> -->
      <div class="data" style="width: 1300px;margin: auto;">
        <div class="row bg-grey lv2">
          <div class="col-4"></div>
          <div class="col-8">
            <div class="featuresrg2">Webcasting Exhibition Platform</div>
            <div class="downrg2">
              รวม Liveร้าน Liveบูธ Liveโชว์รูมใน Exhibition ต่างๆ
            </div>

            <button class="button topbar">View More</button>
          </div>

          <div class="bt1"></div>
        </div>
      </div>
      <!-- </div> -->
    </div>
    <!-- <div class="container"> -->
    <div class="data" style="width: 1300px;margin: auto;">
      <div class="row">
        <div class="col">
          <p class="font-weight-bold toplive">Today's events</p>
        </div>

        <div class="col2 topview">
          <a href="#" v-scroll-to="'#undercass'" class="pointer viewtop"
            >View All</a
          >
        </div>
      </div>
      <br />

      <div class="row">
        <div
          v-for="item in livedata"
          :key="item.id"
          class="col-12 col-sm-3 topevent"
        >
          <img
            :src="`${imageURL}/${item.image}`"
            style="width: 268px;height: 171px;"
          />
          <div
            style="display: flex; color: #F36523;    font-size: 13px;
    margin-top: 10px;"
          >
            <div class="data">
              {{ convertDate(item.Event_Start) }}
              {{ converttime(item.Event_Start) }}
            </div>
            <div style="    margin-left: 10px;">-</div>

            <div class="time" style="margin-left: 10px;">
              {{ convertDate(item.Event_End) }}
              {{ converttime(item.Event_End) }}
            </div>
          </div>

          <nuxt-link class="eventpoint" :to="`/event/${item._id}`">
            <div
              class="d-flex justify-content-between luckevent"
              style="font-size:16px"
            >
              {{ item.BoothName }}
            </div>
          </nuxt-link>
          <div class="lowevent_t">
            <img
              src="~/assets/image/loc.png"
              style="position: static"
              class="imgtopevent"
            />
            <p class="textevent">
              {{ item.Location }}
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div class="row">
        <div class="col" style="margin:0 px">
          <p class="font-weight-bold">Categories</p>
        </div>

        <div class="col2 viewall">
          <p @click="categories" class="pointer">View All</p>
        </div>
        <div class="Categories">
          <div class="row">
            <div
              v-for="item in Categoriesdata"
              :key="item.id"
              class="col-12 col-sm-3"
            >
              <div class="sample_img">
                <nuxt-link
                  class="eventpoint"
                  :to="`/categories/${item.NameCategorise}/${item._id}`"
                >
                  <div class="test" style="font-size:16px width: 100%;">
                    {{ item.NameCategorise }}
                  </div>
                  <img
                    :src="`${imageURL}/${item.image}`"
                    style="  width: 100%;"
                  />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="topminibar">
        Live Streaming
        <br />

        <button type="button" class="btn btn-warning bminibar">
          <div class="joinus">Join Us</div>
        </button>
      </div>

      <img
        class="minibar img-fluid"
        src="~/assets/image/mini banner.png"
        style="margin-bottom: 60px;"
      />
    </div>
    <div class="data " id="undercass" style="width: 1300px;margin: auto;">
      <!-- <div class="container under" id="undercass"> -->
      <div class="row">
        <div class="col">
          <p class="font-weight-bold">Upcoming Event</p>
        </div>

        <div class="col2 viewall">
          <p class="pointer register">View All</p>
        </div>
      </div>
      <div class="row">
        <div
          v-for="item in incommingEvents"
          :key="item.id"
          class="col-12 col-sm-3 topevent"
        >
          <img
            :src="`${imageURL}/${item.image}`"
            style="width: 268px;height: 171px;"
          />
          <div class="row-12">
            <div
              class="col-6 ko"
              style="    position: absolute;
               margin-left: -15px;   color: orange;"
            >
              {{ convertDate(item.Event_Start) }}
            </div>
            <div
              class="col-6 ok"
              style="  margin-left: 213px;    color: orange;
"
            >
              {{ converttime(item.Event_Start) }}
            </div>
          </div>
          <nuxt-link class="eventpoint" :to="`/event/${item._id}`">
            <div
              class="d-flex justify-content-between luckevent"
              style="margin-bottom: -5px;
    margin-top: 1px;"
            >
              {{ item.BoothName }}
            </div>
          </nuxt-link>
          <div class="lowevent_t">
            <img
              src="~/assets/image/loc.png"
              style="position: static"
              class="imgtopevent"
            />
            <p class="textevent">
              {{ item.Location }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="data" style="width: 1300px;margin: auto;">
      <!-- <div class="container features-box"> -->
      <div class="row bg-grey" style="margin-bottom: 0%;">
        <div class="col-4">
          <img src="~/assets/image/Livestreaming.png" class="img0" />
        </div>
        <div class="col-8">
          <div class="features">Features</div>
          <div class="downfeatures">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dapibus velit id quam lobortis, a mollis metus vehicula. Donec lorem
            libero, egestas efficitur justo rhoncus, maximus tincidunt tellus.
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-8">
          <div class="row" style="margin-bottom: 50px;">
            <div class="col-4 shoppingbag">
              <img src="~/assets/image/shopping-bag.png" class="img1" />

              <div class="shopping">Online Shopping</div>
              <div class="downshopping">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div class="col-4 chater">
              <img src="~/assets/image/bx-chat.png" class="img2" />

              <div class="shopping">Live Chat</div>
              <div class="downchater">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div class="col-4 multi">
              <img src="~/assets/image/Vector-bx.png" class="img3" />

              <div class="shopping">Live Chat</div>
              <div class="downmulti">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  layout: "default-nonavbar",
  data() {
    return {
      livedata: [],

      Categoriesdata: [],
      incommingEvents: []
    };
  },
  computed: {
    imageURL() {
      return `${process.env.baseUrl}/uploads`;
    }
  },
  mounted() {
    this.getCategories();
    console.log(this.Categoriesdata);
    this.getimageTodays();
    console.log(this.imageTodays);
  },
  methods: {
    onevent() {
      console.log("");
    },
    categories(evt) {
      console.log(evt);
      {
        this.$router.push({
          path: "/Categories"
        });
      }
    },
    getData() {
      this.$axios
        .get("/api/image")
        .then(res => {
          console.log(res.data);

          for (let index = 0; index < 4; index++) {
            this.livedata.push(res.data.itemsList[index]);
          }
        })
        .catch(err => {});
    },
    getCategories() {
      this.$axios
        .get(process.env.baseUrl + "/categories")
        .then(res => {
          const cats = res.data.itemsList;

          for (let index = 0; index < 4; index++) {
            this.Categoriesdata.push(cats[index]);
          }
        })
        .catch(err => {});
    },
    getimageTodays() {
      this.$axios
        .get(process.env.baseUrl + "/imageToday")
        .then(res => {
          console.log(res);

          const cats = res.data.itemsList;
          this.livedata = res.data.EventToday;
          this.incommingEvents = res.data.incommingEvents;

          for (let index = 0; index => 1; index++) {
            this.imageTodays.push(cats[index]);
          }
        })
        .catch(err => {});
    },
    convertDate(date) {
      const newDate = new Date(date);
      const year = newDate.getFullYear();
      const month = newDate.getMonth();
      const d = newDate.getDate();
      const h = newDate.getHours();
      let m = newDate.getMinutes();
      m = m < 10 ? `0${m}` : m;
      return `${d}.${month + 1}.${year}  `;
    },
    converttime(date) {
      const newDate = new Date(date);
      const year = newDate.getFullYear();
      const month = newDate.getMonth();
      const d = newDate.getDate();
      const h = newDate.getHours();
      let m = newDate.getMinutes();
      m = m < 10 ? `0${m}` : m;
      return ` ${h + 1}:${m}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.head {
  padding-right: 2px;
  font-family: Prompt;
  text-align: right;
  background: #dfdfdf;
}
.live {
  font-size: 40px;
}
.row {
  margin: 12px;
}
.col {
  font-size: 32px;
}

.col2 {
  margin-right: 70px;
}
.Categories {
  padding-left: 0px;
}
.container {
  max-width: 1400px;
}
.minibar {
  width: 100%;
  margin: 0px;
  margin-top: 60px;
}
.features {
  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  text-align: center;

  color: #000000;
}
.joinus {
  margin-left: 30px;
  font-family: Prompt;
  font-weight: 500;
  font-size: 16px;
  margin-top: -1px;
}
.downfeatures {
  text-align: center;
  font-size: 16px;
  color: #8b8989;
  max-width: 550px;
  margin: auto;
}
.toplive {
  margin-top: 61px;
}
.bg-grey {
  margin: 0px;
  padding: 53px 99px 66px;
  background: #f8f8f8;
  margin-bottom: 10%;
}
.features-box {
  padding: 100px 0px;
}
.shoppingbag {
  text-align: center;
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: 500;
}

.downshopping {
  font-family: Prompt;
  font-size: 16px;
  color: #8b8989;
  text-align: center;
}
.chater {
  text-align: center;
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: 500;
}
.downchater {
  font-family: Prompt;
  font-size: 16px;
  color: #8b8989;
  text-align: center;
}
.multi {
  text-align: center;
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: 500;
}
.viewall {
  color: #9e9e9e;
}
.downmulti {
  font-family: Prompt;
  font-size: 16px;
  color: #8b8989;
  text-align: center;
}
.img0 {
  position: absolute;
  width: 84%;
  margin-top: 1px;
}
.img1 {
  margin-right: 0px;
}
.imgsize {
  padding-right: 0px;
  padding-left: 0px;
}
.img2 {
  margin-right: 0px;
}
.img3 {
  margin-right: 0px;
  height: 52px;
}
.backdrop {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.sample_img {
  position: relative;
}
.test {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.5;
  background: #000;
  margin-right: 12px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.test2 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.5;
  background: #000;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.imgtopevent {
  margin-right: 10px;
}

.test3 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.5;
  background: #000;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.pointer {
  cursor: pointer;
}
.test4 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.5;
  background: #000;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.under {
  margin-top: 120px;
}
.featuresrg2 {
  font-family: Prompt;
  font-weight: 600;
  font-size: 40px;
  color: #ffff;
}
.downrg2 {
  font-family: Prompt;
  font-size: 16px;
  color: #ffffff;
}
.toptop {
  background: #dfdfdf;
}
.lv2 {
  background: #dfdfdf;
}
.topbar {
  color: #ffff;
  width: 150px;
  height: 40px;
  font-family: Prompt;
  border-radius: 30px;
  margin-top: 37px;
  background: linear-gradient(90deg, #f3550d 0%, #f3550d 100%);
  border-color: #fe4f00;
}
.imgupcoming {
  vertical-align: middle;
  border-style: none;
  margin-right: 10px;
}
.lowlow {
  font-size: 12px;
  font-family: Prompt;
  font-style: normal;
  color: #f36523;
  font-weight: 600;
}
.underlowlow {
  text-align: center;
}
.topthree {
  font-family: Prompt;
  font-weight: 450;
  margin-top: -1px;
}
.topevent {
  font-family: Prompt;
  font-size: 16px;
  font-style: normal;
}
.luckevent {
  margin-top: 10px;
  font-family: Prompt;
  color: black;
  height: 35px;
  font-weight: 450;
}
.topview {
  color: #9e9e9e;
  font-family: Prompt;
  margin-top: 61px;
}
.topminibar {
  position: absolute;
  margin: 80px 60px 60px 100px;
  font-family: Prompt;
  font-weight: 450;
  font-size: 34px;
  color: #ffffff;
}
.bminibar {
  width: 140px;
  height: 40px;
  border-radius: 30px;
  margin-top: 20px;

  background: #ffffff;

  line-height: 30px;
  display: flex;

  border-color: #ffffff;

  color: #f36523;
}
.viewtop {
  color: gray;
}
.lowevent_t {
  display: flex;
  margin-left: 10px;
  margin-bottom: 14px;
}
.textevent {
  font-size: 10px;
  margin-bottom: 0px;
  color: #a07b7b;
}
.textupcomimgevent {
  font-size: 11px;
  margin-bottom: 0px;
  color: #c4c4c4;
}
.lowupcomimgeve {
  display: flex;
}
</style>
