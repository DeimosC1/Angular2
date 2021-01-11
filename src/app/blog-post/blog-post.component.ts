import {Component, OnInit} from '@angular/core';

interface IBlogPost {
  title: string;
  body:string;
  showForm:boolean;

}

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent{
title = 'why';

posts: IBlogPost[] = [
  {title:'blog1', body:'why',showForm:false},
  {title:'blog2', body:'why',showForm:false}


];


}

