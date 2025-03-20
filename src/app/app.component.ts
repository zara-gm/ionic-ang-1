import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit, OnDestroy {
  private authSub!: Subscription;
  userIsAuthenticated = false;

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

  ngOnInit() {
    // Subscribe to authentication state changes
    this.authSub = this.authService.userIsAuthenticated.subscribe(
      (isAuth) => {
        this.userIsAuthenticated = isAuth;
        if (!isAuth) {
          // If not authenticated, navigate to login screen
          this.router.navigateByUrl('/auth');
        }
      }
    );
  }

  onLogout() {
    // Handle logout
    this.authService.logout();
    this.router.navigateByUrl('/auth', { replaceUrl: true }); // Redirect to auth page after logout
  }

  ngOnDestroy() {
    // Unsubscribe when component is destroyed
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}
