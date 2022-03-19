<template>
     <div class="app-bottom-bar">
    <v-app-bar hide-on-scroll app>
       <template v-slot:img="{ props }">
        <v-img
          src="https://c.tenor.com/j7aN_bMw-xAAAAAC/chocolate-dessert.gif"
          scroll-target="#scrolling-techniques-2"
          fade-img-on-scroll
          scroll-threshold="500"
          v-bind="props"
         
        ></v-img>
      </template>
      <v-spacer />
      <v-toolbar-title><h3><strong>Ovos de páscoa</strong> 🐇🍫 </h3></v-toolbar-title>
      <v-spacer />
      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" color="whrite" small fab @click="darkMode">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" color="black" small fab @click="darkMode">
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>
    </v-app-bar>
    <v-bottom-navigation :value="value" color="#6d6d6d" app grow>
      <router-link to="/home">
        <v-btn>
          <span>Início</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
        <router-link to="/listaovos">

        <v-btn>
          <span>lojas</span>
          <v-icon>mdi-store</v-icon>
        </v-btn>
        </router-link>
     
        <router-link to="/listaovos">
        <v-btn>
          <span>Login</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
        </router-link>

        
        <v-btn>
          <span>Sobre</span>
          <v-icon>mdi-information</v-icon>
        </v-btn>


     <!-- <router-link to="/cadastrousuario">
        <v-btn>
          <span>Cadastro</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link> -->

    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  data() {
    return {
      value: 0,
    };
  },
  methods: {
  darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style scoped>
   .app-bottom-bar > .botoes{
        display: flex;
        justify-content: center;
    }
    .app-bottom-bar a {
            text-decoration: none;
            display:flex;
            justify-content: center;
            flex-grow: 1;
             
    }
    img {
        white-space: nowrap;
        height: 60px
    }

</style>
