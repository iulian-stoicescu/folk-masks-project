import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolkMasksAppConstants } from './common/folk-masks-app-constants';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path: FolkMasksAppConstants.HOME_PATH, component: HomePageComponent},
  {path: '**', redirectTo: FolkMasksAppConstants.HOME_PATH}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
