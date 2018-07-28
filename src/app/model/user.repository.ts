import {Injectable} from '@angular/core';
import {User} from './Objects/user.model';
import {RestDataSource} from './rest.datasource';

@Injectable()
export class UserRepository {

    constructor(private dataSource: RestDataSource) {
    }

    getUser(username: string, password: string): User {
        let userData: User = new User();
        this.dataSource.getData("/users/" + username + "/" + password).then(
            response => {
                userData = response;
            }
        );
        return userData;
    }
}
