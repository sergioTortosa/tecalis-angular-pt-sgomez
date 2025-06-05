import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from './containers/stores/stores.component';
import { StoreDetailComponent } from './containers/store-detail/store-detail.component';


const routes: Routes = [
  { path: '', component: StoresComponent },
  { path: ':id', component: StoreDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule {}