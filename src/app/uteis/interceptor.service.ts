import { Observable } from 'rxjs';
import { Injectable, NgModule } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class HttpsRequestInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return next.handle(req.clone({ headers }));
    }
}

@NgModule({
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: HttpsRequestInterceptor,
        multi: true
    },]
})
export class Interceptor { }
