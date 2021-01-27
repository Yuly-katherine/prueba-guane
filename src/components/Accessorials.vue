<template>
  <div class="accessorials shadow-lg p-3 mb-5 bg-white">
    <h4 class="title">
      <b> Accessorials</b>
    </h4>
    <hr />
    <b-form-checkbox-group
      id="accessorials"
      v-model="selected"
      :options="accessorials"
      name="accessorials"
      class="ml-4"
      aria-label="accessorials options"
    ></b-form-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "Accessorials",
  data() {
    return {
      accessorials: [
        "Hazmat",
        "Bonded",
        "Tarps",
        "Airport Delivery Non TSA",
        "Airport Delivery TSA",
        " Oversize/Overweight Permits",
        "Escorts",
        "Team Drivers",
        "Non Stackable"
      ],
      selected: []
    };
  },
    created() {
        this.selected  = this.$store.getters["jsonPrueba"].hauls[0].accessorials
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.accessorials {
  border-radius: 20px;
}
</style>
