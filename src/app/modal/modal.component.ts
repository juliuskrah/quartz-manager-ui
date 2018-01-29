import { Component, EventEmitter, Output } from '@angular/core';
import { JobDescriptor } from '../job-descriptor';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  job: JobDescriptor = new JobDescriptor();

  @Output()
  addJob: EventEmitter<JobDescriptor> = new EventEmitter();

  onCreateJob(job: JobDescriptor) {
    this.addJob.emit(job);
  }
}
