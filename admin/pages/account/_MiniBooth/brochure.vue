<template>
  <form>
    <div class="form-group">
      <div class="d-flex justify-content-between pr-3">
        <h1>My Booth</h1>
        <button type="button" class="btn btn-primary" @click="Add">
          Save
        </button>
      </div>
      <div class="custom-file">
        <input
          v-model="form.BrochureName"
          type="text"
          class="maintext form-control"
          id="exampleFormControlInput1"
          placeholder="Header"
        />
        <input
          v-model="form.description"
          type="text"
          class="subtext form-control"
          id="exampleFormControlInput1"
          placeholder="Description"
        />
        <div class="photo">
          <input
            class="col-2.5"
            type="file"
            multiple
            id="upload_image"
            name="image"
            @change="onFileChange"
          />
        </div>
        <div class="container showpic"></div>
        <div row-12 style="display:flex">
          <div v-for="(file, index) in image_show" :key="index" class="col-3">
            <img :src="file" class="img-thumbnail" />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  layout: "adminlte",
  components: {},
  data() {
    return {
      image: [],
      image_show: [],
      form: {
        image: [],
        BrochureName: "",
        description: "",
        IdBooth: "5f97e951f56fe13ad8d14bd0"
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get(`http://localhost:8080/brochure`).then(res => {
        const { data } = res;
        this.BrochureName = data.itemsList;
      });
    },
    async Add() {
      await this.uploadImage();
      await this.uploadText();
    },
    Delete(index) {
      this.brochure.splice(index, 1);
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;

      if (!files.length) {
        return;
      }
      for (let i = 0; i < files.length; i++) {
        const element = files[i];
        this.image.push(element);
        this.previewImage(element, i);
      }
      this.image = files;
      console.log(this.image);
    },
    previewImage(file, index) {
      this.image_show.push(URL.createObjectURL(file));
    },
    async uploadText() {
      const { data } = await this.$axios.post(
        `${process.env.baseUrl}/brochure`,
        this.form
      );
      console.log(data);
    },
    async uploadImage() {
      // for create new
      if (this.image.length <= 0) {
        alert("Please select Image");
        return;
      }
      let formData = new FormData();

      for (let i = 0; i < this.image.length; i++) {
        formData.append("myFile", this.image[i]);
      }

      await this.$axios
        .post(`${process.env.baseUrl}/uploadfile/`, formData)
        .then(result => {
          const data = result.data;
          this.form.image = [];
          data.forEach(e => {
            this.form.image.push(e.filename);
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.iconx {
  width: 10px;
}
.subtext {
  margin-top: 20px;
}
.photo {
  margin-top: 20px;
}
</style>
