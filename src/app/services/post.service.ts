import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) { }
 
  postJob(jobForm: object): any {
   return this._http.post('http://localhost:8080/job', jobForm)
  }
  getJob(): any {
    return this._http.get('http://localhost:8080/job');
  }
  updateJob(job:any, id: number): any {
    return this._http.put(`http://localhost:8080/job/${id}`, job)
  }
  deleteJob(id: number): any { 
    return this._http.delete(`http://localhost:8080/job/${id}`)
  }
}
