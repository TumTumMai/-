<template>
  <div class="container" style="margin-bottom: 10%;">
    <div
      class="row"
      style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -40px;margin-top: 20px;margin-bottom: 80%;"
    >
      <div class="col-md-6 texttop">
        <div>รถเข็นของคุณ</div>
        <div v-for="(item, index) in items" :key="index" class="row imgitem">
          <div class="col-md-6 item" style="margin-right: 0px;">
            <img
              :src="getImageURL(item.item.image)"
              style="height: 100%;;width: 80%;"
            />
          </div>
          <div class="col-md-6 lowitem">
            <div class="mixbintext d-flex justify-content-between">
              <div>{{ item.item.ItemName }}</div>
              <div class="imgnbin ">
                <img src="~/assets/image/binjoy.png" />
              </div>
            </div>

            <div
              class="textlowitem"
              style="margin-top: 30px; font-size: 14px;color: #9E9E9E;"
            >
              ตัวเลือกสินค้า
            </div>
            <div class="countpoint">
              <div class="onthepoint" style="display: flex;">
                <b-form-spinbutton
                  id="sb-wrap"
                  wrap
                  min="1"
                  max="99"
                  placeholder="--"
                  v-model="item.total"
                  style="width: 45%;height: 50%;"
                ></b-form-spinbutton>
                <div style="margin-left: 75px;">
                  {{ sumPrice(item.total, item.item.price) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 ">
        <div class="row imgitemcover" style="margin-left: 75px;">
          <div class="col-md-6 item" style="margin-right: 0px;">
            <div class="itemlist">สินค้าทั่งหมด</div>
            <img src="~/assets/image/longbarg.png" style="width: 100%;" />
            <div class="itemlist">ยอดสั่งซื้อ</div>
            <div class="itemlist">ค่าส่ง</div>
            <div class="itemlist">ราคารวม</div>
          </div>
          <div class="col-md-6 lowitem" style="margin-left: -45px;">
            <div class="totaltext">1รายการ</div>
            <img
              src="~/assets/image/longbarg.png"
              style="width: 50%;
"
            />
            <div class="totaltext">฿{{ allPrice }}</div>
            <div class="totaltext">฿{{ deliveryCost }}</div>
            <div class="totaltext">฿{{ lastPrice }}</div>
          </div>
        </div>
        <nuxt-link to="/address">
          <button
            type="button"
            class="btn btn-warning"
            style="margin-left: 75%;margin-top: 15%;width: 25%;height: 10%;display: flex;color: #eff2f6;background-color: #F36523;border-color: #F36523;"
          >
            สั่งซื้อสินค้า
            <img
              src="~/assets/image/tellme.png"
              style="margin-left: 10px;
    margin-top: 5px;margin-right: 0px;"
            />
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "~/components/navbar_white";
export default {
  name: "MyCart",
  layout: "default-nonavbar",

  data() {
    return {
      deliveryCost: 60,
      items: []
    };
  },
  mounted() {
    this.getitem();
  },
  methods: {
    sumPrice(qty, price) {
      return price * qty;
    },
    getImageURL(name) {
      return `${process.env.baseUrl}/uploads/${name}`;
    },
    async getitem() {
      const cart = this.$cookies.get("cart");
      const items = cart.items.map(item => {
        return `'${item.id}'`;
      });
      console.log(items);
      const getitemcart = await this.$axios.$get(
        `${process.env.baseUrl}/api/item?item_basket="${items}"`
      );
      console.log(getitemcart);
      const newCart = cart.items.map(item => {
        let newItem = {};
        let total = 0;
        getitemcart.forEach(item2 => {
          if (item.id === item2._id) {
            newItem = item2;
            total = item.total;
          }
        });
        return {
          item: newItem,
          total: total
        };
      });
      console.log("new cart", newCart);
      this.items = newCart;
      this.$store.dispatch("cart/setCart", newCart);
    }
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
.imgnbin {
  width: 30px;
  height: 30pxw;
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
