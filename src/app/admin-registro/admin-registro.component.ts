import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ChildService } from '../services/child.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationDeleteChildComponent } from '../dialog-confirmation-delete-child/dialog-confirmation-delete-child.component';
import { DialogUpdateChildComponent } from '../dialog-update-child/dialog-update-child.component';
@Component({
  selector: 'app-admin-registro',
  templateUrl: './admin-registro.component.html',
  styleUrls: ['./admin-registro.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminRegistroComponent implements OnInit {
  public showLoader: boolean = false;
  childs: any[] = [];
  displayedColumns = ['nombreNino', 'autActividadFisica', 'autMaquillaje', 'autBano', 'autPinturas', 'padAlergiaEnfermedad'];
  expandedElement: any | null;
  editMode: boolean = false;

  constructor(private childService: ChildService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.childService.findAll().subscribe(r => {
      this.childs = r;
    });
  }

  deleteChild(child: any) {
    let dialogRef = this.dialog.open(DialogConfirmationDeleteChildComponent, {
      disableClose: true,
      data: child
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {
        this.showLoader = true; -
          this.childService.deleteById(child.id)
            .then(r => {
              console.log(r);
            })
            .catch(e => {
              console.error(e);
            })
            .finally(() => {
              this.showLoader = false
              this.findAll();
            });
      }
    });
  }

  updateChild(child: any) {
    let dialogRef = this.dialog.open(DialogUpdateChildComponent, {
      disableClose: true,
      data: child
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.update) {
        this.showLoader = true;
        child.observaciones = result.newValue;
        this.childService.update(child.id, child)
          .then(r => {
            console.log(r);
          })
          .catch(e => {
            console.error(e);
          })
          .finally(() => {
            this.showLoader = false
            this.findAll();
          });
      }
    });
  }



}



