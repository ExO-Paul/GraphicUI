import { Injectable } from '@angular/core';
import {ENDPOINTS} from "../config/endpoints";
import {GraphData} from "../model/GraphData";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise'

@Injectable()
export class StatsService {

  constructor(private http: Http) { }

  getAll(path: string): Promise<GraphData> {
    const url = ENDPOINTS.find(endpoint => endpoint.route.path === path).apiUrl;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as GraphData)
      .catch(this.handleError)
  }

  //TODO: handle errors properly
  private handleError(error: any): Promise<any> {
    console.error("An error occured:", error);
    return Promise.reject(error.message || error);
  }
}
