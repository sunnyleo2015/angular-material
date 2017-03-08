import {Route, RouterModule} from '@angular/router';
import {SpikeComponent} from './spike.component';
import {MaterialComponent} from  './material/material.component';
import {CheckboxComponent} from './material/checkbox/checkbox.component';
import {InputComponent} from './material/input/input.component';
import {RadioComponent} from './material/radio/radio.component';
import {SelectComponent} from './material/select/select.component';
import {SliderComponent} from './material/slider/slider.component';
import {SlideToggleComponent} from './material/slide-toggle/slide-toggle.component';
import {MeanComponent} from './material/mean/mean.component';
import {SideNavComponent} from './material/side-nav/side-nav.component';
import {ToolbarComponent} from './material/toolbar/toolbar.component';
import {ListComponent} from './material/list/list.component';

const routes: Route[] = [
  {
    path: '',
    component: SpikeComponent,
    children: [
      {
        path: 'material',
        component: MaterialComponent,
      },
      {
        path: 'material/checkbox',
        component: CheckboxComponent,
      },
      {
        path: 'material/input',
        component: InputComponent,
      },
      {
        path: 'material/radio',
        component: RadioComponent,
      },
      {
        path: 'material/select',
        component: SelectComponent,
      },
      {
        path: 'material/slider',
        component: SliderComponent,
      },
      {
        path: 'material/slider-toggle',
        component: SlideToggleComponent,
      },
      {
        path: 'material/mean',
        component: MeanComponent,
      },
      {
        path: 'material/side-nav',
        component: SideNavComponent,
      },
      {
        path: 'material/toolbar',
        component: ToolbarComponent
      },
      {
        path: 'material/list',
        component: ListComponent,
      }
    ],
  },
];
export const routing = RouterModule.forChild(routes);
