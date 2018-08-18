import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { VerificationService } from './shared/verification.service';

import { AuthPageComponent } from './auth-page.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { PhoneVerificationFormComponent } from './phone-verification-form/phone-verification-form.component';

import { AuthRoutingModule } from './auth-routing.module';
import { CustomPhoneNumberControlComponent } from './log-in-form/custom-phone-number-control/custom-phone-number-control.component';


@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  providers: [
    VerificationService,
  ],
  declarations: [
    AuthPageComponent,
    LogInFormComponent,
    PhoneVerificationFormComponent,
    CustomPhoneNumberControlComponent
  ]
})
export class AuthModule {}
