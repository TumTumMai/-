<template>
  <div>
    <Navbar />
    <Sidebar />
    <nuxt class="content-wrapper" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/page/navbar";
import Sidebar from "../components/page/sidebar";
import Footer from "../components/page/footer";
export default {
  middleware: ["get-auth"],
  components: {
    Navbar,
    Sidebar,
    Footer
  }
};
</script>
<style></style>
