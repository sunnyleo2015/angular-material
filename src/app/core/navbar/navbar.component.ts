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
          url: '',
          name: 'Radio button'
        },
        {
          url: '',
          name: 'Select'
        },
        {
          url: '',
          name: 'Slider'
        },
        {
          url: '',
          name: 'Slide button'
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
