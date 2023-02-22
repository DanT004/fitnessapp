import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingGuard } from './guards/landing.guard';

const routes: Routes = [
  
  
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canLoad: [LandingGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'prev-exe',
    loadChildren: () => import('./pages/prev-exe/prev-exe.module').then( m => m.PrevExePageModule)
  },
  {
    path: 'prev-list',
    loadChildren: () => import('./pages/prev-list/prev-list.module').then( m => m.PrevListPageModule)
  },
  {
    path: 'exercise-list',
    loadChildren: () => import('./pages/exercise-list/exercise-list.module').then( m => m.ExerciseListPageModule)
  },
  {
    path: 'warmup-list',
    loadChildren: () => import('./pages/warmup-list/warmup-list.module').then( m => m.WarmupListPageModule)
  },
  {
    path: 'lowerbody-list',
    loadChildren: () => import('./pages/lowerbody-list/lowerbody-list.module').then( m => m.LowerbodyListPageModule)
  },
  {
    path: 'upperbody-list',
    loadChildren: () => import('./pages/upperbody-list/upperbody-list.module').then( m => m.UpperbodyListPageModule)
  },
  
  {
    path:'',
    redirectTo: '/login',
    pathMatch:'full'
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
