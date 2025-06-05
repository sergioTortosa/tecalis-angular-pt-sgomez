import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresRoutingModule } from './stores-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreManager } from './managers/store.manager';
import { StoreService } from './services/store.service';
import { GameComponent } from './components/game/game.component';
import { StoreCardComponent } from './components/store-card/store-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { GameModalComponent } from 'src/app/pages/stores/components/game-modal/game-modal.component';
import { StoresComponent } from './containers/stores/stores.component';
import { StoreDetailComponent } from './containers/store-detail/store-detail.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';



@NgModule({
 declarations: [
  StoresComponent,
  StoreDetailComponent,
  GameComponent,
  GameModalComponent,
  StoreCardComponent
],

  imports: [
    CommonModule,
    FormsModule,
    StoresRoutingModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    ProgressbarModule.forRoot(),
  ],
  providers: [StoreService, StoreManager],
})
export class StoresModule { }