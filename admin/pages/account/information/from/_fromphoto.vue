<template>
  <form>

    <img class="showphoto" :src="image_show" alt="">
   <div class="input-group">
  <!-- <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload </span>
  </div> -->
  <div class="custom-file">
<input type="file" id="upload_image" name="image" @change="onFileChange">
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
    <button @click="saveData" type="button" class="btn btn-primary">Submit</button>
    <!-- <b-form header="result">
      {{form}}
    </b-form> -->
  <div>
    <p header="result">
    {{form}}
    </p>
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
      form:{
        BoothName: "",
        Location: "",
        image: []
      },
      image: null,
      image_show:''
    }
  },
  methods: {
    async saveData(){
      await this.uploadImage();
    },
    async uploadImage(){
      let formData = new FormData();
      formData.append('myFile', this.image ? this.image : '');

      await axios.post(`${process.env.baseUrl}/uploadfile`,formData)
      .then(result => {
        this.form.image.push(result.data.filename)
        if (!this.form.image.length) return false
        axios.post(`${process.env.baseUrl}/image`,this.form).then(data=>{
          console.warn(data.status);
        }).catch(e => {
          console.warn(e)
        })
      }).catch(err => {
        console.log(err);
      })

    },
    onFileChange(e){
      let files = e.target.files || e.dataTransfer.files;
            if (!files.length){
                return;
            }
            this.image = files[0];
            this.previewImage(files[0]);
      },
      previewImage(file){
          this.image_show = URL.createObjectURL(file)
      },
      onSubmit(evt){
        evt.preventDefault();
        console.log(this.form);
      }

  },
  mounted(){
        axios.get(`${process.env.baseUrl}/image`)
        .then(result =>{
          console.log("eiei",result.data);
        }
        )
  }
}
</script>

<style>
.form-group {
  margin-top: 20px;
}
.showphoto{
  width: 300px;
  height: auto;
}
</style>
