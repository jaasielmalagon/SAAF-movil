import {Component} from '@angular/core';
import {UserRepository} from '../../model/user.repository';
import {LoginData} from '../../model/Objects/login.model';

@Component({
    selector: 'app-page-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    private version = 'v1.0';
    private userData: any = null;
    loginData: LoginData = new LoginData();

    constructor(private repo: UserRepository) {
    }

    login(): void {
        let user = this.loginData.username;
        let pw = this.loginData.password;
        this.userData = this.repo.getUser(user, pw);      
//        console.log(this.userData);  
    }
}
