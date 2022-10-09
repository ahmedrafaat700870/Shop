import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInvoice } from 'src/interfaces/Invoice.inerface';
import { IItem } from 'src/interfaces/item.interface';
import { ConfigItem, ItemURL } from './config';
// import { catchError } from 'rxjs/operators';
@Injectable()
export class InvoiceServices {
  constructor(private http: HttpClient) {}
  GetById(id: number): Observable<any> {
    return this.http.get<any>('');
  }

  GetAll(): Observable<Array<IItem>> {
    const url: string = ItemURL + ConfigItem.GetAll;
    console.log(url);
    return this.http.get<Array<IItem>>(url);
  }
}
