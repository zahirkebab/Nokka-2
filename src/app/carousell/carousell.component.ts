import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-carousell',
  standalone: true,
	imports: [NgbCarouselModule, NgIf],
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.scss']
})

export class CarousellComponent {

  images = [1, 2, 3].map((n) => `C:/Users/wojte/Nokka-2/src/app/carousell/images/room${n}.jpg`);
}
