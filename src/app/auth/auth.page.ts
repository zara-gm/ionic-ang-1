import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AuthPage implements OnInit {
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  async onLogin() {
    this.isLoading = true;

    try {
      const success = await this.authService.login();
      if (success) {
        this.router.navigateByUrl('/places/tabs/discover');
      }
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
