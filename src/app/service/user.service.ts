
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigServerService } from '../core/config-server.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient, private configService: ConfigServerService) { }

    public getUser(email, password) {
        let params = '?email=' + email + '&password=' + password;
        return this.httpClient.get<any>(this.configService.getAPI('api/user/getUser.php') + params).pipe(
            map(respons => {
                return {
                    serviceResult: respons
                }
            }));
    }

}