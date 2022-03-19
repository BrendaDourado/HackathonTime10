import Vue from "vue";
import VueRouter from "vue-router";
import HomeIs from "../views/HomeIs.vue"
import CadastroEmpresa from "../views/CadastroEmpresa.vue";
import CadastroCliente from "../views/CadastroCliente.vue";
<<<<<<< HEAD
//import AnaliseEmpresa from "../views/AnaliseEmpresa.vue";
//import AnaliseSugestao from "../views/AnaliseSugestao.vue";
=======
import AnaliseEmpresa from "../views/AnaliseEmpresa.vue";
import AnaliseSugestao from "../views/AnaliseSugestao.vue";
>>>>>>> 7a89831278146d018de8b982ede8adc9465e6658
import OvosLista from "../views/OvosLista.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomeIs,
  },
  {
<<<<<<< HEAD
  path: "/cadastroempresa",
  name: "Cadastro de Empresa",
  component: CadastroEmpresa,
},
{
  path: "/cadastrocliente",
  name: "Formulário Cliente",
  component: CadastroCliente,
},
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
{
  path: "/OvosLista",
  name: "Lista de Ovos",
  component: OvosLista,
},
=======
    path: "/cadastroempresa",
    name: "Cadastro de Empresa",
    component: CadastroEmpresa,
  },
  {
    path: "/cadastrocliente",
    name: "Formulário Cliente",
    component: CadastroCliente,
  },
  {
    path: "/analiseempresa",
    name: "Análise Empresa",
    component: AnaliseEmpresa,
  },
  {
    path: "/analisesugestao",
    name: "Análise Sugestão",
    component: AnaliseSugestao,
  },
  {
    path: "/ovoslista",
    name: "Lista de Ovos",
    component: OvosLista,
  },
>>>>>>> 7a89831278146d018de8b982ede8adc9465e6658
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
