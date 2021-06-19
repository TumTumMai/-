<template>
  <div style="background-color:#f8f8f8;">
    <div class="hedaer" style="margin-top: -40px;">
      <div>
        <nuxt-link to="/mycart"
          ><div class=" container cart" style="text-align: end;">
            <img
              src="~/assets/image/mycart.png"
              style="    margin-top: 39px;
    "
            /></div
        ></nuxt-link>

        <div class="container livestream">
          <div class="main">
            <div class="image" style="height: 100%">
              <img src="~/assets/image/playgay.png" width="100%" />
              <div class="cover">
                <div class="textdate">
                  18 August 2020
                  <div class="texttime">11:00 - 20:00</div>
                  <div class="live_name">
                    lorem ipsum dolor sit amet consectetur
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row" style="margin-right: -50px;">
        <div class="col-12 col-sm-6 coltest1" style="margin-top:30px;">
          <div class="textemployee">
            {{ brochuredata[0].BrochureName }}
            <div class="text">
              {{ brochuredata[0].description }}
              <div class="img1" style="margin-top:60px">
                <img
                  src="~/assets/image/boxchat.png"
                  style="width:29px; margin-right:25px;"
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div class="img2">
                <img src="~/assets/image/tv.png" style="margin-right:25px;" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div class="img3">
                <img
                  src="~/assets/image/smile.png"
                  style="margin-right:25px;"
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>

              <div class="row" style="margin-top: 65px;">
                <div class="col-12 col-sm-6 photoleft">
                  <nuxt-link to="/chat_with_sales">
                    <img
                      class="chatwithseal"
                      src="~/assets/image/playmini.png"
                    />
                  </nuxt-link>
                </div>
                <div class="col-12 col-sm-6 photoright">
                  <nuxt-link to="/chat_with_sales">
                    <img
                      class="chatwithseal"
                      src="~/assets/image/playmini.png"
                    />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 coltest2" style="margin-top:30px">
          <div>
            <img class="phbooth1" src="~/assets/image/playmid.png" />
          </div>
          <div>
            <img class="phbooth2" src="~/assets/image/playmid.png" />
          </div>
        </div>
        <div class="container onlineshop">
          <div class="row">
            <div class="col-12 col-sm-6 online">Online Shopping</div>
            <div class="col-12 col-sm-6 viewall">View All</div>
          </div>
          <div class="row gaysquare">
            <div
              v-for="(item, index) in itemdata"
              :key="index"
              class="col-12 col-sm-3"
              style="margin-bottom:80px"
            >
              <img
                class="photogay"
                :src="`${imageURL}/${item.image}`"
                style="    width: 100%;
               height: 60%;"
              />

              <div class="fontinsidegay">
                {{ item.ItemName }}
              </div>
              <div class="fontundergay">
                {{ item.description }}
              </div>
              <div class="monery">฿{{ item.price }}</div>
              <div class="eventpoint w-100 d-flex justify-content-center">
                <button
                  type="button"
                  class="btn btn-primary btn-lg btn-block buttonbuy"
                  @click="addToCart(item._id)"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row midrow">
      <div class="col-12 col-sm-6 minibarblack">
        <div class="textminibar">Download Brochure</div>
        <div class="textmini">
          ดาวน์โหลดเอกสารและแคตตาล็อกสินค้าด้านล่าง
        </div>
        <img src="~/assets/image/barblack.png" />
      </div>
      <div class="col-12 col-sm-6 minibarblack">
        <img class="blackbar" src="~/assets/image/barblack.png" />
        <img class="blackbrod" src="~/assets/image/barblack.png" />
        <img class="itembar" src="~/assets/image/photomiddlebar.png" />
      </div>
    </div>
    <div class="container mgshop">
      <div class="row">
        <div
          v-for="(item, index) in brochuredata[0].image"
          :key="index"
          class=" mgcard"
        >
          <div class="col-12 col-sm-4 koko">
            <img
              :src="`${imageURL}/${item}`"
              style="width: 351px;height: 350px;;margin-left: 50px;"
            />
            <div class="mg1" style="width: 160%;margin-left: 85px;">
              <img
                src="~/assets/image/icondownload.png"
                style="    height: 26px;margin-right: 5px;margin-left: 50px;"
              />
              <a
                :href="getdownload(index)"
                target="_blank"
                :download="getdownload(index)"
                class=" pointer textmg"
                style="margin-right: 0px; font-size: 13px;margin-top: 5px; color: black;"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <footer class="footer">
      <img
        src="~/assets/image/Footer.png"
        width="100%"
        style="margin-top:70px;margin-right:0px;"
      />
    </footer> -->
  </div>
