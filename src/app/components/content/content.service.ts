import { Injectable } from '@angular/core';
import { BaseService } from '../../common/services/base-service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ContentService extends BaseService {
	constructor(private http: HttpClient) { super() }

	private extractData(res: Response) {
		let body = res;
		return body || {};
	}

	getDataSourcesByID(dataSourceId): Observable<Object> {
		return this.http.get(`${this.apiUrl}/datasources/` + dataSourceId + `/data`).pipe(
			map(this.extractData));
	}

	getDataSources(): Observable<Object> {
		return this.http.get(`${this.apiUrl}/datasources`).pipe(
			map(this.extractData));
	}

	getSummaryByDataSourcesID(dataSourceId, stageId): Observable<Object> {
		return this.http.get(`${this.apiUrl}/datasources/` + dataSourceId + `/data/summary?stage=` + stageId).pipe(
			map(this.extractData));
	}
}
