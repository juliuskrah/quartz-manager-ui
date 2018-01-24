import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment.prod';
import { JobDescriptor } from './job-descriptor';
import 'rxjs/add/observable/of';

const jobs: JobDescriptor[] = [
  new JobDescriptor('dishes', 'tut', 'wash the dishes', 'Do not forget to wash the dishes', ['son@house-duty.com']),
  new JobDescriptor('exam', 'tut', 'prepare for exam', 'Study for end of term exam',
    ['serious-student@school.com'], ['teacher@school.com']),
  new JobDescriptor('invest', 'work', 'invest in stock', 'get stock options from work', ['employee@company.com'])
];

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
    return Observable.of(jobs);
  }
}
