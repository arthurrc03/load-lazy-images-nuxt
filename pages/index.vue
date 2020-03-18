<template>
  <v-app>
    <v-container class="container-images">
      <v-row>
        <v-col cols="6" sm="4"
               v-for="(item, index) in images"
               :key="item.id"
        >
          <!--documetación de vuetify: tag v-image por defecto trae las img con lazy-load cuando se realiza scroll-->
          <v-img
            :src="item.url"
            aspect-ratio="1.7"
            class="grey lighten-2"
          >
            <div class="d-flex justify-end">
              <v-btn
                icon
                @click="deleteImage(item.id)"
              >
                <v-icon color="white" x-large>mdi-close</v-icon>
              </v-btn>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

  export default {
    data() {
      return {
      }
    },
    // Obtenemos la lista de imágenes disparando una acción de vuex store
    created() {
      this.$store.dispatch('GET_IMAGES');
    },
    computed: {
      images: {
        // getter
        get: function () {
          return this.$store.state.images
        },
        // setter
        set: function (newValue) {
          return newValue
        }

      }
    },
    methods: {
      // Eliminamos una imagen por su id
      deleteImage(id,index) {
        this.$store.dispatch('DELETE_IMAGE_BY_ID', {id, index});
      }
    }
  }
</script>

<style lang="scss">
  .container-images {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12)
  }
</style>
