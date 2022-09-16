import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  bannerTitle = "Blog Details"
  path1 = ""
  path1Name = "Home"
  public now: Date = new Date();
  curDate = new Date();
  searchText: any;
  isLoading = true;
  
  constructor(private ngxService: NgxUiLoaderService) {

  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isLoading = false;
    },1000)
  }

  blogPost = [
    {
      id: 1,
      img: 'assets/images/blog/post-7.jpeg',
      title: "Tips To Help You Build Your Social",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet officiis quis odio suscipit dicta quibusdam, perspiciatis aut dolorum repellat asperiores nam! Totam vero quod We are opening a new service mollitia, nobis voluptates consectetur, voluptas debitis tempore, veniam dolores expedita exercitationem nostrum recusandae vel. Incidunt deserunt ea accusamus minus dolore itaque aliquid cum, eum praesentium nihil dolorum. Esse aperiam illo magnam quo suscipit atus consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis accusantium consectetur dignissimos odio sapiente expedita molestiae quam ab nulla."
    },
    {
      id: 2,
      img: 'assets/images/blog/post-9.jpeg',
      title: "Workflow Strategy For E-Shop",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet officiis quis odio suscipit dicta quibusdam, perspiciatis aut dolorum repellat asperiores nam! Totam vero quod mollitia, nobis voluptates consectetur, voluptas debitis tempore, veniam dolores expedita exercitationem nostrum recusandae vel. Incidunt deserunt ea accusamus minus dolore itaque aliquid cum, eum praesentium nihil dolorum. Esse aperiam illo magnam quo suscipit atus consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis accusantium consectetur dignissimos odio sapiente expedita molestiae quam ab nulla."
    },
    {
      id: 3,
      img: 'assets/images/blog/blog-2.jpg',
      title: "How To Become A Developer",
      des: "Lorem ipsum dolor sit amet You Can Search From Everywhere. Tips To Help You Build Your Social consectetur adipisicing elit. Recusandae eveniet officiis quis odio suscipit dicta quibusdam, perspiciatis aut dolorum repellat asperiores nam! Totam vero quod mollitia, nobis voluptates consectetur, voluptas debitis tempore, veniam dolores expedita exercitationem nostrum recusandae vel.Tips To Help You Build Your Social Incidunt deserunt ea accusamus minus dolore itaque aliquid cum, eum praesentium nihil dolorum. Esse aperiam illo magnam quo suscipit atus consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis accusantium consectetur dignissimos odio sapiente expedita molestiae quam ab nulla."
    },
  ]

  recentPost = [
    { id: 1, img: 'assets/images/blog/blog-1.jpg', title: "Tips To Help You Build Your Social", date: "May 4, 2022" },
    { id: 2, img: 'assets/images/blog/blog-2.jpg', title: "We are opening a new service", date: "May 4, 2022" },
    { id: 3, img: 'assets/images/blog/blog-3.jpg', title: "You Can Search From Everywhere.", date: "May 4, 2022" },
  ]

  instagramImg = [
    { img: 'assets/images/blog/blog-3.jpg' },
    { img: 'assets/images/blog/blog-2.jpg' },
    { img: 'assets/images/blog/blog-1.jpg' },
    { img: 'assets/images/blog/blog-5.jpg' },
    { img: 'assets/images/blog/blog-4.jpg' },
    { img: 'assets/images/blog/blog-1.jpg' },
  ]

  blogModal() {
    alert("ok")
  }

}
