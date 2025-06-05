import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { StoreDetail, GamePreview } from 'src/app/models/rawg.interfaces';
import { BsModalService } from 'ngx-bootstrap/modal';
import { StoreManager } from '../../managers/store.manager';
import { GameModalComponent } from '../../components/game-modal/game-modal.component';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss']
})
export class StoreDetailComponent {
  store$!: Observable<StoreDetail>;
  games$!: Observable<GamePreview[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storeManager: StoreManager,
    private modalService: BsModalService
  ) {
    this.store$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => {
        if (!id) {
          this.router.navigate(['/stores']);
          return EMPTY;
        }
        return this.storeManager.getStoreDetails(id).pipe(
          catchError(() => {
            this.router.navigate(['/stores']);
            return EMPTY;
          })
        );
      })
    );

    this.games$ = this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => {
        if (!id) return EMPTY;
        return this.storeManager.getGamesForStore(id);
      })
    );

  }


  openGameModal(gameId: number): void {
    const initialState: Partial<GameModalComponent> = { gameId };
    this.modalService.show(GameModalComponent, {
      initialState,
      class: 'modal-dialog-centered modal-md'
    });
  }

}
