import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { OurAppComponent } from './components/our-app/our-app.component';
import { ReviewComponent } from './components/review/review.component';
import { TeamComponent } from './components/team/team.component';
import { CounterComponent } from './components/counter/counter.component';
import { BlogComponent } from './components/blog/blog.component';
import { BrandComponent } from './components/brand/brand.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestContactComponent } from './components/test-contact/test-contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SwiperModule } from 'swiper/angular';
import { TestApiComponent } from './components/test-api/test-api.component';
import { CountUpModule } from 'ngx-countup';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    ServiceComponent,
    OurAppComponent,
    ReviewComponent,
    TeamComponent,
    CounterComponent,
    BlogComponent,
    BrandComponent,
    OurWorkComponent,
    ContactComponent,
    BannerComponent,
    BlogDetailsComponent,
    TestContactComponent,
    GalleryComponent,
    TestApiComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
    CountUpModule,
    NgxUiLoaderModule,
    Ng2SearchPipeModule
  ]
})
export class HomeModule { }
