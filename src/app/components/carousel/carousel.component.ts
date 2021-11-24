import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public imagePathPrefix = '../assets/images/';

  carouselImages: string[];

  responsiveOptions: any[];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1520px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.carouselImages = ['carousel-1.png', 'carousel-2.png', 'carousel-3.png', 'carousel-4.png', 'carousel-5.png',
      'carousel-6.png', 'carousel-7.png', 'carousel-8.png', 'carousel-9.png'];
  }

  ngOnInit(): void {
  }

}
