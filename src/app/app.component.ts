import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "Neat Tree",
      imgUrl : 'assets/tree.jpeg',
      username: 'nature',
      content:  'Saw this awesome tree during my hike today.'
    
    },
    {
      title: "Snowy Mountain",
      imgUrl : 'assets/mountain.jpeg',
      username: 'mountain_lover',
      content:  'Top of the world feels like heaven.'
    
    },
    {
      title: "Mountain  Biking",
      imgUrl : 'assets/biking.jpeg',
      username: 'rider46',
      content:  'I did some biking today.'
    
    },
    {
      title: "Snowy Mountain",
      imgUrl : 'assets/mountain.jpeg',
      username: 'mountain_lover',
      content:  'Top of the world feels like heaven.'
    
    }
  ];

}
