<template>
  <div class="container" style="margin-bottom: 30%">
    <div
      class="row"
      style="
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -40px;
        margin-top: 20px;
      "
    >
      <div class="col-md-6 texttop">
        <div>ที่อยู่ของคุณ</div>
        <div class="row imgitem">
          <div style="width: 100%; height: 100%; border-radius: 10px">
            <div class="newinput">
              <div class="popupline" style="display: flex">
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
                  style="margin-left: 50px"
                />
              </div>
              <input
                class="inputnoneoutline"
                placeholder="เบอร์โทรศัพท์"
                type="text"
                v-model="form.phonenumber"
              />
              <div class="registeralert">
                <div v-if="validate.phonenumber">
                  {{ validate.phonenumber }}
                </div>
              </div>

              <input
                class="inputnoneoutline"
                type="text"
                placeholder="ชื่ออาคาร"
                v-model="form.buildingname"
              />
              <div class="registeralert">
                <div v-if="validate.buildingname">
                  {{ validate.buildingname }}
                </div>
              </div>

              <input
                class="inputnoneoutline"
                type="text"
                placeholder="รายละเอียดที่อยู่"
                v-model="form.addressdetails"
              />
              <div id="top" class="popupline" style="display: flex">
                <!-- <input
                  class="inputnoneoutline"
                  type="text"
                  placeholder="กรุณาเลือกจังหวัด"
                  v-if="!isProvinceEmpty"
                  v-model="form.province"
                /> -->
                <addressinput-province
                  id="province"
                  :store="store"
                  v-model="form.province"
                  placeholder="กรุณาเลือกจังหวัด"
                  class=""
                ></addressinput-province>
                <div class="middlebox"></div>
                <!-- <div class="registeralert">
                  <div v-if="validate.province">{{ validate.province }}</div>
                </div> -->
                <!-- <input
                  class="inputnoneoutline"
                  type="text"
                  placeholder="เขต/อำเภอ"
                  v-model="form.district"
                  style="margin-left: 50px"
                /> -->
                <addressinput-district
                  id="district"
                  :store="store"
                  v-model="form.district"
                  placeholder="เขต/อำเภอ"
                  style="margin-left: 0px"
                ></addressinput-district>
              </div>
              <div id="subcode" class="popupline" style="display: flex">
                <!-- <input
                  class="inputnoneoutline"
                  type="text"
                  placeholder="แขวง/ตำบล"
                  v-model="form.subdistrict"
                />
                <div class="registeralert">
                  <div v-if="validate.subdistrict">
                    {{ validate.subdistrict }}
                  </div>
                </div> -->
                <addressinput-subdistrict
                  :store="store"
                  v-model="form.subdistrict"
                  placeholder="แขวง/ตำบล"
                >
                </addressinput-subdistrict>
                <div class="middlebox"></div>
                <!-- <input
                  class="inputnoneoutline"
                  type="text"
                  placeholder="รหัสไปรษณีย์"
                  v-model="form.postalcode"
                  style="margin-left: 50px"
                /> -->
                <addressinput-zipcode
                  :store="store"
                  v-model="form.postalcode"
                  placeholder="รหัสไปรษณีย์"
                ></addressinput-zipcode>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row imgitemcover" style="margin-left: 75px">
          <div class="col-md-6 item" style="margin-right: 0px">
            <div class="itemlist">สินค้าทั่งหมด</div>
            <div class="longgay">
              <img src="~/assets/image/longline.png" style="width: 95%;" />
            </div>
            <div class="itemlist">ยอดสั่งซื้อ</div>
            <div class="itemlist">ค่าส่ง</div>
            <div class="itemlist">ราคารวม</div>
          </div>
          <div class="col-md-6 lowitem" style="margin-left: -45px">
            <div class="totaltext">1รายการ</div>
            <div class="longgay">
              <img src="~/assets/image/longline.png" style="width: 50%;" />
            </div>
            <div class="totaltext">฿{{ allPrice }}</div>
            <div class="totaltext">฿60</div>
            <div class="totaltext">฿{{ lastPrice }}</div>
          </div>
        </div>
        <nuxt-link to="/checkout">
          <button
            type="button"
            class="btn btn-warning"
            style="
            margin-left: 75%;
            margin-top: 15%;
            width: 25%;
            height: 10%;
            display: flex;
            color: #eff2f6;
            background-color: #f36523;
            border-color: #f36523;
          "
          >
            สั่งซื้อสินค้า
            <img
              src="~/assets/image/tellme.png"
              style="margin-left: 10px; margin-top: 5px; margin-right: 0px"
            />
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "~/components/navbar_white";
import { defaultStore } from "vue-thailand-address";
export default {
  layout: "default-nonavbar",
  data() {
    return {
      form: {
        username: "",
        lastname: "",
        buildingname: "",
        addressdetails: "",
        phonenumber: "",
        postalcode: "",
        subdistrict: "",
        district: "",
        province: ""
      },
      validate: {},
      store: defaultStore,
      deliveryCost: 60
    };
  },
  computed: {
    allPrice() {
      let price = 0;
      this.items.forEach(item => {
        const ttl = item.total;
        const pp = item.item.price;
        price += this.sumPrice(ttl, pp);
      });
      return price;
    },
    lastPrice() {
      return this.allPrice + this.deliveryCost;
    },
    items() {
      return this.$store.getters["cart/getCart"];
    }
  },
  methods: {
    sumPrice(qty, price) {
      return price * qty;
    }
  }
};
</script>
<style scoped>
.texttop {
  width: 149px;
  height: 36px;
  left: 15px;
  font-family: "Prompt";
  font-size: 24px;
  font-weight: 500;
  top: 10px;
}
.imgitem {
  margin-top: 100px;
}
.inputnoneoutline {
  outline: none;
  border: 1px;
  margin-bottom: 40px;
  font-size: 15px;
  border-bottom: 1px solid #d0d0d0 !important;
  width: 100%;
}
.itemlist {
  font-family: Prompt;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
}
.lowitem {
  font-family: Prompt;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
}
.imgitemcover {
  margin-top: 26%;
}
.totaltext {
  font-family: Prompt;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
}
</style>
<style>
.th-address-label > .label-text {
  display: none;
}
.th-address,
.th-address-label,
.th-address-container,
.th-address-input {
  width: 100%;
}
.th-address-container > ul {
  font-size: 12px;
}
.middlebox {
  min-width: 50px;
  height: auto;
}

#district .th-address-input {
  margin-left: 50px;
}

#top input {
  outline: none;
  border: 1px;
  margin-bottom: 40px;
  font-size: 15px;
  border-bottom: 1px solid #d0d0d0 !important;
  width: 100%;
}
#subcode input {
  outline: none;
  border: 1px;
  margin-bottom: 40px;
  font-size: 15px;
  border-bottom: 1px solid #d0d0d0 !important;
  width: 100%;
}
</style>
