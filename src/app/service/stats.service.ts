import {Injectable} from '@angular/core';
import {ENDPOINTS} from '../config/endpoints';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Data} from "../model/Data";

@Injectable()
export class StatsService {

  constructor(private http: Http) {
  }

  getAll(path: string): Promise<Data> {
    const url = ENDPOINTS.find(endpoint => endpoint.route.path === path).apiUrl;

    return this.http.get(url)
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json() as Data;
      })
      .catch(this.handleError);
  }

  //TODO: handle errors properly
  private handleError(error: any): Promise<any> {
    console.error('An error occured:', error);
    return Promise.reject(error.message || error);
  }
}
