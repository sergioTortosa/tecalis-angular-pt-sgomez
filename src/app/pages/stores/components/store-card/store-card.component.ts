import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/app/models/rawg.interfaces';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent {
  @Input() store!: Store;
  @Output() cardClick = new EventEmitter<number>();

  getStoreUrl(): string {
    return this.store.domain.startsWith('http')
      ? this.store.domain
      : 'https://' + this.store.domain;
  }

  onCardClick(event: MouseEvent): void {
    this.cardClick.emit(this.store.id);
  }
}
