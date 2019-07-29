import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'login',  pathMatch:'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './auth/user/pages/login/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './auth/user/pages/register/register/register.module#RegisterPageModule' },
  { path: 'detallereporte/:reportid', loadChildren: './detallereporte/detallereporte.module#DetallereportePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
