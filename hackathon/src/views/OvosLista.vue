<template>
  <v-container>
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