import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import DataDummy from '../../assets/DataDummy.json';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface EmployeeData{
  username:string;
  firstName:string;
  lastName:string;
  email:string;
  birthDate:string;
  basicSalary:number;
  status:string;
  group:string;
  description:string;
}

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  filterUsername = new FormControl('');
  filterGroup = new FormControl('');
  filterValues = {
    username:'',
    group:''
  };

  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 
  'birthDate', 'basicSalary', 'status', 'group', 'description', 'action'];
  
  dataSource: MatTableDataSource<EmployeeData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource(DataDummy);
    this.dataSource.filterPredicate = this.employeeFilter();
  }

  ngOnInit() {
    
    // filter change
    
    this.filterUsername.valueChanges
      .subscribe(
        username => {
          this.filterValues.username = username;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.filterGroup.valueChanges
      .subscribe(
        group => {
          this.filterValues.group = group;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    // keep search on back
    this.route.paramMap.subscribe((param: ParamMap)=>{
      let usernameParam = param.get('username');
      let groupParam = param.get('group');
      console.log(usernameParam);
      if(typeof usernameParam != null || typeof groupParam != null){
        console.log('not null');
        this.filterUsername.setValue(usernameParam);
        this.filterGroup.setValue(groupParam);
      }
    })
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  employeeFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function(data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return data.username.toLowerCase().indexOf(searchTerms.username) !== -1
        && data.group.toString().toLowerCase().indexOf(searchTerms.group) !== -1;
    }
    return filterFunction;
  } 

  getDetail(row:any){
    // console.log(row);
    this.router.navigate(['employee/',row.username,{searchUser: this.filterValues.username ,searchGroup: this.filterValues.group }]);
  }

  formatRupiah(num: number) {
    return "Rp. " + num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  resetFilter(){
    this.filterUsername.setValue('');
    this.filterGroup.setValue('');
  }

  actionButton(action){
    this.showNotif(action,"close");
  }

  showNotif(action: string, btaction: string) {
    let message = "button " +action+ " was clicked";
    let background = (action == "edit" )? 'yellow-snackbar'  : 'red-snackbar';

    this._snackBar.open(message, btaction, {
      duration: 5000,
      panelClass: background
    });
  }
  

}