</template>
<script>
// import navbar from "~/components/navbar_white";
export default {
  layout: "default-nonavbar",
  data() {
    return {
      brochuredata: [
        {
          BrochureName: "londing"
        }
      ],
      itemdata: []
    };
  },
  computed: {
    brochureid() {
      return this.$route.params.BrochureName;
    },
    itemid() {
      return this.$route.params.ItemName;
    },
    imageURL() {
      return `${process.env.baseUrl}/uploads`;
    },
    brochureimage() {
      return this.brochuredata[0].image;
    }
  },
  mounted() {
    this.getbrochure();
  },
  methods: {
    async getbrochure() {
      const brochure = await this.$axios.$get(
        `${process.env.baseUrl}/minibooth/${this.brochureid}`
      );
      // .then(res => res.data.brochure);
      this.brochuredata = brochure.brochure;
      this.itemdata = brochure.item;
    },
    getdownload(index) {
      return `${process.env.baseUrl}/download/${this.brochureimage[index]}`;
    },
    addToCart(id) {
      const cart = this.$cookies.get("cart");
      if (!cart) {
        const items = [];
        const item = {
          id: id,
          total: 1
        };
        items.push(item);
        this.$cookies.set("cart", { items });
      } else {
        let isExist = false;
        let index = -1;
        cart.items.forEach((item, i) => {
          if (item.id == id) {
            isExist = true;
            index = i;
          }
        });
        if (isExist) {
          cart.items[index].total += 1;
        } else {
          const item = {
            id: id,
            total: 1
          };
          cart.items.push(item);
        }
        this.$cookies.set("cart", { items: cart.items });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  overflow: hidden;
}

.image {
  // background-color: red;
  width: 100%;
  height: 100%;
  &:hover > .cover {
    right: 0 !important;
    transition: ease-in-out 0.3s;
  }

  .cover {
    background-color: black;
    width: 36%;
    height: 100%;
    position: absolute;
    top: 0;
    right: -500px;
    transition: ease-in-out 0.3s;
    opacity: 0.8;
  }
}
.footer {
  margin-right: 0px;
}
.textdate {
  color: #ffff;
  margin-left: 20px;
  margin-top: 20px;
}
.texttime {
  margin-left: 245px;
  margin-top: -23px;
}
.live_name {
  margin-top: 55px;
}

.textemployee {
  font-size: 32px;
  font-weight: 500;
  margin-top: 50px;
}
.text {
  font-size: 16px;
  font-weight: normal;
  margin-top: 30px;
  color: #5b5b5b;
}
.img1 {
  margin-right: 15px;
  margin-top: 40px;
}
.img2 {
  margin-top: 30px;
}
.img3 {
  margin-top: 30px;
}
.pointer {
  cursor: pointer;
}
.livestream {
  margin-top: 40px;
}
.photoleft {
  width: 95%;
  margin-top: 80px;
}
.koko {
  margin-bottom: 25px;
}
.photoright {
  width: 95%;
  margin-top: 80px;
}
.phbooth1 {
  margin-bottom: 53px;
  width: 95%;
  margin-right: 0px;
}
.phbooth2 {
  width: 95%;
}
.onlineshop {
  margin-top: 100px;
  font-weight: 500;
  font-size: 32px;
}
.viewall {
  margin-left: -28px;
  width: 72px;
  height: 27px;
  font-size: 18px;
  font-weight: 500;
  color: #9e9e9e;
  // margin-top: 20px;
  text-align: right;
  margin-top: 20px;
}
.onlineshop {
  margin: 0px;
  margin-top: 6rem;
}

.photogay {
  border-radius: 5px 5px 0px 0px;
  width: 100%;
  margin-left: -16px;
}
.fontinsidegay {
  font-size: 14px;
}
.fontundergay {
  font-size: 10px;
  color: #9e9e9e;
  margin-top: 10px;
}
.monery {
  width: 241.88px;
  height: 36.73px;
  left: 134px;
  top: 2269px;
  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  margin-top: 30px;
}
.buttonbuy {
  font-family: Prompt;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  background: #f36523;
  border-radius: 5px;
  margin-left: -8px;
  width: 90%;
  border-color: #f36523;
}
.minibarblack {
  margin-top: 40px;
  margin-right: 0px;
  padding-right: 0px;
  padding-left: 0px;
}
.blackbar {
  position: absolute;
}
.itembar {
  position: absolute;
  margin-left: -49px;
}
.textminibar {
  margin-left: 190px;
  position: absolute;
  color: #ffff;
  font-family: Prompt;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  margin-top: 10px;
}
.textmini {
  position: absolute;
  color: #ffff;
  font-size: 13px;
  line-height: 19px;
  margin-left: 188px;
  margin-top: 77px;
  text-align: start;
  margin-right: 106px;
}
.midrow {
  margin-left: 0px;
  margin-right: 0px;
}
.blackbar {
  width: 100%;
  position: absolute;
}
.blackbrod {
  width: 100%;
  margin-top: 94px;
  position: absolute;
}
.mgcard {
  margin-top: 62.67px;
  margin-left: -65px;
}
.mg1 {
  display: flex;
  justify-content: center;
  margin-top: 18px;
  margin-bottom: 0px;
  margin-left: 19px;
}
.textmg {
  margin-bottom: 0px;
}
.mgphoto {
  margin-top: 25px;
}
</style>
