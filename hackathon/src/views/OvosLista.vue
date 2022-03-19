<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Teste</h2>
    <OvosTabela :Locais="OvosLista"/>
  </v-container>
</template>
<script>

import OvosTabela from '../components/OvosTabela';

export default {
  name: 'OvosLista',
  components: {
      OvosTabela
  },
  data() {
    return {
      OvosLista: []
    }
  },
  created() {
    fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
      .then(response => response.json())
      .then(json => {
       this.OvosLista = json;
      })
  }
}
</script>