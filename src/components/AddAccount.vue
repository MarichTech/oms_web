<template>
  <h1>Create Account</h1>

     <form>
        <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" required v-model="account.name" placeholder="Add Account Name">
    
        </div>

        <div  class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" required v-model="account.email" placeholder="Add Account Email">

        </div>

        <div  class="mb-3">
        <label class="form-label">Phonenumber</label>
        <input type="text" class="form-control"  required v-model="account.phonenumber" placeholder="Add Account Phonenumber">
     
        </div>

        <div  class="mb-3">
        <label class="form-label">Address</label>
        <input type="text" class="form-control"  required v-model="account.address" placeholder="Add Account Address">

        </div>


        <button class="btn btn-primary" @click="saveAccount">Submit </button>
    </form>

</template>

<script>

import AccountDataService from "../service/AccountDataService";

export default {
    name: "add-account",
    data() {
        return {
        account: {
            name: "",
            email: "",
            phonenumber: "",
            address: ""
        },
        submitted: false
        };
    },
    methods: {
        saveAccount() {
        var data = {
            name: this.account.name,
            email: this.account.email,
            phonenumber: this.account.phonenumber,
            address: this.account.address
        };

        AccountDataService.create(data)
            .then(response => {
            this.account.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
            })
            .catch(e => {
            console.log(e);
            });
        },
        
        newTutorial() {
        this.submitted = false;
        this.tutorial = {};
        }
    }
};

</script>

<style>

</style>