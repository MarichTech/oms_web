<template>
    <h1>Create Opportunity</h1>

    <form @submit.prevent="saveOpportunity()" action="/" method="post">
        <div class="row">
            <div class="col-md-4">
                <div class="mb-3">
                    <label class="form-label">Account</label>
                    <select class="form-select" v-model="opportunity.id">
                        <option selected value="">Choose...</option>
                        <option required v-for="(account, index) in accounts" :value="account.id" :key="index">
                            {{ account.name }}</option>
                    </select>

                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" required v-model="opportunity.name"
                        placeholder="Add Opportunity Name">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="mb-3">
                    <label class="form-label">Amount</label>
                    <input type="text" class="form-control" required v-model="opportunity.amount"
                        placeholder="Add Opportuinity Amount">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="mb-3">
                    <label class="form-label">Stage</label>
                    <input type="text" class="form-control" required v-model="opportunity.stage"
                        placeholder="Add Opportuinity Stage">
                </div>
            </div>
        </div>

        <button class="btn btn-primary" type="submit">Submit </button>

    </form>


</template>

<script>
    import OpportunityService from "../service/OpportunityService";
    import AccountDataService from "../service/AccountDataService";


    export default {
        data() {
            return {
                accounts: [],
                opportunity: {
                    id: "",
                    name: "",
                    amount: "",
                    stage: "",
                    data: {}

                },
                submitted: false
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


            saveOpportunity() {
                let formData = new FormData();
                formData.append('accountId', this.opportunity.id)
                formData.append('name', this.opportunity.name)
                formData.append('amount', this.opportunity.amount)
                formData.append('stage', this.opportunity.stage)
                console.log(this.opportunity.id);

                OpportunityService.create(formData)
                    .then(response => {

                        console.log('data response' + response);
                        console.log('data response' + response.message);



                    })
                    .catch(e => {
                        console.log(e);
                    });
            },


        },
        mounted() {
            this.retrieveAccounts();
        }
    };
</script>

<style>

</style>