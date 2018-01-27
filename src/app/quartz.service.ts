import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment.prod';
import { JobDescriptor } from './job-descriptor';
import 'rxjs/add/observable/of';

@Injectable()
export class QuartzService {
  private resourceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  createJobForGroup(group: string, jobDescriptor: any): Observable<any> {
      const url = `${this.resourceUrl}/groups/${group}/jobs`;
      return this.http.post(url, jobDescriptor);
  }

  findJobsForGroup(group: string): Observable<JobDescriptor[]> {
    const url = `${this.resourceUrl}/groups/${group}/jobs`;
    return this.http.get<JobDescriptor[]>(url);
  }

  findAllJobs(): Observable<JobDescriptor[]> {
    return this.http.get<JobDescriptor[]>(this.resourceUrl + '/jobs');
  }
}
