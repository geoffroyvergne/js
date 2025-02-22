import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { AuthService } from '../../../services/auth.service';

import { Observable } from 'rxjs';
//import { filter } from 'rxjs/operators';
import { Post } from './post.model';
import { DataSource } from '@angular/cdk/table';

import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public auth: AuthService, public dialog: MatDialog, private dashboardService: DashboardService) { }

  ngOnInit(): void { }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dashboardService);

  deletePost(id) {
    this.dashboardService.deletePost(id);
    this.dataSource = new PostDataSource(this.dashboardService);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });

    dialogRef.componentInstance.event.subscribe((result) => {
      this.dashboardService.addPost(result.data);
      this.dataSource = new PostDataSource(this.dashboardService);
    });
  }
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DashboardService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
