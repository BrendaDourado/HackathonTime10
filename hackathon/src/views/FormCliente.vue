<template>
  <v-container fluid>
    <v-checkbox
      v-model="checkbox1"
      :label="`Checkbox 1: ${checkbox1.toString()}`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox2"
      :label="`Checkbox 2: ${checkbox2.toString()}`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox1"
      :label="`Checkbox 1: ${checkbox1.toString()}`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox2"
      :label="`Checkbox 2: ${checkbox2.toString()}`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox1"
      :label="`Checkbox 1: ${checkbox1.toString()}`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox2"
      :label="`Checkbox 2: ${checkbox2.toString()}`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox1"
      :label="`Checkbox 1: ${checkbox1.toString()}`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox2"
      :label="`Checkbox 2: ${checkbox2.toString()}`"
    ></v-checkbox>
  </v-container>
</template>

<script>
export default {
  name: "FormCliente",
  data: () => ({
    name: "",
    telefone: "",
    email: "",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
.container {
  padding: 30px;
  width: 100%;
  height: 100vh;
  color: #fff;
  /*background-image: linear-gradient(180deg, #194b79, #19236f, #000204);*/
}
</style>
