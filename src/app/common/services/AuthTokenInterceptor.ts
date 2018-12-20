import {Inject, Injectable} from '@angular/core';
import { HttpEvent,HttpInterceptor,HttpHandler,HttpRequest,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
      this.APIToken = "APIToken-test-XXX%&**&";//localStorage.getItem('id_token');
  }

  private APIToken = null;
    private defaultApplicationHeaders = {
        'Content-Type': 'application/json'
    }

    buildRequestHeaders():HttpHeaders {
        let headers = this.defaultApplicationHeaders;
        // set API-Token if available
        if(this.APIToken !== null) {
            let authHeaderTpl = `${this.APIToken}`;
            headers['Authorization'] = authHeaderTpl
        }
        return new HttpHeaders(headers);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const headers = this.buildRequestHeaders();
        const authReq = req.clone({ headers });

        return next.handle(authReq);
    }
}