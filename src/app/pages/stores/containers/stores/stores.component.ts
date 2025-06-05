import { Component } from '@angular/core';

import { Store } from 'src/app/models/rawg.interfaces';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StoreManager } from '../../managers/store.manager';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent {
  stores$: Observable<Store[]>;
  private searchTerm = new BehaviorSubject('');

  constructor(private storeManager: StoreManager, private router: Router) {
     const allStores$ = this.storeManager.getAllStores();

    this.stores$ = combineLatest([
      allStores$,
      this.searchTerm.pipe(startWith(''))
    ]).pipe(
      map(([stores, term]) =>
        stores.filter(store =>
          store.name.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }

  onStoreClick(store: Store): void {
    this.router.navigate(['/stores', store.id]);
  }

  onSearch(term: string) {
    this.searchTerm.next(term);
  }

}
