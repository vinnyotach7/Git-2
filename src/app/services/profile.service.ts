import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfileService {
    private username = 'vinnyotach7';
    private client_id = '6ffa6609a0401aa32dff';
    private client_secret = 'c3d0c13a3fb76acb59762524b3f998b66ab08005';

    constructor(private _http: Http) {
        this.username = 'vinnyotach7';
        console.log('Profile Component Init...');
    }

    getUser() {
        return this._http.get('https://api.github.com/users/' + this.username)
        .map(res => res.json());
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos')
        .map(res => res.json());
    }

    updateUsername(username: string) {
        this.username = username;
    }
}
