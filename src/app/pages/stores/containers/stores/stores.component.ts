import { Component } from '@angular/core';

import { Store } from 'src/app/models/rawg.interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StoreManager } from '../../managers/store.manager';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent {
  stores$: Observable<Store[]>;

  constructor(private storeManager: StoreManager, private router: Router) {
    this.stores$ = this.storeManager.getAllStores();
  }

  onStoreClick(store: Store): void {
    this.router.navigate(['/stores', store.id]);
  }
}
