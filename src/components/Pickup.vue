<template>
  <div class="pickup shadow-lg p-3 mb-5 bg-white">
    <h4 class="title">
      <b><b-icon icon="geo-alt-fill"></b-icon> Pickup </b>
    </h4>
    <hr />

    <div class="row">
      <div class="col-sm">
        <b-form-input
          v-model="zipFrom"
          class="input"
          placeholder="zip from"
        ></b-form-input>
      </div>
      <div class="col-sm">
        <b-form-input
          v-model="cityFrom"
          class="input"
          placeholder="city from"
        ></b-form-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pickup",
  data() {
    return {
      zipFrom: "",
      cityFrom: ""
    };
  },
  created() {
    let hauls = this.$store.getters["jsonPrueba"].hauls[0]
    this.zipFrom = hauls.zip_from
    this.cityFrom = hauls.city_from
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pickup {
  border-radius: 20px;
}
.input {
  margin: 15px 0px;
  background-color: #f5f4f4;
}
.title {
  color: #16c79a;
}
</style>
