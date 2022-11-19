<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn class="py-7" color="primary" >
          <v-icon x-large class="mr-4">mdi-paw</v-icon>
          <h1>Paw Rent</h1>
      </v-btn>
    </v-app-bar>

    <v-main>
      <PawList />
    </v-main>
  </v-app>
</template>

<script>
import PawList from "./components/PawList.vue";

export default {
  name: "App",
  components: {
    PawList,
  },

  data: () => ({
    imagePath: "",
  }),
  mounted: function mounted() {
    // const path = require('path');
    this.imagePath = "~/assets/paw_transparent.png";
    // this.imagePath = path.join('src', 'assets', 'paw_transparent.png')
    console.log(this.imagePath);
  },
};
</script>
