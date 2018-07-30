import {Component} from '@angular/core';
import {UserRepository} from '../../model/user.repository';
import {LoginData} from '../../model/Objects/login.model';
import {User} from '../../model/Objects/user.model';

@Component({
    selector: 'app-page-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    private version = 'v1.0';
    private userData: User = null;
    loginData: LoginData = new LoginData();
    private isLogedIn = false;

    constructor(private repo: UserRepository) {
    }

    login(): void {
        let user = this.loginData.username;
        let pw = this.loginData.password;
        this.repo.getUserData(user, pw).subscribe(
            response => {                                
                if (response.length > 0) {
                    this.userData = response[0];
                    this.isLogedIn = true;
                    localStorage.setItem('username', this.userData.usuario);
                    localStorage.setItem('username', this.userData.usuario);
                    localStorage.setItem('username', this.userData.usuario);
                    localStorage.setItem('username', this.userData.usuario);
                    localStorage.setItem('username', this.userData.usuario);
                    localStorage.setItem('username', this.userData.usuario);
                    console.log(this.userData);
                }
            }
        );
    }
}
