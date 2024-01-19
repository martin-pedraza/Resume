import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Resume',
  },
  {
    path: 'Resume',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'Resume/contact',
    loadChildren: () =>
      import('./components/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'Resume/work',
    loadChildren: () =>
      import('./components/work/work.module').then((m) => m.WorkModule),
  },
  {
    path: 'Resume/tech',
    loadChildren: () =>
      import('./components/tech/tech.module').then((m) => m.TechModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
