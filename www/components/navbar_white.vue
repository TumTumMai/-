<template>
  <div>
    <nuxt-link class="homepoint" :to="`/`">
      <nav class="navbar navbar-dark nav_bg">
        <div class="container">
          <div class="row">
            <div class="navlogo">
              <img src="~/assets/image/logonavbar.png" style="width:75px" />
            </div>
            <div
              style="font-size: 18px;
    font-weight: 500;
    margin-top: 17px;
    margin-left: 17px;
    color: black;
    font-family: 'Prompt';"
            >
              Webcast Exhibition Platform
            </div>
          </div>
        </div>
      </nav>
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.nav_bg {
  background-color: #fff;
}
.navlogo {
  width: 75px;
}
</style>
