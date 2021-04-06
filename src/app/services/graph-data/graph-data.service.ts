import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SpiderData } from '../../models/spider-data/spider-data.model';
import * as Collections from 'typescript-collections';

@Injectable({
    providedIn: 'root',
  })
export class GraphDataService {
    caliberUrl: string;

    constructor( private http: HttpClient ) {
        this.caliberUrl = "https://caliber2-mock.revaturelabs.com/mock/evaluation";
    }

    getBarDataByAssociate(associateEmail: string): Observable<any> {
        return this.http.get<SpiderData[]>(this.caliberUrl + '/grades/reports/individual/' + associateEmail);
    }

    getSpiderDataByBatchAndAssociate(batchId: string, associateEmail: string): Observable<SpiderData[]> {
        return this.http.get<SpiderData[]>(this.caliberUrl + '/grades/reports/' + batchId + '/spider/' + associateEmail);
    }

    async getSpiderDataByBatch(batchId: string): Promise<any> {
        let averages = new Collections.Dictionary<string, number[]>();
        let data = new Array();
        return this.getWholeBatchPromise(batchId).then((res) => {
            data = res as SpiderData[];
            data.forEach(spider => {if(!averages.containsKey(spider.assessmentType)) {
                                        averages.setValue(spider.assessmentType, [spider.score]);
                                    } else {
                                        averages.getValue(spider.assessmentType).push(spider.score);
                                    }
            });
            let means = new Array();

            averages.forEach((key, value) => {
                let sum = 0;
                value.forEach(entry => sum += entry);

                means.push([key, sum / value.length]);
            });
            return means;
        });
    }

    private getWholeBatchPromise(batchId: string): Promise<any> {
        return new Promise(resolve=>{
            this.http.get(this.caliberUrl + '/grades/reports/' + batchId + '/spider/').subscribe(
                res => {
                    resolve(res);
                }
            )
        });
    }
}
