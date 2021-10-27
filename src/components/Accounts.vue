<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by Name" v-model="name" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchName">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Accounts List</h4>
      <ul class="list-group">
        <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(account, index) in accounts"
          :key="index" @click="setActiveAccount(account, index)">
          {{ account.name }} {{ account.email }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentAccount">
        <h4>Account</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentAccount.name }}
        </div>
        <div>
          <label><strong>Email:</strong></label> {{ currentAccount.email }}
        </div>
        <div>
          <label><strong>Phonenumber:</strong></label> {{ currentAccount.phonenumber }}
        </div>
        <div>
          <label><strong>Address:</strong></label> {{ currentAccount.address }}
        </div>
         <button class="btn btn-primary"  :to="'/accounts/' + currentAccount.id">Edit </button>
        <router-link  class="badge badge-warning">Edit</router-link>

      </div>
      <div v-else>
        <br />
        <p>Click an Account to view Details...</p>
      </div>
    </div>
  </div>
</template>

<script>
  import AccountDataService from "../service/AccountDataService";

  export default {
    name: "accounts-list",
    data() {
      return {
        accounts: [],
        currentAccount: null,
        currentIndex: -1,
        title: ""
      };
    },
    methods: {
      retrieveAccounts() {
        AccountDataService.getAll()
          .then(response => {
            this.accounts = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },

      refreshList() {
        this.retrieveAccounts();
        this.currentAccount = null;
        this.currentIndex = -1;
      },

      setActiveAccount(account, index) {
        this.currentAccount = account;
        this.currentIndex = account ? index : -1;
      },


      searchName() {

      }
    },
    mounted() {
      this.retrieveAccounts();
    }
  };
</script>

<style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
</style>