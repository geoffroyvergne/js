import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NotificationService} from '../common/service/notification.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User, UsersContainer} from './user.modele';
import {UserService} from './user.service';
import {UserAddEditComponent} from './addedit/user.addedit.component';
import {ConfirmationComponent} from '../common/confirmation/confirmation.component';
import {LocalDataSource, ViewCell} from 'ng2-smart-table';
import {Http} from '@angular/http';
import {DynamicUserServiceTable} from './dynamic.user.service.table';
import {StaticUserServiceTable} from './static.user.service.table';

@Component({
  selector: 'app-boolean-view',
  template: `<i [ngClass]="renderValue | boolean"></i>`,
})
export class BooleanViewComponent implements ViewCell, OnInit {
  renderValue: boolean;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = Boolean(this.value);
  }
}

@Component({
  selector: 'app-user',
  providers: [ UserService, DynamicUserServiceTable, StaticUserServiceTable ],
  entryComponents: [BooleanViewComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // private pageLimits: number[] = [5, 10, 15];

  private settings: Object = {
    mode: 'external',
    // actions: false,
    actions: { add: false, columnTitle: '' },
    edit: {editButtonContent: '<i class="btn btn-info fa fa-pencil-square-o" />'},
    'delete': {deleteButtonContent: '<i class="btn btn-danger fa fa-trash" />'},
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      login: {
        title: 'Login',
        type: 'text'
      },
      role: {
        title: 'Role',
        type: 'text',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              {value: 'ROLE_ADMIN', title: 'ROLE_ADMIN'},
              {value: 'ROLE_USER', title: 'ROLE_USER'},
              {value: 'ROLE_OPERATOR', title: 'ROLE_OPERATOR'},
              {value: 'ROLE_GUEST', title: 'ROLE_GUEST'}
            ]
          }
        }
      },
      enabled: {
        title: 'Enabled',
        type: 'custom',
        filter: {
          type: 'checkbox',
          config: {
            true: 'true',
            false: 'false',
            resetText: 'clear',
          }
        },
        renderComponent: BooleanViewComponent
      },
    },
    pager: {perPage: 5}
  };

  constructor(private userService: UserService, private modalService: NgbModal,
              private notificationService: NotificationService,
              // private source: StaticUserServiceTable,
              private source: DynamicUserServiceTable
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  public reload(): void {
    this.getUsers();
  }

  public setPaging(page: number, perPAge: number) {
    this.source.setPaging(page, perPAge, true);
  }

  public getUsers(): void {
    this.source.initData();
  }

  public onAddEdit(event: any) {
    this.addEditUser(event.data);
  }

  public addEditUser(user?: User): void {
    let newUser = false;
    if (!user) {
      newUser = true;
      user = new User();
      user.enabled = false;
    }

    const modalRef = this.modalService.open(UserAddEditComponent);
    modalRef.componentInstance.user = user;

    modalRef.result.then((result) => {
      if (result) {
        this.reload();
      }
    }, (reason) => { });
  }

  public onDelete(event: any) {
    this.deleteUser(event.data);
  }

  public deleteUser(user?: User) {
    const modalRef = this.modalService.open(ConfirmationComponent);
    modalRef.componentInstance.name = user.login;
    modalRef.componentInstance.id = user.id;

    modalRef.result.then((result) => {
      const doDelete: boolean = result;
      if (doDelete) {
        const url = this.userService.httpService.getBaseUrl() + '/user/' + user.id;
        this.userService.deleteUser(url).then(status => {

          this.reload();
        }).catch(error => {

        });
      }
    }, (reason) => { });

  }

  onSearch(query: string = '') {

  }
}
