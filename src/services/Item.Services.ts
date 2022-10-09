import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemURL, ConfigItem } from './config';
@Injectable()
export class ItemServices {
  constructor(private http: HttpClient) {}
  GetAllItem(): Observable<Array<any>> {
    return this.http.get<Array<any>>(ItemURL + ConfigItem.GetAll);
  }
}
