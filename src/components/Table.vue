<template>
  <div class="table-component shadow-lg mb-5 bg-white">
    <b-table hover :items="items" :fields="fields">
        <template #thead-top>
            <div class="table-head">
               <b-button variant="danger" @click="deleteRow" class="delete">Delete</b-button>
               <b-button variant="primary" @click="addNew">Add new row </b-button>
            </div>
        </template>
        <template #head(checkbox)>
            <b-form-checkbox
                v-model="all"
                @change="selectAll"
                value="accepted"
                unchecked-value="not_accepted"
                >
            </b-form-checkbox>
        </template>
         <template #cell(checkbox)="row">
            <b-form-checkbox
                v-model="items[row.index].checkbox"
                value="accepted"
                unchecked-value="not_accepted"
                >
            </b-form-checkbox>
        </template>
    </b-table>
  </div>
</template>

<script>
export default {
    data() {
      return {
        fields: ['checkbox', 'hu_count', 'dimensions','weight','commodity','stackable'],  
        items: [],
        all: "not_accepted",
        count: 2
      }
    },
    created() {
      let hauls = this.$store.getters["jsonPrueba"].hauls[0]
      this.items = hauls.commodity
    },
    methods: {
        selectAll() {
            if(this.all == "accepted") {
                for(let i in this.items) {
                    this.items[i].checkbox = "accepted"
                }
            } else if(this.all == "not_accepted") {
                for(let i in this.items) {
                    this.items[i].checkbox = "not_accepted"
                }
            }
        },
        addNew() {
          let newRow = {}
          newRow.checkbox = "not_accepted"
          newRow.hu_count = this.count + " Pallet" 
          newRow.dimensions= '48.0 x 48.0 x 48.0 inch'
          newRow.weight= '37479.0 lb'
          this.count += 1
          this.items.push(newRow)
        },
        deleteRow(){
          let i = 0
          while(i < this.items.length) {
            if(this.items[i].checkbox == "accepted") {
              this.items.splice(i, 1);
              i -= 1
            }
            i += 1
          }
          if(this.all == "accepted") {
            this.all = "not_accepted";
          }
        }
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-component {
  border-radius: 20px;
}

.table-head {
  margin: 0px !important;
  padding: 20px 0px !important;
}

.delete {
  margin-right: 10px;
}
</style>

