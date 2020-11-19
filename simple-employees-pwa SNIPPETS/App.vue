<template>
  <div id="app" class="row justify-content-center align-items-top  mt-3">
      <button-get @get="fetchData"></button-get>
      <card-view :employees="employees" @del="delEmployee"></card-view> 
  </div>
</template>

<script>
// add imports

export default {
  name: 'app',
  components: {
    // add components
  },
  // add data
  // add methods
}
</script>

<style>
</style>
