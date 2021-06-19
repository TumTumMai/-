<template>
  <nav
    class="main-header navbar navbar-expand navbar-white navbar-light"
    style="display: flex ; justify-content:flex-end"
  >
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item d-none d-sm-inline-block">
        <a href="/" @click="$auth.logout()" class="text nav-link">
          <h5>Logout</h5>
          <i class="nav-icon fas fa-th"></i>
        </a>
      </li>
    </ul>

    <!-- SEARCH FORM -->

    <!-- Right navbar links -->
  </nav>
</template>
<script>
export default {};
</script>
<style>
.text {
  color: black;
}
</style>
