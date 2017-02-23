import {Route, RouterModule} from '@angular/router';
import {SpikeComponent} from './spike.component';
import {MaterialComponent} from  './material/material.component';
import {CheckboxComponent} from './material/checkbox/checkbox.component';
import {InputComponent} from './material/input/input.component';

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
      }
    ],
  },
];
export const routing = RouterModule.forChild(routes);
