import {Injectable} from '@angular/core';
import {User} from './Objects/user.model';
import {RestDataSource} from './rest.datasource';

@Injectable()
export class UserRepository {
    private user: User;

    constructor(private dataSource: RestDataSource) {
    }

    getUser(username: string, password: string): User {
        this.dataSource.getUser(username, password).subscribe(
            response => (
//                this.user = response[''],
                console.log(response['_body'])
            ),
            error => console.log('There is an error ' + error),
//            () => console.log('Empty data... ')
        );
        return this.user;
    }
}
