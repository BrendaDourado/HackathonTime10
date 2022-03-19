<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">teste</th>
          <th class="text-right">teste</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(local, index) of locais" :key="local.id">
          <td>{{ index + 1 }}</td>
          <td>
            <v-avatar size="24">
              <img :src="Local.imagem" :alt="Local.nome"/>
            </v-avatar>
            <span class="pl-2">{{ Local.imagem }}</span>
          </td>
          <td class="text-right">{{ Local.nome }}</td>
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