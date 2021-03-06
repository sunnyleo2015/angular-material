import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  groups = [
    {
      name: 'FORM CONTROLS',
      children: [
        {
          url: './spike/material/checkbox',
          name: 'Checkbox'
        },
        {
          url: './spike/material/input',
          name: 'Input'
        },
        {
          url: './spike/material/radio',
          name: 'Radio button'
        },
        {
          url: './spike/material/select',
          name: 'Select'
        },
        {
          url: './spike/material/slider',
          name: 'Slider'
        },
        {
          url: './spike/material/slider-toggle',
          name: 'Slide Toggle'
        },
      ]
    },
    {
      name: 'NAVIGATION',
      children: [
        {
          url:'./spike/material/mean',
          name:'Mean',
        },
        {
          url:'./spike/material/side-nav',
          name:'Side Nav',
        },
        {
          url:'./spike/material/toolbar',
          name:'Toolbar',
        },
      ]
    },
    {
      name: 'LAYOUT',
      children: [
        {
          url:'./spike/material/list',
          name:'List',
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
