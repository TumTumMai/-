<template>
  <div class="hedaer">
    <!-- <navbar></navbar> -->
    <div class="container" style="margin-top: 60px;">
      <h1>{{ categoryname }}</h1>
      <div class="row">
        <div
          v-for="item in categoryevents"
          :key="item.id"
          class="col-12 col-sm-3 topevent"
          style="margin-bottom: 25px;"
        >
          <img
            :src="`${imageURL}/${item.image}`"
            style="width: 268px;height: 171px;"
          />
          <nuxt-link class="eventpoint" :to="`/event/${item._id}`">
            <div
              class="d-flex justify-content-between luckevent"
              style="font-size:16px"
            >
              {{ item.BoothName }}
            </div>
          </nuxt-link>
          <div class="lowevent_t">
            <img
              src="~/assets/image/loc.png"
              style="position: static margin-right: 0px;"
              class="imgtopevent"
            />
            <p class="textevent">
              {{ item.Location }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <!-- <footer class="footer">
        <img
          src="~/assets/image/Footer.png"
          width="100%"
          style="margin-top:70px;margin-right:0px;"
        />
      </footer> -->
    </div>
  </div>
</template>
<script>
// import navbar from "~/components/navbar_white";
export default {
  layout: "default-nonavbar",
  data() {
    return {
      categoryevents: [],
      categorybooth: []
    };
  },
  // components: {
  //   navbar
  // },
  computed: {
    categoryname() {
      return this.$route.params.categoryname;
    },
    categoryid() {
      return this.$route.params.id;
    },
    imageURL() {
      return `${process.env.baseUrl}/uploads`;
    }
  },
  mounted() {
    this.getCategoriesevents();
    this.getCategoriesbooth();
  },
  methods: {
    async getCategoriesevents() {
      const cats = await this.$axios
        .get(`${process.env.baseUrl}/categories/${this.categoryid}`)
        .then(res => res.data);
      this.categoryevents = cats;

      for (let index = 0; index => 1; index++) {
        this.imageTodays.push(cats[index]);
      }
    },
    async getCategoriesbooth() {
      const cats = await this.$axios
        .get(`${process.env.baseUrl}/categories/${this.categoryid}`)
        .then(res => res.data.Event);
      this.categoryevents = cats;

      for (let index = 0; index => 1; index++) {
        this.imageTodays.push(cats[index]);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.textevent {
  display: contents;
}
.luckevent {
  color: black;
}
.imgtopevent {
  margin: 0px;
}
.lowevent_t {
  font-size: 12px;
  color: #9b8f8f;
  margin-bottom: 15px;
}
</style>
