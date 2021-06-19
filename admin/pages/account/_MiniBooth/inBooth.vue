<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <div class="d-flex justify-content-between pr-3">
            <h1>My Booth</h1>
            <b-button v-b-modal.modal-lg class="botton">
              Add Brochure
            </b-button>
            <b-button v-b-modal.modal-lg2 class="botton">
              Add Product
            </b-button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Name: {{ miniboothname }}</h3>
            </div>
            <div class="card-header">
              <p class="card-title">Description: {{ brochure.description }}</p>
            </div>

            <!-- /.card-header Brochure -->
            <div class="card-body p-0">
              <table class="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th></th>
                    <th>Image Brochure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in brochure.image" :key="index">
                    <td>{{ ++index }}</td>
                    <td>
                      <img
                        class="photo"
                        :src="`http://localhost:8080/uploads/` + item"
                      />
                    </td>
                    <!-- <td>{{ item.BoothName }}</td>
                    <td>{{ item.Location }}</td> -->
                    <td class="action"></td>
                  </tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tbody>
              </table>
            </div>
            <!-- Header Product -->
            <div class="card-body p-0">
              <table class="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th></th>
                    <th>Image Product</th>
                    <th>Name Product</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(pd, index) in products" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>
                      <img :src="getImgUrl(pd.image)" class="photo" />
                    </td>
                    <td>{{ pd.ItemName }}</td>
                    <td>{{ pd.description }}</td>
                    <td>{{ pd.price }}</td>
                    <td></td>
                    <td></td>
                    <td class="action"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
    </div>
    <div>
      <b-modal id="modal-lg" ref="my-modal" size="lg" title="Add Brochure">
        <h5>Add Description</h5>
        <b-form-textarea
          id="textarea-default"
          v-model="description"
          placeholder="Description"
        ></b-form-textarea>
        <b-input-group class="mt-3" size="lg" prepend="Select Brochure">
          <b-form-file
            v-model="file1"
            type="file"
            multiple
            :state="Boolean(file1)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            @input="changeImage"
          ></b-form-file>
        </b-input-group>
        <div>
          <b-img
            v-for="(item, index) in pwImage"
            :key="index"
            :src="item"
            class="mt-3 rounded"
            fluid-grow
          >
          </b-img>
        </div>
        <template slot="modal-footer">
          <b-button variant="primary" @click="save">Save</b-button>
        </template>
      </b-modal>
    </div>
    <div>
      <b-modal id="modal-lg2" ref="my-modal2" size="lg" title="Add Product">
        <h5>Item Name</h5>
        <b-form-textarea
          id="textarea-default"
          v-model="item.ItemName"
          placeholder="Name"
        ></b-form-textarea>
        <h5>Add Price</h5>
        <b-form-textarea
          id="textarea-default"
          v-model="item.price"
          placeholder="Price"
        ></b-form-textarea>
        <h5>Add Description</h5>
        <b-form-textarea
          id="textarea-default"
          v-model="item.description"
          placeholder="Description"
        ></b-form-textarea>
        <b-input-group class="mt-3" size="lg" prepend="Select item">
          <b-form-file
            v-model="file2"
            type="file"
            :state="Boolean(file2)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            @input="changeproductImage"
          ></b-form-file>
        </b-input-group>
        <div>
          <b-img
            v-for="(item, index) in pwImage"
            :key="index"
            :src="item"
            class="mt-3 rounded"
            fluid-grow
          >
          </b-img>
        </div>
        <template slot="modal-footer">
          <b-button variant="primary" @click="saveproduct">Save</b-button>
        </template>
      </b-modal>
    </div>
  </section>
</template>

<script>
export default {
  name: "InBooth",
  layout: "adminlte",
  components: {},
  data() {
    return {
      // mock up
      Users: [],
      brochure: {
        BrochureName: "Loading...",
        description: "Loading..."
      },
      item: {
        ItemName: "",
        price: "",
        description: "",
        image: "",
        IdBooth: ""
      },
      products: [],
      description: "",
      file1: null,
      file2: null,
      pwImage: []
    };
  },
  computed: {
    miniBoothId() {
      return this.$route.params.MiniBooth;
    },
    miniboothname() {
      return this.$route.query.miniboothname;
    }
  },
  mounted() {
    this.getBC();
  },
  methods: {
    getImgUrl(name) {
      return `${process.env.baseUrl}/uploads/${name}`;
    },
    async getBC() {
      const url = `${process.env.baseUrl}/minibooth/${this.miniBoothId}`;
      const { data } = await this.$axios.get(url);
      if (data.brochure.length <= 0) {
        return;
      }
      this.brochure = data.brochure[0];
      this.Users = this.brochure.image;
      this.products = data.item;
      console.log(data);
    },
    changeImage(files) {
      this.pwImage = [];
      files.map(file => {
        this.pwImage.push(URL.createObjectURL(file));
      });
    },
    changeproductImage(file) {
      // this.pwImage = [];
      // this.pwImage.push(URL.createObjectURL(file));
    },
    async save() {
      const files = await this.saveImage();
      const imgName = [];
      files.map(file => {
        imgName.push(file.filename);
      });
      // save or update
      if (this.brochure._id) {
        await this.updateBrochure(imgName);
      } else {
        await this.saveNewBrochure(imgName);
      }
      // reset
      this.$refs["my-modal"].hide();
      this.file1 = null;
      this.description = "";
      this.pwImage = [];
      await this.getBC();
    },
    async saveImage() {
      const formdata = new FormData();
      for (let i = 0; i < this.file1.length; i++) {
        formdata.append("myFile", this.file1[i]);
      }
      const res = await this.$axios.$post("/uploadfile", formdata);
      return res;
    },
    async saveNewBrochure(imgName) {
      const data = {
        BrochureName: this.miniboothname,
        image: imgName,
        IdBooth: this.miniBoothId,
        description: this.description
      };
      const res = await this.$axios.$post("/brochure", data);
    },
    async updateBrochure(imgName) {
      const data = {
        BrochureName: this.miniboothname,
        image: imgName,
        IdBooth: this.miniBoothId,
        description: this.description
      };
      const res = await this.$axios.$put(
        `/brochure/${this.brochure._id}`,
        data
      );
    },
    async saveproduct() {
      // save 1 image
      const imageName = await this.saveOneimage();
      // save data
      this.savedata(imageName[0].filename);

      // reset
      this.$refs["my-modal2"].hide();
      this.file2 = null;
      this.item.description = "";
      this.item.ItemName = "";
      this.item.price = "";
      console.log(this.pwImage);
      this.pwImage = [];
      this.getBC();
    },
    async saveOneimage() {
      const formdata = new FormData();
      formdata.append("myFile", this.file2);

      const res = await this.$axios.$post("/uploadfile", formdata);
      return res;
    },
    async savedata(imageName) {
      this.item.image = imageName;
      this.item.IdBooth = this.miniBoothId;
      const item = await this.$axios.$post("/item", this.item);

      return item;
    }
  }
};
</script>

<style>
.card-title {
  margin-right: 590px !important;
}
.photo {
  width: 300px;
  height: 160px;
}
.botton {
  background-color: rgb(250, 131, 19);
}

.botton:hover {
  background-color: rgb(250, 131, 19);
}
</style>
