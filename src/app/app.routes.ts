import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'personajes',
    title: "Personajes",
    loadComponent: () => import("./pages/personajes-pages/personaje-page/personajes-page.component"),
  },
  {
    path:"editar-personajes/:id",
    title:"Editar Personaje",
    loadComponent: () => import("./pages/personajes-pages/editar-page/editar-page.component")
  },
  {
    path:"crear-personajes",
    title:"Crear Personaje",
    loadComponent: () => import("./pages/personajes-pages/crear-dialog/crear-dialog.component")
  },

  {
    path:'capitulos',
    title: "Capitulos",
    loadComponent: () => import("./pages/capitulos-pages/capitulo-page/capitulos-page.component"),
  },
  {
    path:"editar-capitulos/:id",
    title:"Editar Capitulo",
    loadComponent: () => import("./pages/capitulos-pages/editar-page/editar-page.component")
  },

  {
    path:"crear-capitulos",
    title:"Crear Capitulo",
    loadComponent: () => import("./pages/capitulos-pages/crear-page/crear-page.component")
  },

  {
    path:'series',
    title: "Series",
    loadComponent: () => import("./pages/series-pages/serie-page/series-page.component"),
  },
  {
    path:"editar-series/:id",
    title:"Editar Serie",
    loadComponent: () => import("./pages/series-pages/editar-page/editar-page.component")
  },
  {
    path:"crear-series",
    title:"Crear Serie",
    loadComponent: () => import("./pages/series-pages/crear-page/crear-page.component")
  },

  {
    path:'**',
    redirectTo: 'capitulos',

  }
];
