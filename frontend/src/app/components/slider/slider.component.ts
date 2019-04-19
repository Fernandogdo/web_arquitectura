import {Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  // styleUrls: ['./slider.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class SliderComponent{

  // showNavigationArrows = false;
  // showNavigationIndicators = false;
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor() {
    // customize default values of carousels used by this component tree
   
  }

}
