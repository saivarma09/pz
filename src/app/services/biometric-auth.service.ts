import { Injectable } from '@angular/core';
import { BiometricAuth } from '@aparajita/capacitor-biometric-auth';

@Injectable({ providedIn: 'root' })
export class BiometricAuthService {
  async authenticate(): Promise<boolean> {
    try {
      await BiometricAuth.authenticate({
        reason: 'Please authenticate to access the app',
        cancelTitle: 'Cancel',
        allowDeviceCredential: true,
        iosFallbackTitle: 'Use passcode',
        androidTitle: 'Biometric login',
        androidSubtitle: 'Log in using biometric authentication',
        androidConfirmationRequired: false,
      });
      return true;
    } catch (error) {
      // Handle error or user cancellation
      return false;
    }
  }
} 