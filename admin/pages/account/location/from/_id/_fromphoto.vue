<template>
  <form>
    <img class="showphoto" :src="image_show" alt="" />
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

    <div class="form-group">
      <label for="formGroupExampleInput">Booth Name</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder=""
        v-model="form.BoothName"
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
    <div class="form-group">
      <label for="formGroupExampleInput2">Open Date</label>
      <input
        type="datetime-local"
        class="form-control"
        id="start"
        placeholder="Start Date"
        v-model="form.Location"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Close Date</label>
      <input
        type="datetime-local"
        class="form-control"
        id="close"
        placeholder="Close Date"
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
import axios from "axios";
export default {
  layout: "adminlte",
  components: {},
  data() {
    return {
      form: {
        BoothName: "",
        Location: "",
        image: ""
      },
      image: null,
      image_show: ""
    };
  },
  methods: {
    getbooth() {
      const name = this.$route.params.fromphoto;
      axios.get(`${process.env.baseUrl}/image/${name}`).then(result => {
        console.log(result.data);
        this.form = result.data;
      });
    },
    async saveData() {
      const id = this.$route.params.id;
      if (id) {
        console.log(id);
        await this.updateBooth(id);
      } else {
        await this.uploadImage();
      }
      this.$router.push("/account");
    },
    async updateBooth(id) {
      let formData = new FormData();
      formData.append("myFile", this.image ? this.image : "");
      const file = await axios
        .post(`${process.env.baseUrl}/uploadfile`, formData)
        .then(res => res.data);
      console.log(file);
      this.form.image = file;
      console.log(this.form);
      const updatebooth = await axios
        .put(`/image/${id}`, this.form)
        .then(res => res.data);
      console.log(updatebooth);
    },
    async uploadImage() {
      // for create new
      let formData = new FormData();
      formData.append("myFile", this.image ? this.image : "");

      axios
        .post(`${process.env.baseUrl}/uploadfile`, formData)
        .then(result => {
          console.log("DES", result.data);
          this.form.image = result.data[0].filename;
          if (!this.form.image != "") return false;
          console.log("DDDD", this.form);
          axios
            .post(`${process.env.baseUrl}/image`, this.form)
            .then(data => {
              console.warn(data.status);
            })
            .catch(e => {
              console.warn(e);
            });
        })
        .catch(err => {
          console.log(err);
        });
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
    }
  },
  mounted() {
    this.getbooth();
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
