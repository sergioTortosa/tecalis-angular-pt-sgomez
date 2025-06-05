import { BsModalRef } from "ngx-bootstrap/modal";
import { StoreManager } from "../../managers/store.manager";
import { GameDetail } from "src/app/models/rawg.interfaces";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.component.html',
  styleUrls: ['./game-modal.component.scss']
})

export class GameModalComponent implements OnInit {
  public gameId!: number;
  game!: GameDetail;
  imageUrls: string[] = [];
  @ViewChild('descEl') descEl!: ElementRef;
  isExpanded = false;
  shouldShowToggle = true;

  constructor(
    public bsModalRef: BsModalRef,
    private storeManager: StoreManager
  ) { }

  ngOnInit(): void {
    if (this.gameId) {
      this.storeManager.getGameDetails(this.gameId).subscribe(game => {
        this.game = game;
        this.imageUrls = [
          game.background_image,
          game.background_image_additional
        ].filter(Boolean);
      });
    }
  }

  toggleDescription() {
    this.isExpanded = !this.isExpanded;
  }

  close(): void {
    this.bsModalRef.hide();
  }
}
