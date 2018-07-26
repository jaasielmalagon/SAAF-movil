import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {RestDataSource} from './rest.datasource';
import {UserRepository} from './user.repository';

@NgModule({
    imports: [HttpModule],
    declarations: [],
    providers: [RestDataSource, UserRepository]
})
export class ModelModule {}
