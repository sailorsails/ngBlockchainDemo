import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Block, LatestBlock} from '../model/block';
import {Transaction} from '../model/transaction';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  
  constructor(private http: HttpClient){

  }
  /**
   * GetLatestBlock: Gets the latest block from the API
   * @param: none
   */
  getLatestBlock():Observable<LatestBlock>{
    var url = `${environment.serviceBaseUrl}/latestblock?cors=true`;
    console.log(url);
     return this.http.get<LatestBlock>(url, httpOptions).pipe(
       tap(),
       catchError(this.handleError<LatestBlock>('getLatestBlock'))
     );
  }
  /**
   * GetBlockByHashId: Gets a specific block from the API by its hash id
   * @param id - hash of the block being searched
   */
  getBlockByHashId(id: String): Observable<Block>{
    var url = `${environment.serviceBaseUrl}/rawblock/${id}/?cors=true`;
    return this.http.get<Block>(url, httpOptions)
    .pipe(
       tap(),
      catchError(this.handleError<Block>('getBlockByHashId'))
    );
  }
  /**
   * GetTransationDetailByHashId - Gets a specific transaction detail from the API
   * @param id - hash of the transaction
   */
  getTransactionDetailByHashId(id: String): Observable<Transaction>{
    var url = `${environment.serviceBaseUrl}/rawtx/${id}?cors=true`;
    return this.http.get<Transaction>(url, httpOptions)
    .pipe(
      tap(),
      catchError(this.handleError<Transaction>('getTransactionDetailByHashId'))
      );
  }

      /**
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); // log to console instead
     
        return of(result as T);
      };
    }
}
