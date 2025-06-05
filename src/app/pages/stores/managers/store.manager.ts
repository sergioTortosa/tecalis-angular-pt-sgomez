import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { StoreService } from '../services/store.service';
import { GameDetail, GamePreview, Store, StoreDetail } from 'src/app/models/rawg.interfaces';

@Injectable()
export class StoreManager {
  private stores$!: Observable<Store[]>;

  constructor(private storeService: StoreService) { }

  getAllStores(): Observable<Store[]> {
    if (!this.stores$) {
      this.stores$ = this.storeService.getStores().pipe(
        map(response => response.results),
        shareReplay(1)
      );
    }
    return this.stores$;
  }

  getStoreDetails(id: string): Observable<StoreDetail> {
    return this.storeService.getStoreById(id);
  }

  getGameDetails(id: number): Observable<GameDetail> {
    return this.storeService.getGameById(id);
  }

  getGamesForStore(storeId: number): Observable<GamePreview[]> {
    return this.getAllStores().pipe(
      map(stores => {
        const store = stores.find(store => store.id === storeId);
        if (!store) {
          throw new Error(`Store with ID ${storeId} not found`);
        }
        return store.games;
      })
    );
  }
}
