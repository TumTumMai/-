/// create minibooth
<template>
  <form>
    <img class="showphoto" :src="image_show" alt="" />
    <p>Forbidden file size 2 Mb</p>
    <div class="input-group">
      <!-- <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload </span>
  </div> -->
      <div class="custom-file">
        <input
          type="file"
          id="upload_image"
          name="image"
          @change="onFileChange"
        />
      </div>
    </div>
    <!-- <select class="form-control form-control-sm" @change="categoryClicked">
      <option v-for="(cat, index) in categories" :key="index">{{
        cat.NameCategorise
      }}</option>
    </select> -->

    <div class="form-group">
      <label for="formGroupExampleInput">Booth Name</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder=""
        v-model="form.MiniBoothName"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Location</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder=""
        v-model="form.Location"
      />
    </div>

    <button type="button" class="btn btn-primary" @click="saveData">
      Submit
    </button>
    <!-- <b-form header="result">
      {{form}}
    </b-form> -->
    <div>
      <p header="result">
        {{ form }}
      </p>
    </div>
  </form>
</template>

<script>
export default {
  layout: "adminlte",
  components: {},
  data() {
    return {
      form: {
        MiniBoothName: "",
        Location: "",
        IDImage: "",
        image: ""
      },
      image: null,
      image_show: ""
    };
  },
  computed: {
    mainBooth() {
      return this.$route.params.MainBooth;
    },
    miniBoothId() {
      return this.$route.params.MiniBooth;
    }
  },
  methods: {
    getbooth() {
      const name = this.$route.params.fromphoto;
      if (!name) {
        return;
      }

      this.$axios.get(`${process.env.baseUrl}/image/${name}`).then(result => {
        console.log(result.data);
        this.form = result.data;
      });
    },
    async saveData() {
      const MiniBooth = this.$route.params.MiniBooth;

      const image = await this.uploadImage();
      await this.uploadMiniBooth();

      this.$router.push("/account/information/" + this.mainBooth);
    },
    async uploadImage() {
      let formData = new FormData();
      formData.append("myFile", this.image ? this.image : "");
      const file = await this.$axios
        .post(`${process.env.baseUrl}/uploadfile`, formData)
        .then(res => res.data);
      console.log("file", file);
      this.form.image = file[0];
      console.log(this.form);
      return file;
    },
    async uploadMiniBooth() {
      const data = {
        MiniBoothName: this.form.MiniBoothName,
        Location: this.form.Location,
        image: this.form.image.filename,
        IDImage: this.mainBooth
      };
      const url = `${process.env.baseUrl}/minibooth`;
      const res = await this.$axios
        .post(url, data)
        .then(res => {})
        .catch(err => {
          console.log(err);
        });
      console.log(res);
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.image = files[0];
      this.previewImage(files[0]);

      console.log(this.image);
    },
    previewImage(file) {
      this.image_show = URL.createObjectURL(file);
    },
    onSubmit(evt) {
      evt.preventDefault();
      console.log(this.form);
    },
    async getCategories() {
      const { data } = await this.$axios.get(
        "http://localhost:8080/categories"
      );
      this.categories = data.itemsList;
    },
    categoryClicked(event) {
      const index = event.target.options.selectedIndex;
      this.form.Categories = this.categories[index]._id;
    }
  },
  mounted() {
    this.getbooth();
    this.getCategories();
  }
};
</script>

<style>
.form-group {
  margin-top: 20px;
}
.showphoto {
  width: 300px;
  height: auto;
}
</style>
