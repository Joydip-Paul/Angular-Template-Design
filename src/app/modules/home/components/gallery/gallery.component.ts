import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectCoverflow, EffectFlip, Pagination, SwiperOptions, Navigation, Mousewheel, Keyboard} from "swiper";
SwiperCore.use([Navigation, EffectCoverflow, EffectFlip, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  id: any = "blogs"
  bannerTitle = "Gallery"
  path1 = ""
  path1Name = "Home"
  constructor() { }
  ngOnInit(): void {
  }
  tabChange(ids: any) {
    this.id = ids;
    console.log(this.id);
  }

  public blogGallerySwiper: SwiperOptions = {
    direction: 'horizontal',
    slidesPerGroup: 1,
    spaceBetween: 30,
    // slidesPerView: 2,
    keyboard: true,
    mousewheel: true,
    speed: 1000,
    scrollbar: false,
    preventClicks: false,
    autoplay: true,
    fadeEffect: {
      crossFade: true
    },
    navigation: { prevEl: '.prev-btn', nextEl: '.next-btn' },
    pagination: true,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      600: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
    }

  };

  public instagramSwiper: SwiperOptions = {
    direction: 'horizontal',
    slidesPerGroup: 1,
    spaceBetween: 30,
    // slidesPerView: 2,
    keyboard: true,
    mousewheel: true,
    speed: 700,
    scrollbar: true,
    preventClicks: false,
    autoplay: false,
    pagination: true,
    fadeEffect: {
      crossFade: true
    },
    navigation: { prevEl: '.insta-next-btn', nextEl: '.insta-prev-btn' },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      600: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
    }

  };

  public storySwiper: SwiperOptions = {
    direction: 'horizontal',
    slidesPerGroup: 1,
    spaceBetween: 30,
    // slidesPerView: 2,
    keyboard: true,
    mousewheel: true,
    speed: 700,
    scrollbar: true,
    preventClicks: false,
    autoplay: true,
    pagination: true,
    fadeEffect: {
      crossFade: true
    },
    navigation: { prevEl: '.story-next-btn', nextEl: '.story-prev-btn' },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
    }

  };

}
