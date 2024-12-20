import { Injectable } from '@angular/core';
import { MasterService } from './master/master.service';
import { APIConstant as apiUrl } from '../constant/APIConstant';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private master: MasterService) { }

  getAllEmployee(): Observable<any> {
    const { users: allEmployee } = apiUrl.user;
    return this.master.get(env.baseUrl + allEmployee);
  }

}
