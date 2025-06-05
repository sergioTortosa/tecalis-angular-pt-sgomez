import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GamePreview } from 'src/app/models/rawg.interfaces';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @Input() game!: GamePreview;
  @Output() gameClick = new EventEmitter<number>();

  onClick(): void {
    this.gameClick.emit(this.game.id);
  }
}
