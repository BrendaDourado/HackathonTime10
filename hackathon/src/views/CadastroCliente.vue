<template>
  <v-container fluid>
    <div class="titulo">
      <h1>O que você preza em um ovo de páscoa?!</h1>
      <p>
        Nos diga o que mais você gosta de saborear na páscoa, que lhe
        apresentaremos os ovos que dão match com você.
      </p>
    </div>
    <v-checkbox v-model="checkbox1" :label="`Chocolate branco:`"></v-checkbox>
    <v-checkbox v-model="checkbox2" :label="` Nutella :`"></v-checkbox>
    <v-checkbox v-model="checkbox3" :label="`Avelã:`"></v-checkbox>
    <v-checkbox v-model="checkbox4" :label="` Nozes:`"></v-checkbox>
    <v-checkbox v-model="checkbox5" :label="`Meio Amargo:`"></v-checkbox>
    <v-checkbox v-model="checkbox6" :label="` 100% Cacau:`"></v-checkbox>
    <v-checkbox v-model="checkbox7" :label="`Sem açucar:`"></v-checkbox>
    <v-btn class="mr-4" type="submit"> enviar </v-btn>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
    };
  },
};
</script>

<style scoped>
v-container {
  padding-bottom: 40px;
}
h1 {
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
}

.titulo {
  color: white;
}
.container {
  margin-bottom: 100px;
  padding: 30px;
  width: 100%;
  height: 100vh;
  color: #fff;
  background-image: linear-gradient(180deg, #194b79, #19236f, #082644);
}
</style>
