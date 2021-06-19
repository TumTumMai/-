// mini booth

<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Mini Booth</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item">
              <nuxt-link :to="`/account/information/${MainBooth}/add`">
                <b-button variant="success">Create Event</b-button>

                <!-- <div
                  class="input-group input-group-sm"
                  style="
                    border-style: outset;
                    width: 105px;
                    margin-top: 0px;
                    margin-right: 25px;
                    border-color: gray;
                    color: black;
                  "
                >
                  Create Event
                </div> -->
              </nuxt-link>
              <a href="/"></a>
            </li>
          </ol>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h6 class="card-title"></h6>
            </div>

            <!-- /.card-header -->
            <div class="card-body p-0" style="min-height:80vh">
              <table class="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th></th>
                    <th>image</th>
                    <th>BoothName</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in Users" :key="index">
                    <td>{{ ++index }}</td>
                    <td>
                      <nuxt-link
                        :to="
                          `/account/${item._id}/inbooth?miniboothname=${item.MiniBoothName}`
                        "
                      >
                        <img
                          class="photo"
                          :src="`http://localhost:8080/uploads/` + item.image"
                        />
                      </nuxt-link>
                    </td>
                    <td>{{ item.MiniBoothName }}</td>
                    <td>{{ item.Location }}</td>
                    <td class="action">
                      <nuxt-link
                        :to="
                          `/account/${item._id}/inbooth?miniboothname=${item.MiniBoothName}`
                        "
                      >
                        <button class="btn btn-primary  style-button">
                          <feather>View</feather>
                        </button>
                      </nuxt-link>
                      <nuxt-link
                        :to="`/account/from/${item._id}/${item.MiniBoothName}`"
                      >
                        <button class="btn btn-warning style-button">
                          <feather type="edit">edit</feather>
                        </button>
                        <button
                          class="btn btn-danger style-button"
                          @click="handleClickDeleteContenttag(contentag._id)"
                        >
                          <feather type="delete">delete</feather>
                        </button>
                      </nuxt-link>
                    </td>
                  </tr>

                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
    </div>
    <div></div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  layout: "adminlte",
  components: {},
  data() {
    return {
      Users: [],
      MainBooth: this.$route.params.information,
      id: ""
    };
  },
  computed: {
    mainBoothId() {
      return this.$route.params.information;
    }
  },
  mounted() {
    axios
      .get(`${process.env.baseUrl}/image/${this.mainBoothId}`)
      .then(result => {
        console.log("Image", result.data);
        this.Users = result.data.mini;
      });
  },
  methods: {}
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
</style>
