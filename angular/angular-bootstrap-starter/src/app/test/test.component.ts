import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../common/service/notification.service';
import {LoadingBarService} from '../common/service/loading.bar.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public loading = false;
  public model: any;
  closeResult: string;

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv'
    },

    // ... list of items

    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz'
    }
  ];

  constructor(private notificationService: NotificationService, private loadingBarService: LoadingBarService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.loadingBarService.complete();
  }

  public d(): void {}

  showSuccess() {
    this.notificationService.success('Message', 'Title');
  }

  toggleLoading() {
    this.loading = ! this.loading;
  }

  startLoading() {
    this.loadingBarService.start();
  }

  stopLoading() {
    this.loadingBarService.stop();
  }

  completeLoading() {
    this.loadingBarService.complete();
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  /*loginModal() {
    const modalRef = this.modalService.open(AuthComponent);
    modalRef.componentInstance.isModal = true;
    modalRef.result.then((result) => { }, (reason) => { });
  } */



}
