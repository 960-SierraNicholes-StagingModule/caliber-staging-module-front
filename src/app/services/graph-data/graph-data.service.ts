import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SpiderData } from '../../models/spider-data/spider-data.model';
import * as Collections from 'typescript-collections';
import { map } from 'rxjs/operators';

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

    getSpiderDataByBatch(batchId: string): [string, number][] {
        let averages = new Collections.Dictionary<string, number[]>();
        let data = new Array();

        this.http.get(this.caliberUrl + '/grades/reports/' + batchId + '/spider/').pipe(map(resp => resp as SpiderData[])).subscribe(resp => {data = resp});
        // await this.http.get(this.caliberUrl + '/grades/reports/' + batchId + '/spider/').pipe(map(resp => resp as SpiderData[])).toPromise().then(resp => {data = resp});

        data.forEach(spider => {if(!averages.containsKey(spider.assessmentType)) {
                                    averages.setValue(spider.assessmentType, [spider.score]);
                                } else {
                                    averages.getValue(spider.assessmentType).push(spider.score);
                                }
        });

        let means = new Array();

        averages.forEach((key, value) => {
            let sum = 0;
            
            for (let i of value) {sum += i;}
            let mean = sum / value.length;
            
            means.push([key, mean]);
        });

        return means;
    }
}
