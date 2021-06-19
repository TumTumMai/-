<template>
  <div>
    <div class="content-header">
      <h1>Booth : NAME</h1>
    </div>

    <section class="content"></section>
    <div class="col-12">
      <div class="card card-primary">
        <div class="card-header">
          <div class="card-title">Video LiveStream</div>
          <div class="card-tools">
            <nuxt-link :to="`/account/information/from`">
              <div
                class="input-group input-group-sm"
                style="
                  border-style: outset;
                  width: 105px;
                  margin-top: 0px;
                  margin-right: 25px;
                "
              >
                Create Video +
                <!-- <input
                    type="text"
                    name="table_search"
                    class="form-control float-right"
                    placeholder="Search"
                  /> -->

                <!-- <div class="input-group-append">
                    <button type="submit" class="btn btn-default">
                      <i class="fas fa-search"></i>
                    </button>
                  </div> -->
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="card-body">
          <table class="table table-hover text-nowrap">
            <thead>
              <tr>
                <th>Video</th>
                <th>Name Video</th>
                <th>Location</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data" :key="index">
                <!-- <td>{{ ++index }}</td> -->
                <td>
                  <div>
                    <img
                      style="width: 70px; height: auto"
                      src="https://e7.pngegg.com/pngimages/244/695/png-clipart-play-icon-video-player-information-play-icon-miscellaneous-angle.png"
                    />
                  </div>
                </td>
                <td>{{ item.Name_video }}</td>
                <td>{{ item.location }}</td>
                <td>{{ item.date }}</td>
                <td class="action">
                  <button
                    class="btn btn-warning style-button"
                    @click="handleClickEditContent(contentag)"
                  >
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
      </div>
    </div>
    <!-- Photo  -->
    <div class="col-12">
      <div class="card card-primary">
        <div class="card-header">
          <div class="card-title">Photo LiveStream</div>
          <nuxt-link :to="`/account/information/from`">
            <div
              class="input-group input-group-sm"
              style="
                border-style: outset;
                width: 105px;
                margin-top: 0px;
                margin-right: 25px;
              "
            >
              Create Photo+
              <!-- <input
                    type="text"
                    name="table_search"
                    class="form-control float-right"
                    placeholder="Search"
                  /> -->

              <!-- <div class="input-group-append">
                    <button type="submit" class="btn btn-default">
                      <i class="fas fa-search"></i>
                    </button>
                  </div> -->
            </div>
          </nuxt-link>
        </div>

        <div class="card-body">
          <table class="table table-hover text-nowrap">
            <thead>
              <tr>
                <th>Photo</th>

                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tablephoto" :key="index">
                <!-- <td>{{ ++index }}</td> -->
                <td>
                  <div>
                    <img
                      style="width: 70px; height: auto"
                      src="https://e7.pngegg.com/pngimages/244/695/png-clipart-play-icon-video-player-information-play-icon-miscellaneous-angle.png"
                    />
                  </div>
                </td>

                <td>{{ item.date_photo }}</td>
                <td class="action">
                  <button
                    class="btn btn-warning style-button"
                    @click="handleClickEditContent(contentag)"
                  >
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "adminlte",
  components: {},
  data() {
    return {
      data: [
        {
          Name_video: "New Supercar 2022",
          location: "bitec bangna hall",
          date: "20/7/2020"
        },
        {
          Name_video: "Page 1",
          location: "bitec bangna hall",
          date: "17/7/2020"
        },
        {
          Name_video: "ลานกิจกรรม",
          location: "bitec bangna hall",
          date: "10/7/2020"
        }
      ],
      tablephoto: [
        {
          date_photo: "10/7/2020"
        },
        {
          date_photo: "22/7/2020"
        },
        {
          date_photo: "10/9/2020"
        }
      ]
    };
  }
};
</script>

<style>
.header {
  background-color: coral;
}
.card-title {
  margin-right: 670px;
}
</style>
