<template>
  <div>
    <img class="bglive" src="~/assets/image/bglivestream.png" />
    <img class="layoutgay" src="~/assets/image/gaylayout.png" />
    <div class="row topicon">
      <div class="col-12 col-sm-6"></div>
      <div class="col-12 col-sm-6 iconchat" style="text-align:end">
        <img class="iconlringht" src="~/assets/image/chat_square.png" />
        <img class="iconlringht" src="~/assets/image/clarity.png" />
        <img class="iconlringht" src="~/assets/image/X.png" />
      </div>
    </div>
    <div class="container livestream">
      <button type="button" class="btn btn-primary btn-sm bottom">LIVE</button>
      <button type="button" class="btn btn-secondary btn-sm eye">
        <img src="~/assets/image/Eye.png" />
      </button>
    </div>
    <img class="layoutblack" src="~/assets/image/layoutblack.png" />
    <div class="row lowicon">
      <div class="col-12 col-sm-6">
        <img class="iconR" src="~/assets/image/sound.png" />
      </div>
      <div class="col-12 col-sm-6 iconchat" style="text-align:end">
        <img class="iconlow" src="~/assets/image/cog.png" />
        <img class="iconlow" src="~/assets/image/Expand.png" />
        <img class="iconlow" src="~/assets/image/short.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.bglive {
  width: 100%;
  margin-right: 0px;
  position: fixed;
}
.bottom {
  background-color: rgb(253, 8, 8);
  border-radius: 5px;
  margin-top: -90px;
  width: 68px;
  height: 30px;
  left: 643px;
  top: 131px;
  border-color: rgb(245, 6, 6);
  position: absolute;
}
.eye {
  width: 68px;
  height: 30px;
  margin-top: -90px;
  left: 729px;
  top: 131px;

  background: #8b8989;
  border-radius: 5px;
  position: absolute;
}
.icontoplife {
  position: absolute;
}
.layoutgay {
  position: absolute;
  width: 100%;
}
.topicon {
  text-align: end;
  margin-top: 0px;
  display: flex;
  flex-wrap: wrap;
  margin-right: 0px;
  margin-left: 0px;
}

.iconlringht {
  margin-top: 40px;
  text-align: end;
}
.layoutblack {
  position: absolute;
  width: 100%;
  margin-top: 550px;
}
.iconR {
  margin-top: 600px;
}
.iconlow {
  margin-top: 600px;
}
.lowicon {
  margin: 0px;
}
</style>
