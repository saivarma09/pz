import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { BiometricAuthService } from './services/biometric-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(private biometricAuth: BiometricAuthService) {}

  async ngOnInit() {
    const authenticated = await this.biometricAuth.authenticate();
    if (!authenticated) {
      // Optionally, handle failed authentication (e.g., show a message or close the app)
    }
  }
}
