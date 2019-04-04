import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./../../app.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  checkOnline(): boolean {
    if (!this.authService.success) {
      return;
    }
    return true;
  }
}
