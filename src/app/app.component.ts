import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();

    try {
      await StatusBar.setOverlaysWebView({ overlay: false });
      await SplashScreen.hide();
    } catch (error) {
      console.error('Error initializing Capacitor plugins', error);
    }
  }

  async onLogout() {
    try {
      await this.authService.logout();  // Ensure this method exists in AuthService
      this.router.navigateByUrl('/auth', { replaceUrl: true });
    } catch (error) {
      console.error('Logout failed', error);
    }
  }
}
