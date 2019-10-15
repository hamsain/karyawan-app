import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import DataDummy from '../../assets/DataDummy.json';

const dataDummy = DataDummy;

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
   username:string;
   selectedData:any;
   searchUsername:string;
   searchGroup:string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let username = params.get('username');
      let searchUser = params.get('searchUser');
      let searchGroup = params.get('searchGroup');
      this.username = username;
      this.searchUsername = searchUser;
      this.searchGroup = searchGroup;
    })

    this.getSelectedDetailData(this.username);
  }

  getSelectedDetailData(user:string){
    let data = dataDummy.find(({ username }) => username === user);
    this.selectedData = data;
    console.log(this.selectedData);
  }

  formatRupiah(num: number) {
    return "Rp. " + num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  goBack(){
    let paramUser = this.searchUsername ? this.searchUsername : "";
    let paramGroup= this.searchGroup ? this.searchGroup : "";
    
    this.router.navigate(['employees',{username : paramUser, group : paramGroup}]);
  }

}
