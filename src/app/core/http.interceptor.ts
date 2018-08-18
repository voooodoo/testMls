import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { SessionService } from './session.service'

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

constructor(private SessionService: SessionService) { }


intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
              
	request = request.clone({
	  setHeaders: {
	    Authorization: `${this.SessionService.token$}`
			}
  });
        
	console.log(request.headers);

	return next.handle(request)
	  .pipe(
	    tap(event => {
	      if (event instanceof HttpResponse) {
	        console.log(event.status);
	      }
	    }, error => {
	   		console.error(error.status);
	        console.error(error.message);
	    })
	  )
	}
}
