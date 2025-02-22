import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  ngOnInit(): void { }

  blogPost = {
    title: '',
    body: '',
    category: '',
    position: 0,
    date_posted: new Date()
  };

  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dashboardService: DashboardService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.blogPost.position = this.dashboardService.dataLength();
    this.event.emit({ data: this.blogPost });
    this.dialogRef.close();
  }

  categories = this.dashboardService.getCategories();
}
