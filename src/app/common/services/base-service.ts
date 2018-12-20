import { Http} from '@angular/http';
import { HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export class BaseService {
  baseUrl: string = environment.config.BASE_URL;
  apiUrl: string = environment.config.API_URL;
  constructor() { }
  
  handleError(error) {
  	// redirect to login/404 screen > based upon the response message
    return Observable.throw(error.json().error || 'Server error');
  }

}
