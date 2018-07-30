import {Injectable} from '@angular/core';
import {RestDataSource} from './rest.datasource';
import {Observable} from 'rxjs';
import {User} from './Objects/user.model';

@Injectable()
export class UserRepository {

    constructor(private dataSource: RestDataSource) {
    }

    getUserData(username: string, password: string) : Observable<User> {        
        return this.dataSource.getData("/users/" + username + "/" + password);
    }
}
