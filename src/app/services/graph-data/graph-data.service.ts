import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SpiderData } from '../../models/spider-data/spider-data.model';

@Injectable({
    providedIn: 'root',
  })
export class GraphDataService {
    caliberUrl: string;

    constructor( private http: HttpClient ) {
        this.caliberUrl = "https://caliber2-mock.revaturelabs.com/mock/evaluation";
    }

    getSpiderDataByBatchAndAssociate(batchId: string, associateEmail: string): Observable<SpiderData[]> {
        return this.http.get<SpiderData[]>(this.caliberUrl + '/grades/reports/' + batchId + '/spider/' + associateEmail);
    }
}
