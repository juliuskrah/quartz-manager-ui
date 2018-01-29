import { MatTableDataSource, MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { QuartzService } from './quartz.service';
import { ModalComponent } from './modal/modal.component';
import { JobDescriptor } from './job-descriptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  jobs: JobDescriptor[];
  displayedColumns = ['name', 'group', 'subject', 'to'];
  dataSource: MatTableDataSource<JobDescriptor>;

  constructor(public dialog: MatDialog, private quartz: QuartzService) {
  }

  ngOnInit() {
    this.quartz.findAllJobs().subscribe(
      data => {
        this.jobs = data;
        // this.dataSource.data = this.jobs;
        this.dataSource = new MatTableDataSource<JobDescriptor>(this.jobs);
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '100%'
    });

    dialogRef.componentInstance.addJob.subscribe((data) => {
      data.to = [data.to];
      this.quartz.createJobForGroup(data.group, data).subscribe(() => {
        this.jobs.push(data);
        this.dataSource.data = this.jobs;
      }
      );
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
