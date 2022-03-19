<template>
  <validation-observer ref="observer">
    <div class="container">
      <h1>Faça seu Cadastro</h1>
      <form @submit.prevent="submit">
        <validation-provider name="Name" rules="required|max:10">
          <v-text-field
            v-model="name"
            :counter="30"
            label="Name"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider name="Telefone" rules="required|max:12">
          <v-text-field
            v-model="Telefone"
            :counter="8"
            label="Senha"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider name="email" rules="required|email">
          <v-text-field
            v-model="email"
            label="E-mail"
            requiredname="email"
            autocomplete="on"
            required
          ></v-text-field>
        </validation-provider>

        <v-btn class="mr-4" type="submit"> enviar </v-btn>
      </form>
    </div>
  </validation-observer>
</template>

<script>
export default {
  data: () => ({
    name: "",
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
  background-image: linear-gradient(180deg, #194b79, #19236f, #000204);
}
</style>
