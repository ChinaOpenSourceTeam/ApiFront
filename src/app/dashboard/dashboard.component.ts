import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../userinfo/userinfo.service'
import { Observable }     from 'rxjs/Observable';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [UserinfoService]
})
export class DashboardComponent implements OnInit {

    name: string;
    constructor(private userInfo: UserinfoService) { }

    ngOnInit(): void {
        this.getUser();
    }

    getUser(): void {
        this.userInfo.getUserInfo().then(res => {
            this.name = res.data.loginName;
            //alert(this.name);
        });
    }
}
