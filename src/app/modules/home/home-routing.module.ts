import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestApiComponent } from './components/test-api/test-api.component';
import { TestContactComponent } from './components/test-contact/test-contact.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, children: [
      {
        path: '',
        component: HomeComponent
      },
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blog-details',
    component: BlogDetailsComponent
  },
  {
    path: 'test-contact',
    component: TestContactComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'test-api',
    component: TestApiComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
