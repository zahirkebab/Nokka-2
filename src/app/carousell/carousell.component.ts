import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-carousell',
  standalone: true,
	imports: [NgbCarouselModule, NgIf],
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.scss']
})
export class CarousellComponent {
  images = [944, 1011, 1].map((n) => `https://picsum.photos/id/${n}/1800/900`);
}
