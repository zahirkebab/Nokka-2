import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nokka-shell',
  templateUrl: './nokka-shell.component.html',
  styleUrls: ['./nokka-shell.component.scss']
})
export class NokkaShellComponent implements OnInit {

  showNavigationArrows = false;
	showNavigationIndicators = false;
	public images: string[] = [];

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
  ngOnInit(): void {
    this.images = [0, 1, 2].map((n) => `https://picsum.photos/id/${n}/900/500`);
    console.log(this.images);
  }



}
