<template>
  <div class="main">
    <div class="ig-container">
      <div class="elfsight-app-82c1f530-61b6-4365-aad0-5073633e594c"></div>
    </div>

    <div>
      <div class="image">
        <div class="toplive">
          <button type="button" class="btn btn-primary btn-sm bottom">
            LIVE
          </button>
          <button type="button" class="btn btn-secondary btn-sm eye">
            <img src="~/assets/image/Eye.png" />
          </button>
        </div>
        <!-- <img src="~/assets/image/Livesteamingsales.png" class="background" /> -->
        <div class="cover">
          <img src="~/assets/image/X.png" />
          <div class="textselas">พนักงานขาย</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "nonavbar",
  head() {
    return {
      script: [
        {
          src: "https://apps.elfsight.com/p/platform.js",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.ig-container {
  width: 40vw;
  height: 40vw;
  margin: 0 auto;
  .eapps-instagram-feed-posts-item-image {
    width: 100%;
  }
}
.background {
  width: 100%;
  margin-right: 0px;
  position: static;
}
.main {
  position: relative;
  overflow: hidden;
}
.image {
  background-color: #ffff;
  width: 100%;
  height: 500px;
  cursor: pointer;
}

.image:hover > .cover {
  right: 0px !important;
  transition: ease-in-out 0.5ss;
}
.cover {
  color: #ffff;
  background-color: black;
  width: 30%;
  height: 500px;
  position: absolute;
  top: 0px;
  right: -500px;
  transition: ease-in-out 0.8s;
  opacity: 0.5;
}
.bottom {
  background-color: rgb(253, 8, 8);
  border-radius: 5px;
  width: 68px;
  height: 30px;
  left: 643px;
  top: 131px;
  border-color: rgb(245, 6, 6);
}
.eye {
  width: 68px;
  height: 30px;
  left: 729px;
  top: 131px;

  background: #8b8989;
  border-radius: 5px;
}
.toplive {
  position: absolute;
  margin-top: 39px;
  margin-left: 750px;
}
.textselas {
  font-family: Prompt;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
}
</style
>;
