import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'personajes',
    title: "Personajes",
    loadComponent: () => import("./pages/usuarios-page/usuarios-page.component"),
    children:[
      {
        path:"editar/:id",
        title:"Editar Personaje",
        loadComponent: () => import("./pages/editar-page/editar-page.component")
      },
      {
        path:"crear",
        title:"Crear Personaje",
        loadComponent: () => import("./pages/crear-page/crear-page.component")
      },
      {
        path:'**',
        redirectTo: 'personajes',
        pathMatch:"full"
      }
    ]
  },

  //ToDo crear componenetes correspondientes (CAPs con sus hijos , SERIES con sus  hijos)
  // {
  //   path:'capitulos',
  //   title: "Capitulos",
  //   loadComponent: () => import(),
  //   children:[
  //     {
  //       path:"editar/:id",
  //       title:"Editar Capitulo",
  //       loadComponent: () => import()
  //     },
  //     {
  //       path:"crear",
  //       title:"Crear Capitulo",
  //       loadComponent: () => import()
  //     },
  //     {
  //       path:'**',
  //       redirectTo: 'capitulos',
  //       pathMatch:"full"
  //     }
  //   ]
  // },
  // {
  //   path:'series',
  //   title: "Series",
  //   loadComponent: () => import(),
  //   children:[
  //     {
  //       path:"editar/:id",
  //       title:"Editar Serie",
  //       loadComponent: () => import()
  //     },
  //     {
  //       path:"crear",
  //       title:"Crear Serie",
  //       loadComponent: () => import()
  //     },
  //     {
  //       path:'**',
  //       redirectTo: 'series',
  //       pathMatch:"full"
  //     }
  //   ]
  // },

  {
    path:'**',
    redirectTo: 'capitulos',
    pathMatch:"full"
  }
];
