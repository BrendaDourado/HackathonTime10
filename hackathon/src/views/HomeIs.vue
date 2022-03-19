<template>
  <v-container>
    <div class="mt-5 home-img">
      <img src="../assets/egg.svg" alt="Pascoa" />
    </div>
    <p class="text-home text-justify mt-5 ml-4 mr-4">
      Com a chegada da páscoa, ficamos muito impressionados com a variedade de
      ovos que surgem com a data. Por isso, resolvemos trazer para você os
      melhores ovos caseiros de Páscoa. Comprar de pequenos produtores é uma
      ideia que contribui para a economia e ajuda quem mais precisa. Faça parte
      dessa idéia, divulgue seu produto!
    </p>
    <v-btn @click="delay" color="blue" class="mr-4" type="submit">
      Clique Aqui
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: "HomeIs",
  }),
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    delay() {
      setTimeout(() => {
        this.$router.push("/cadastrocliente");
      }, 100);
    },
  },
};
</script>

<style>
.home-img {
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: 300px;
}
.text-home {
  font-size: 14px;
}
.form {
  display: flex;
  justify-content: center;
}
</style>
