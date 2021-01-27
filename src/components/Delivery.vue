<template>
  <div class="delivery shadow-lg p-3 mb-5 bg-white">
    <h4 class="title">
      <b><b-icon icon="geo-alt-fill"></b-icon> Delivery </b>
    </h4>
    <hr />
    <div class="row">
      <div class="col-sm">
        <b-form-input
          v-model="zipTo"
          class="input"
          placeholder="zip to"
        ></b-form-input>
      </div>
      <div class="col-sm">
        <b-form-input
          v-model="cityTo"
          class="input"
          placeholder="city to"
        ></b-form-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Delivery",
  data() {
    return {
      zipTo: "",
      cityTo: ""
    };
  },
  created() {
    let hauls = this.$store.getters["jsonPrueba"].hauls[0]
    this.zipTo = hauls.zip_to
    this.cityTo = hauls.city_to
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.delivery {
  border-radius: 20px;
}
.input {
  margin: 15px 0px;
  background-color: #f5f4f4;
}
.title {
  color: #ef4f4f;
}
</style>
