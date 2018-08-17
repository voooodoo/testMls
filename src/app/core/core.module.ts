import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './http.interceptor'

import { ApiService } from './api.service';
import { CoreService } from './core.service';
import { UserService } from './user.service';
import { SessionService } from './session.service';
import { NotificationsService } from './notifications.service';
import { AuthenticatedGuard } from './guards/authenticated-guard.service';
import { UnauthenticatedGuard } from './guards/unauthenticated-guard.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ApiService,
    CoreService,
    UserService,
    SessionService,
    NotificationsService,
    AuthenticatedGuard,
    UnauthenticatedGuard,
    {
      multi: true,
      deps: [CoreService],
      provide: APP_INITIALIZER,
      useFactory: (core: CoreService) => () => core.initialize()
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: MyHttpInterceptor, 
      multi: true 
  }
  ],
})
export class CoreModule {}
