import { Component, OnInit } from '@angular/core';
import { Column, GridOption } from 'angular-slickgrid';
import { ContentService } from '../content/content.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'zetta-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  columnDefinitions: Column[];
  gridOptions: GridOption;
  dataset: any[];
  gridReady: boolean = false;

  constructor(public contentSvc: ContentService) { }

  ngOnInit() {
    this.gridOptions = {
      enableAutoResize: false,
      enableSorting: true
    };
    this.getProducts();
  }

  getColumns(data): IcolumnDefinitions[] {
    let columnDef: IcolumnDefinitions[] = [];
    data.availablecolumns.map(d => columnDef.push(new IcolumnDefinitions(d.physicalname, d.displayname, d.physicalname)));
    return columnDef;
  }

  getProducts() {
    this.contentSvc.getDataSourcesByID(1).subscribe((data: any) => {
      this.columnDefinitions = Array.from(this.getColumns(data));
      for (let i = 0; i < data.currentpage.length; i++) {
        data.currentpage[i].id = i;
      }
      this.dataset = Array.from(data.currentpage);
      this.gridReady = true;
    });
  }
}

export class IcolumnDefinitions {
  id: string;
  name: string;
  field: string;
  sortable: boolean = true;
  constructor(id: string, name: string, field: string) {
    this.id = id;
    this.name = name;
    this.field = field;
  }
}