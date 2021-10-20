<template>
  <h1>Create Account</h1>



     <form  @submit.prevent="saveAccount()" action="/" method="post">
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


        <button class="btn btn-primary"  type="submit">Submit </button>
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
            address: "",
            data: {}

        },
        submitted: false
        };
    },
    methods: {
        saveAccount() {


        let formData = new FormData();
        formData.append('name', this.account.name)
        formData.append('email', this.account.email)
        formData.append('phonenumber', this.account.phonenumber)
        formData.append('address', this.account.address)

        AccountDataService.create(formData)
            .then(response => {
            this.account.id = response.data.id;
            this.data =   JSON.stringify(response);
            console.log('data response'+ this.data);

                                        if(response.data[0].status==1){
                            
                                alert('Data saved successfully');
                            } 
        
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