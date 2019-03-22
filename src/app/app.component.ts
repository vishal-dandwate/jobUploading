import { Component, ViewChild, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';

import { PostService } from './services/post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked, OnDestroy, OnInit {
  jobForm: FormGroup;
  title = 'ngCrud';
  jobs: any;
  job: any;
  Data: any;
  public model: any = { };
  constructor(private fb: FormBuilder, private _service: PostService) {
    this.jobForm = this.fb.group({
      position: ['', [Validators.required]],
      company: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      place: ['', [Validators.required]],
      technology: ['', [Validators.required]],
      note: ['', [Validators.required]]
    })
  }
  handleSubmit(form): any {
    if (! this.model.id) {
      return this._service.postJob(form).subscribe((res) => {
        console.log(res);
      });
    } else {
      return this._service.updateJob(form, this.model.id).subscribe((res) => {
        console.log(res);
      })
    }
    console.log(this.model.id)
  }
  handleUpdate(job): any {
   
    this.model = {
     ...job
    }
   
    this.jobForm.patchValue({
      position: job.position,
      company: job.company,
      experience: job.experience,
      place: job.place,
      technology: job.technology,
      note: job.note
    });

  }
  ngAfterContentChecked() {
    this._service.getJob().subscribe((res) => {
      this.jobs = res;
    })
  }
  handleDelete(id): any {
    console.log(id)
    return this._service.deleteJob(id).subscribe((res) => {
      console.log(res);
    })
  }
  ngOnDestroy() {

  }
  ngOnInit() {
    
  }
}
