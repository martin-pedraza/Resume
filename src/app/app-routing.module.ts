import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common'; 

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./components/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'work',
    loadChildren: () =>
      import('./components/work/work.module').then((m) => m.WorkModule),
  },
  {
    path: 'tech',
    loadChildren: () =>
      import('./components/tech/tech.module').then((m) => m.TechModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/Resume' },
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class AppRoutingModule {}