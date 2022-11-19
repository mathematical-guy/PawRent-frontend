<template>
  <div>
    <v-container class="grey mt-3">
      <v-row class="px-5 py-3">
        <v-img
          class="mr-15"
          :src="petDetails.image"
          max-height="300"
          max-width="450"
        ></v-img>
        <v-col>
          <v-card-title>{{ petDetails.name.toUpperCase() }}</v-card-title>
          <v-card-text>
            Age: {{ petDetails.age }} Category: {{ petDetails.category }}
          </v-card-text>

          <v-row>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn :icon="true" v-bind="attrs" v-on="on">
                  <v-icon x-large :color="iconColor">{{ icon }}</v-icon>
                </v-btn>
              </template>
              <span x-large> {{ availableMessage }} </span>
            </v-tooltip>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  name: "PawCard",
  data: () => ({
    loading: false,
    selection: 1,
    icon: "mdi-close-circle",
    iconColor: "red",
    availableMessage: "Not Available",
  }),
  props: {
    petDetails: Object,
    imagePath: String,
  },
  methods: {},
  mounted: function mounted() {
    if (this.petDetails.is_rented) {
      this.icon = "mdi-check-circle";
      this.iconColor = "green";
      this.availableMessage = "Available";
    }
  },
};
</script>