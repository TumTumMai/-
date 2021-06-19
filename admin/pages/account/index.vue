<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>EVENT</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item">
              <nuxt-link :to="`/account/from`">
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
            </li>
          </ol>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title"></h3>
            </div>

            <!-- /.card-header -->
            <div class="card-body p-0">
              <table class="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th></th>
                    <th>image</th>
                    <th>Event Name</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in Users" :key="index">
                    <td>{{ ++index }}</td>
                    <td>
                      <nuxt-link :to="`/account/information/${item._id}`">
                        <img
                          class="photo"
                          :src="`http://localhost:8080/uploads/` + item.image"
                        />
                      </nuxt-link>
                    </td>
                    <td>{{ item.BoothName }}</td>
                    <td>{{ item.Location }}</td>
                    <td class="action">
                      <nuxt-link :to="`/account/information/${item._id}`">
                        <button class="btn btn-primary  style-button">
                          <feather>View</feather>
                        </button>
                      </nuxt-link>

                      <button class="btn btn-warning style-button">
                        <feather type="edit">edit</feather>
                      </button>

                      <button
                        class="btn btn-danger style-button"
                        @click="handleClickDeleteContenttag(contentag._id)"
                      >
                        <feather type="delete">delete</feather>
                      </button>
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
  middleware: "get-auth",
  layout: "adminlte",
  components: {},
  data() {
    return {
      // mock up
      data: [
        {
          id: 1,
          name: "kongpop",
          lastname: "Dungtoop",
          email: "kdaldakd@gmail.com"
        },
        {
          id: 2,
          name: "kongpop",
          lastname: "Dungtoop",
          email: "kdaldakd@gmail.com"
        },
        {
          id: 3,
          name: "kongpop",
          lastname: "Dungtoop",
          email: "kdaldakd@gmail.com"
        },
        {
          id: 4,
          name: "kongpop",
          lastname: "Dungtoop",
          email: "kdaldakd@gmail.com"
        },
        {
          id: 5,
          name: "kongpop",
          lastname: "Dungtoop",
          email: "kdaldakd@gmail.com"
        },
        {
          id: 6,
          name: "kongpop",
          lastname: "Dungtoop",
          email: "kdaldakd@gmail.com"
        },
        {
          id: 7,
          name: "kongpop",
          lastname: "Dungtoop",
          email: "kdaldakd@gmail.com"
        }
      ],
      Users: []
    };
  },
  mounted() {
    console.log("mouse");
    axios.get(`${process.env.baseUrl}/api/image`).then(result => {
      console.log("eiei", result.data);
      this.Users = result.data.itemsList;
      console.log(this.Users);
    });
  },
  methods: {
    logout() {
      this.$auth.logout();
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
</style>
