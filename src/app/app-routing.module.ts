import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {GraphComponent} from "./graph/graph.component";
import {ENDPOINTS} from "./config/endpoints";

export const ROUTES: Routes = ENDPOINTS.map(endpoint => endpoint.route);

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

