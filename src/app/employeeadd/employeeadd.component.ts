import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent implements OnInit {
  maxDate = new Date();
  addForm: FormGroup;
  submitted = false;
  invalid = false;

  groupControl = new FormControl();
  groups: string[] = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5', 'Group 6', 'Group 7', 'Group 8', 'Group 9', 'Group 10'];
  filteredGroups: Observable<string[]>;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    //filter group
    this.filteredGroups = this.groupControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    // validasi form
    this.addForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', [Validators.required]],
      basicsalary: ['', [Validators.required]],
      status: ['', [Validators.required]],
      group: new FormControl('', Validators.required),
      description: ['', [Validators.required]],
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.groups.filter(group => group.toLowerCase().includes(filterValue));
  }
  get f() {return this.addForm.controls}

  submit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      console.log('error: '+this.addForm.value);
      return;
    }
    alert('INPUT DATA IS VALID' + JSON.stringify(this.addForm.value, null, 4));
    //console.log(this.addForm.value);
    this.gotoEmployee();
    
  }

  gotoEmployee(){
    this.router.navigate(['/employees']);
  }

}
