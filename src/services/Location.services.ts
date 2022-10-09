import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TbLocation } from 'src/interfaces/Location.interface';
import { ConfigLocation } from './config';

@Injectable()
export class LocationServices {
  headers: any = '';
  constructor(private http: HttpClient) {
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
  }
  GetAll(): Observable<Array<TbLocation>> {
    return this.http
      .get<Array<TbLocation>>(ConfigLocation.URL + ConfigLocation.GetAll)
      .pipe(catchError(this.handleError));
  }

  GetById(id: number): Observable<TbLocation> {
    if (id == 0) {
      // throw error
    }
    let data = this.http
      .get<TbLocation>(ConfigLocation.URL + ConfigLocation.GetById + '/' + id)
      .pipe(catchError(this.handleError));
    return data;
  }

  GetByName(name: string): Observable<TbLocation> {
    let params = new HttpParams().set('name', name);
    return this.http
      .get<TbLocation>(ConfigLocation.URL + ConfigLocation.GetByName, {
        params,
      })
      .pipe(catchError(this.handleError));
  }
  CheckByName(name: string): Observable<TbLocation> {
    let params = new HttpParams().set('name', name);
    return this.http
      .get<TbLocation>(ConfigLocation.URL + ConfigLocation.CheckByName, {
        params,
      })
      .pipe(catchError(this.handleError));
  }
  Edit(Location: TbLocation): Observable<TbLocation> {
    let body: string = JSON.stringify(Location) as string;
    return this.http
      .post<TbLocation>(ConfigLocation.URL, body, {
        headers: this.headers,
      })
      .pipe(catchError(this.handleError));
  }
  Update(id: number, Location: TbLocation): Observable<TbLocation> {
    console.log('update');
    return this.http
      .put<TbLocation>(ConfigLocation.URL + '/' + id, Location, {
        headers: this.headers,
      })
      .pipe(catchError(this.handleError));
  }
  Delete(id: number): Observable<TbLocation> {
    return this.http
      .delete<TbLocation>(ConfigLocation.URL + '/' + id, {
        headers: this.headers,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
