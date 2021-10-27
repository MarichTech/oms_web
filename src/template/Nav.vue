<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">

      <router-link class="navbar-brand" :to="(loggedIn ? '/' : '/signin')">Opportunity-Management</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

        <ul v-if="loggedIn" class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Display all the time -->
          <li class="nav-item">
            <MenuLink class="nav-link" path="/" text="Home"></MenuLink>
          </li>
          <li class="nav-item">
            <MenuLink class="nav-link" path="/" text="About"></MenuLink>
          </li>



        </ul>
        <ul v-if="!loggedIn" class="navbar-nav me-auto mb-2 mb-lg-0">

          <!-- Display when user is [ logged in ] -->
          <li class="nav-item">
            <MenuLink class="nav-link" path="/" text="Accounts"></MenuLink>
          </li>
          <li class="nav-item">
            <MenuLink class="nav-link" path="/opportunity" text="Opportunities"></MenuLink>
          </li>
        </ul>


        <ul v-if="!loggedIn" class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
          <!-- Display when user is [ logged in ] -->
          <li class="nav-item">
            <MenuLink class="nav-link" path="/accounts-add" text="Create Account"></MenuLink>
          </li>
          <li class="nav-item">
            <MenuLink class="nav-link" path="/opportunity-add" text="Create Opportunity"></MenuLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout()">Logout</a>
          </li>
        </ul>

        <ul v-if="!loggedIn" class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
          <!-- Display when user is has [ not logged in ] -->

          <li class="nav-item">
            <MenuLink class="nav-link" path="/signin" text="Login"></MenuLink>
          </li>
          <li class="nav-item">
            <MenuLink class="nav-link" path="/signup" text="Register"></MenuLink>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
  import MenuLink from "./MenuLink";
  export default {
    props: ["loggedIn"],
    data() {
      return {
        brand: process.env.VUE_APP_APPNAME
      };
    },
    components: {
      MenuLink
    },
    methods: {
      logout() {
        this.$store.dispatch("logout");
      }
    }
  };
</script>



<style>
  nav {
    background-color: #897AAA;
  }
</style>