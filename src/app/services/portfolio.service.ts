import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Portfolio} from './portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private httpClient: HttpClient) {
  }

  get(): Observable<Portfolio[]> {
    return this.httpClient.get<Portfolio[]>(environment.apiUrl);
  }
}
