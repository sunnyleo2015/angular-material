import {Route, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
const routes: Route[] = [
  {
    path: 'spike',
    loadChildren: './spike/spike.module#SpikeModule',
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
