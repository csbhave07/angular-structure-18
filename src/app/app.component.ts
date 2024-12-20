import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './core/models/classes/User';
import { IUser } from './core/models/interfaces/IUser';
import { EmployeeService } from './core/services/employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'angular-structure';

  users:IUser[] = [];
  constructor(private empService: EmployeeService){

  }

  ngOnInit(): void {
    this.empService.getAllEmployee().subscribe(data=>{
      console.log(data);
    })
  }

}
