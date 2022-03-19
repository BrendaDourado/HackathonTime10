<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        
      </thead>
      <tbody>
        <tr v-for="local of Locais" :key="local.id">
            <td>
            <img :src = "local.imagem"/> 
            </td>
            

        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  name: 'OvosTabela',
  props: {
    Locais: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
    img {
     display: flex;
     justify-content: center;
     max-width: 30%;
     height: 50px;
     border-radius: 50%
}
</style>