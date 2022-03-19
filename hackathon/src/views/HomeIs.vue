<template>
  <v-container>
    <div class="mt-5 home-img">
      <img src="../assets/egg.svg" alt="Pascoa" />
    </div>
    <p class="text-home text-justify mt-5 ml-4 mr-4">
      Com a chegada da páscoa, ficamos muito impressionados com a variedade de
      ovos que surgem com a data. Por isso, resolvemos trazer para você os
      melhores ovos de Páscoa.
    </p>
  </v-container>
</template>

<script>
export default {
  name: "HomeIs",
};
</script>

<style>
.home-img {
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: 400px;
}
.text-home {
  font-size: 14px;
}
</style>
