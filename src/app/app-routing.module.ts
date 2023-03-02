
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingGuard } from './guards/landing.guard';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [


  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canLoad: [LandingGuard]
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthguardService]
  },
  {
    path: 'warmup-list',
    loadChildren: () => import('./pages/warmup-list/warmup-list.module').then(m => m.WarmupListPageModule)
  },
  {
    path: 'lowerbody-list',
    loadChildren: () => import('./pages/lowerbody-list/lowerbody-list.module').then(m => m.LowerbodyListPageModule)
  },
  {
    path: 'exercise-page',
    loadChildren: () => import('./pages/exercise-page/exercise-page.module').then( m => m.ExercisePagePageModule)
  },
  {
    path: 'exercise-page/:id',
    loadChildren: () => import('./pages/exercise-page/exercise-page.module').then( m => m.ExercisePagePageModule)
  },
  {
    path: 'upperbody-list',
    loadChildren: () => import('./pages/upperbody-list/upperbody-list.module').then(m => m.UpperbodyListPageModule)
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
 
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
