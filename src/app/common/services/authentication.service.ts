import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/base-service';

@Injectable()
export class AuthenticationService extends BaseService {
    constructor(private http: HttpClient) { super(); }

    logout() {
        // remove user from local storage to log user out
        localStorage.clear();
        sessionStorage.clear();
    }
}