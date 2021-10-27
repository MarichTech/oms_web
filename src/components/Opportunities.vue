<template>
    <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by Name"
          v-model="name"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <h4>Opportunity List</h4>

      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Stage</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(opportunity, index) in opportunities" :key="index" @click="setActiveOpportunity(opportunity, index)"> 
              <th> {{ opportunity.id }} </th>
              <td> {{ opportunity.name }} </td>
              <td> {{ opportunity.amount }} </td>
              <td> {{ opportunity.stage }} </td>
            </tr>
            
          </tbody>
        </table>
      </div>

    </div>
    <div class="col-md-6">
      <div v-if="currentOpportunity">
        <h4>Opportunity</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentOpportunity.name }}
        </div>
        <div>
          <label><strong>Amount:</strong></label> {{ currentOpportunity.amount }}
        </div>
          <div>
          <label><strong>Stage:</strong></label> {{ currentOpportunity.stage }}
        </div>
       

      </div>
      <div v-else>
        <br />
        <p>Click  an Opportunity to view Details...</p>
      </div>
    </div>
  </div>
</template>

<script>
import OpportunityService from "../service/OpportunityService";

export default {
  name: "opportunity-list",
  data() {
    return {
      opportunities: [],
      currentOpportunity: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveOpportunities() {
      OpportunityService.getAll()
        .then(response => {
          this.opportunities = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveOpportunities();
      this.currentOpportunity = null;
      this.currentIndex = -1;
    },

    setActiveOpportunity(opportunity, index) {
      this.currentOpportunity = opportunity;
      this.currentIndex = opportunity ? index : -1;
    },

    
    searchName() {
 
    }
  },
  mounted() {
    this.retrieveOpportunities();
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