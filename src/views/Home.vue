<template>
  <div class="home">
    <div class="row">
      <div class="col-sm">
        <Pickup />
      </div>
      <div class="col-sm">
        <Delivery />
      </div>
    </div>
    <Accessorials />
    <Table/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pickup from "@/components/Pickup.vue";
import Delivery from "@/components/Delivery.vue";
import Accessorials from "@/components/Accessorials.vue";
import Table from "@/components/Table.vue";

export default {
  name: "Home",
  components: {
    Pickup,
    Delivery,
    Accessorials,
    Table
  }
};
</script>

<style scoped></style>
