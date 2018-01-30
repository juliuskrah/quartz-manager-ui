import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { JobDescriptor } from './job-descriptor';

@Injectable()
export class QuartzService {
  private resourceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  createJobForGroup(group: string, jobDescriptor: any): Observable<any> {
      const url = `${this.resourceUrl}/groups/${group}/jobs`;
      return this.http.post(url, jobDescriptor);
  }

  findAllJobs(): Observable<JobDescriptor[]> {
    return this.http.get<JobDescriptor[]>(this.resourceUrl + '/jobs');
  }
}
