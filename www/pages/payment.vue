<template>
  <div class="container" style="margin-bottom: 10%;">
    <div class="statusimg">
      <img src="~/assets/image/tureo.png" />
      <img src="~/assets/image/oline.png" />
      <img src="~/assets/image/opay.png" />
      <img src="~/assets/image/gline.png" />
      <img src="~/assets/image/truegay.png" />
    </div>
    <div
      class="row"
      style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -40px;margin-top: 20px;"
    >
      <div class="col-md-6 texttop">
        <div>ช่องทางการชำระเงิน</div>
        <div class="row imgitem">
          <div class="col-md-6 teitem" style="margin-right: 0px;">
            <div style="margin-bottom: 20px;">เลือกช่องทางการชำระเงิน</div>

            <div
              class="form-check"
              style="font-size: 15px;
    margin-top: 50px;"
            >
              <input
                class="form-check-input position-static"
                type="checkbox"
                id="blankCheckbox"
                value="option1"
                aria-label="re"
              />
              โอนผ่านบัญชีธนาคาร
            </div>
          </div>
          <div>
            <img src="~/assets/image/longline.png" style="width: 50%;" />
          </div>
          <div class="form-check" style="margin-left: 15px;">
            <input
              class="form-check-input position-static"
              type="checkbox"
              id="blankCheckbox"
              value="option1"
              aria-label="re"
            />
            บัตรเดบิต / เครดิต
          </div>
        </div>
      </div>
      <div class="col-md-6 ">
        <div class="row imgitemcover" style="margin-left: 75px;">
          <div class="col-md-6 topitem" style="margin-right: 0px;">
            <div class="itemlist">สินค้าทั่งหมด</div>
            <div class="longgay">
              <img src="~/assets/image/longline.png" style="width: 95%;" />
            </div>
            <div class="itemlist">ยอดสั่งซื้อ</div>
            <div class="itemlist">ค่าส่ง</div>
            <div class="itemlist">ราคารวม</div>
          </div>
          <div class="col-md-6 lowitem" style="margin-left: -45px;">
            <div class="totaltext">1รายการ</div>
            <div class="longgay">
              <img src="~/assets/image/longline.png" style="width: 50%;" />
            </div>
            <div class="totaltext">฿2,700.00</div>
            <div class="totaltext">ฟรีค่าส่ง</div>
            <div class="totaltext">฿2,700.00</div>
          </div>
        </div>
        <nuxt-link to="/confirmpayment">
          <button
            type="button"
            class="btn btn-warning"
            style="margin-left: 75%;margin-top: 15%;width: 24%;height: 7%;display: flex;color: #eff2f6;background-color: #F36523;border-color: #F36523;"
          >
            ชำระสินค้า
            <img
              src="~/assets/image/tellme.png"
              style="margin-left: 10px; margin-top: 5px;margin-right: 0px;"
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
  layout: "default-nonavbar"
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
.teitem {
  margin-top: 70px;
  font-family: "Prompt";
  font-size: 24px;
}
.imgitem {
  margin-top: 100px;
  display: flow-root;
  font-weight: 600;
  font-size: 14px;
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
  margin-top: 70px;
}
.topitem {
  margin-top: 70px;
}
.statusimg {
  margin-top: 70px;
  position: absolute;
  margin-left: 130px;
}
.lowtext {
  margin-left: 15px;
  margin-top: 30px;
  color: #f36523;
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
