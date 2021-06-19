<template>
  <form>

    <div class="form-group">
      <label for="exampleFormControlInput1"> <h1>Create Category</h1></label>
       <div class="custom-file">
        <input
          type="file"
          id="upload_image"
          name="image"
          @change="onFileChange"
        />
      </div>
      <input
        v-model="form.NameCategorise"
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Category Name"
      />
    </div>
    <button type="button" class="btn btn-primary" @click="Add">Add</button>
    <div>
      <h3>Name Category</h3>
      <div class="d-flex flex-wrap">
        <div v-for="(cat,index) in categories" :key="index" class="col-3 border justify-content-between">
          <span>{{cat.NameCategorise}}</span>
          <img class="iconx" src="~/assets/icon/letter-x.png" @click="Delete(index)" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios"
export default {
  layout: "adminlte",
  components: {},
  data() {
    return {
      categories: [],
      image: null,
      image_show: "",
      form: {
      image: "",
       NameCategorise: ""
      },
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      axios.get(`http://localhost:8080/categories`).then(res => {
      const{ data } = res
      this.categories = data.itemsList
    })
    },
    Add(){
      this.uploadImage()
      // axios.post(`http://localhost:8080/categories`, this.textbox).then(res => {
      //   this.textbox.NameCategorise = ""
      //    const{ data } = res
      //    this.getData()
      // }).catch(err => {
      //   console.error('error');
      // })

    },
    Delete(index){
      this.categories.splice(index,1)
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.image = files[0];
      this.previewImage(files[0]);

      console.log(this.image)
    },
    previewImage(file) {
      this.image_show = URL.createObjectURL(file);
    },
    async uploadImage() { // for create new
      let formData = new FormData();
      formData.append("myFile", this.image ? this.image : "");

      await axios
        .post(`${process.env.baseUrl}/uploadfile`, formData)
        .then((result) => {
          this.form.image = result.data.filename
          if (!this.form.image != "") return false;
          axios
            .post(`${process.env.baseUrl}/categories`, this.form)
            .then((data) => {
              console.warn(data.status);
               this.getData()
            })
            .catch((e) => {
              console.warn(e);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
}
</script>

<style>
.iconx {
  width: 10px;
}
</style>
