<template>
  <aside class="main-sidebar sidebar-orange-primary sidebar-color elevation-4">
    <div class="sidebar">
      <div style="text-align:center">
        <img src="~/assets/icon/S__13746207.jpg" width="150px" height="100px" />
      </div>
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image"></div>
        <div class="info">
          <h3>Admin: {{ $auth.user.username }}</h3>
          <a href="#" class="d-block"></a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          v-if="$auth.user.roles"
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library-->

          <li
            v-if="$auth.user.roles[0] === `ROLE_ADMIN`"
            class="nav-item table-hover"
            style="border:1px solid black; border-radius: 10px"
          >
            <a href="/category" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>Category</p>
            </a>
          </li>
          <br />
          <li
            v-if="$auth.user.roles[0] === `ROLE_ADMIN`"
            class="nav-item"
            style="border:1px solid black; border-radius: 10px"
          >
            <a href="/account" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>Active Event</p>
            </a>
          </li>
          <br />
          <!-- <li
            class="logout nav-item"
            style="border:1px solid black; border-radius: 10px"
          >
            <a href="/" @click="$auth.logout()" class="nav-link">
              logout
              <i class="nav-icon fas fa-th"></i>
            </a>
          </li> -->

          <!-- <li class="nav-header">LABELS</li> -->
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
  </aside>
</template>
<script>
export default {
  // data() {
  //   return {
  //     // mock up
  //     role: ""
  //   };
  // },

  mounted() {
    console.log(this.$auth.user);
    // console.log(this.$auth.user.roles[0]);
    // this.role = await this.$auth.user.roles[0];
  }
  // computed: {
  //   role() {
  //     return this.$auth.user.roles[0];
  //   }
  // }
};
</script>

<style scoped>
.sidebar-color {
  background: (237, 161, 9);
}
.botton.hover {
  background-color: black;
}
p:hover {
  color: orange;
}
a:hover {
  color: orange !important;
}
</style>
