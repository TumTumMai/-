<template>
  <div style="background-color:#ffff;">
    <div class="hedaer">
      <navbar></navbar>
    
    </div>
    <footer class="footer">
      <img src="~/assets/image/Footer.png" width="100%" style="margin-top:70px;margin-right:0px;" />
    </footer>
  </div>
</template>
<script>
import navbar from "~/components/navbar_white";
export default {
  components: {
    navbar,
  },
   getCategories() {
      this.$axios
        .get("/categories")
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {});
      
    },
    
};
</script>
<style scoped>
.footer {
  margin-right: 0px;
}
</style>