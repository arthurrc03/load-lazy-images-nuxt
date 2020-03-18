export default ({
  /*
   * state
   */
  state() {
    return {
      images:[]
    }
  },
  /*
   * mutations
   */
  mutations: {
    SET_IMAGES(state, res){
      state.images = res;
    },
    UPDATE_IMAGES(state, index){
      state.images.splice(index, 1);
      console.log(state.images)
    }
  },
  /*
   * actions
   */
  actions: {
    //Realizamos la llamada al endpoint que nos devuelve la lista de imágenes
    GET_IMAGES({commit}){
      this.$axios.$get('https://jsonplaceholder.typicode.com/photos').then(response => {
        //Añadimos los datos a la propiedad images del estado del vuex store.
        commit('SET_IMAGES', response);
      })
    },
    //Eliminamos la imagen por su id, realizamos la llamada al endpoint correspondiente
    //Documentanción de jsonplaceholder: el dato no se eliminará del servidor, pero se falsificará como si así fuera.
    DELETE_IMAGE_BY_ID({commit}, {id, index}){
      this.$axios.$delete(`https://jsonplaceholder.typicode.com/photos/${id}`).then(response => {
        //Actualizamos la propiedad images del estado del vuex store.
        commit('UPDATE_IMAGES' , index);
      })
    }
  }
})
