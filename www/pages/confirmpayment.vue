<template>
  <div class="container">
    <div
      class="toptext"
      style="font-family: Prompt;font-style: normal;font-weight: 500;font-size: 24px;line-height: 36px;margin-top: 25px;"
    >
      ยืนยันการชำระสินค้า
    </div>
    <div
      class="statusimg"
      style="margin-left: 20%;
    margin-top: 2%;"
    >
      <img src="~/assets/image/tureo.png" />
      <img src="~/assets/image/oline.png" />
      <img src="~/assets/image/tureo.png" />
      <img src="~/assets/image/oline.png" />
      <img src="~/assets/image/tureo.png" />
    </div>
    <div class="homepoint">
      <div class="toptextment">ที่อยู่ในการจัดส่ง</div>
      <div class="lowtextment">
        พรนิภา เชาว์กบินทร์ 0925385016 ลาดพร้าว 18 จอมพล เขตจตุจักร
        กรุงเทพมหานคร 10900
      </div>
    </div>
    <div class="carepoint">
      <div class="toptextment">ช่องทางการชำระเงิน</div>
      <div class="lowtextment">
        บัตรเครดิต
      </div>
    </div>
    <div class="row imgitem" style="margin-top: 100px;">
      <div class="col-md-6 item" style="margin-right: 0px;display: flex;">
        <img
          src="~/assets/image/modupgay.png"
          style="margin-right: 0px; display: flex;"
        />
        <div class="midone" style="margin-left: 25px;">
          <div
            class="mixbintext"
            style="display: flex;    font-family: Prompt;font-size: 20px;line-height: 24px;font-weight: 500;"
          >
            Lorem ipsum dolor sir amet consectetur
          </div>
          <div
            class="textlowitem"
            style="margin-top: 30px; font-size: 14px;color: #9E9E9E;"
          >
            ตัวเลือกสินค้า
          </div>
          <div style="margin-top: 36px;">1 ชิ้น</div>
        </div>
      </div>
      <div class="col-md-6 lowitem">
        <div>
          <div
            style="margin-left: 75px; margin-left: 90%;margin-top: 25%;font-family: Prompt;font-style: normal;font-weight: 500;font-size: 18px;line-height: 28px;"
          >
            2,700
          </div>
        </div>
      </div>
    </div>
    <div class="superlonggay">
      <img src="~/assets/image/superlonggay.png" style="    width: 100%;" />
    </div>
    <div
      class="row imgitemcover"
      style="margin-left: 75px;   font-family: Prompt;font-style: normal;font-weight: 500;font-size: 18px;line-height: 28px;"
    >
      <div class="col-md-6 item" style="margin-right: 0px;text-align: inherit;">
        <div
          class="itemlist"
          style="    font-size: 20px;
    font-weight: 400;"
        >
          สรุปยอดชำระเงิน
        </div>
        <div class="itemlist">ยอดสั่งซื้อ</div>
        <div class="itemlist">ค่าส่ง</div>
        <div class="itemlist">ราคารวม</div>
      </div>
      <div
        class="col-md-6 lowitem"
        style="margin-left: -45px;text-align: end;    margin-top: 20px;"
      >
        <div class="totaltext">฿2,700.00</div>
        <div class="totaltext">ฟรีค่าส่ง</div>
        <div class="totaltext">฿2,700.00</div>
      </div>
    </div>
    <div style="text-align: center;">
      <button
        type="button"
        class="btn btn-warning"
        style="font-family: Prompt;font-style: normal;font-weight: 500;font-size: 18px;line-height: 27px;background-color: #F36523; border-color: #F36523;margin-top: 50px;
    margin-bottom: 50px;     color:#eef1f3;"
      >
        ชำระสินค้า
      </button>
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
.toptextment {
  margin-top: 100px;
  font-family: Prompt;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 10px;
  /* or 62% */

  display: flex;
  align-items: center;

  color: #000000;
}
.lowtextment {
  margin-top: 30px;
  margin-left: 70px;
}
</style>
