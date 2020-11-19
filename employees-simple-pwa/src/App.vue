<template>
  <div id="app" class="row justify-content-center align-items-top  mt-3">
      <button-get @get="fetchData"></button-get>
      <card-view :employees="employees" @del="delEmployee"></card-view> 
  </div>
</template>

<script>
// add imports
import buttonGet from './components/ButtonGet.vue';
import cardView from './components/CardView.vue';
import axios from "axios";

export default {
  name: 'app',
  components: {
    // add components
    buttonGet,
    cardView
  },
  data(){
    return {
      employees: [],
    };
  },
  methods: {
    /*fetchData(){
      //this.employees = this.employeeData;
      this.getEmployees();
    },*/
    async fetchData() {
      let res = await axios.get("/employees");
      this.employees = res.data;
      //console.log("get");
    },
    async delEmployee(e){
      console.log("del employee: " + e.id);
      //console.log(await axios.get(`employees/${e.id}`));
      await axios.delete(`employees/${e.id}`);
      this.employees = this.employees.filter(elm => elm.id != e.id);
    }
  }
  // add data
  // add methods
}
</script>

<style>
</style>
