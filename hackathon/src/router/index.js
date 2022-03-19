import Vue from "vue";
import VueRouter from "vue-router";
import HomeIs from "../views/HomeIs.vue"
import CadastroEmpresa from "../views/CadastroEmpresa.vue";
import CadastroCliente from "../views/CadastroCliente.vue";
<<<<<<< HEAD
/*import AnaliseEmpresa from "../views/AnaliseEmpresa.vue";
import AnaliseSugestao from "../views/AnaliseSugestao.vue";
import OvosLista from "../views/OvosLista.vue";*/
=======
//import AnaliseEmpresa from "../views/AnaliseEmpresa.vue";
//import AnaliseSugestao from "../views/AnaliseSugestao.vue";
import OvosLista from "../views/OvosLista.vue";
>>>>>>> 0dcf23acb9518d96441f38c2a7b9ef18e834ba81

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomeIs,

  },
  {
  path: "/cadastroempresa",
  name: "Cadastro de Empresa",
  component: CadastroEmpresa,
},
{
  path: "/cadastrocliente",
  name: "Formulário Cliente",
  component: CadastroCliente,
},
<<<<<<< HEAD
/*
=======
//{
//  path: "/analiseempresa",
//  name: "Análise Empresa",
//  component: AnaliseEmpresa,
//},
//{
//  path: "/analisesugestao",
//  name: "Análise Sugestão",
//  component: AnaliseSugestao,
//}, 
>>>>>>> 0dcf23acb9518d96441f38c2a7b9ef18e834ba81
{
  path: "/OvosLista",
  name: "Lista de Ovos",
  component: OvosLista,
},*/
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
