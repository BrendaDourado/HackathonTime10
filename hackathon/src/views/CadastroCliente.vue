<template>
  <v-container fluid>
    <div>
      <h1>Diga ai do que você gosta!</h1>
      <p></p>
    </div>
    <v-checkbox v-model="checkbox1" :label="`Chocolate branco:`"></v-checkbox>
    <v-checkbox v-model="checkbox2" :label="` Nutella 2:`"></v-checkbox>
    <v-checkbox v-model="checkbox1" :label="`Chocolate branco:`"></v-checkbox>
    <v-checkbox v-model="checkbox2" :label="` Nutella 2:`"></v-checkbox>
    <v-checkbox v-model="checkbox1" :label="`Chocolate branco:`"></v-checkbox>
    <v-checkbox v-model="checkbox2" :label="` Nutella 2:`"></v-checkbox>
    <v-checkbox v-model="checkbox1" :label="`Chocolate branco:`"></v-checkbox>
    <v-checkbox v-model="checkbox2" :label="` Nutella 2:`"></v-checkbox>
    <v-checkbox v-model="checkbox1" :label="`Chocolate branco:`"></v-checkbox>
    <v-checkbox v-model="checkbox2" :label="` Nutella 2:`"></v-checkbox>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      checkbox1: true,
      checkbox2: false,
    };
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
  color: linear-gradient(180deg, #194b79, #19236f, #000204);
}
.container {
  padding: 30px;
  width: 100%;
  height: 100vh;
  color: #fff;
  background-image: linear-gradient(180deg, #194b79, #19236f, #000204);
}
</style>
