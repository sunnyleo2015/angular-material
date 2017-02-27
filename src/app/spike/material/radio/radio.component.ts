import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  favoriteSeason:string = 'Winter';

  constructor() { }

  ngOnInit() {
  }

}
