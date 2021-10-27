<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>AccountDataService</h4>

   <form>
        <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" required v-model="currentAccount.name" placeholder="Add Account Name">
    
        </div>

        <div  class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" required v-model="currentAccount.email" placeholder="Add Account Email">

        </div>

        <div  class="mb-3">
        <label class="form-label">Phonenumber</label>
        <input type="text" class="form-control"  required v-model="currentAccount.phonenumber" placeholder="Add Account Phonenumber">
     
        </div>

        <div  class="mb-3">
        <label class="form-label">Address</label>
        <input type="text" class="form-control"  required v-model="currentAccount.address" placeholder="Add Account Address">

        </div>

    </form>

    <button class="badge badge-danger mr-2"
      @click="deleteAccount"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateAccount"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import AccountDataService from "../service/AccountDataService";

export default {

name: "tutorial",
  data() {
    return {
      currentAccount: null,
      message: ''
    };
  },
  methods: {
    getAccount(id) {
      AccountDataService.get(id)
        .then(response => {
          this.currentAccount = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },


    updateAccount() {

    },

    deleteAccount() {
      AccountDataService.delete(this.currentTutorial.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "accounts" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getAccount(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>