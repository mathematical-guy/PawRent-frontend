<template>
  <div>
    <div>
        <li v-for="pet in pets" :key="pet.id">
            <PawCard :petDetails="pet" />
        </li>
    </div>
  </div>
</template>

<script>
import PawCard from "./PawCard.vue";
import { getPetListService } from "../services/api";

export default {
  name: "PawList",
  components: {
    PawCard,
  },
  data(){
    return {
        pets: []
    }
  },
  methods: {
    getPets: function getPets() {
      getPetListService()
        .then((res) => {
            this.pets = res.data;
            console.log(this.pets);
        })
        .catch(err => console.error(err));
    },
  },
  mounted: function mounted() {
    this.getPets();
  },
};
</script>

<style>
</style>