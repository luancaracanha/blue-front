import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Resource } from '../resource/resources.model';

export class ApiService {

  protected ambiente: string;
  protected url: string;
  protected production: boolean;
  protected local: boolean;
  protected test: boolean;

  constructor(
    private http: HttpClient
  ) {
    this.ambiente = environment.name;
    this.url = environment.url;
    this.production = environment.production;
    this.local = environment.local;
    this.test = environment.teste;
  }

  public get(resource: Resource, urn: string, value: any): Promise<any> {
    if (this.production) {
      return this.http.get(`https://${resource.webServiceProd}.${this.url}/${urn}/${value}`).toPromise();
    }
    if (this.test) {
      return this.http.get(`https://${resource.webServiceTest}.${this.url}/${urn}/${value}`).toPromise();
    }
    if (this.local) {
      if (resource.resourceLocal.isLocal) {
        return this.http.get(`${resource.resourceLocal.urlLocal}/${urn}/${value}`).toPromise();
      } else {
        return this.http.get(`https://${resource.webServiceTest}.${this.url}/${urn}/${value}`).toPromise();
      }
    }
  }

  public getParams(resource: Resource, urn: string, params: HttpParams): Promise<any> {
    if (this.production) {
      return this.http.get(`https://${resource.webServiceProd}.${this.url}/${urn}`, { params: params }).toPromise();
    }
    if (this.test) {
      return this.http.get(`https://${resource.webServiceTest}.${this.url}/${urn}`, { params: params }).toPromise();
    }
    if (this.local) {
      if (resource.resourceLocal.isLocal) {
        return this.http.get(`${resource.resourceLocal.urlLocal}/${urn}`, { params: params }).toPromise();
      } else {
        return this.http.get(`https://${resource.webServiceTest}.${this.url}/${urn}`, { params: params }).toPromise();
      }
    }
  }

  public getApplicationPdf(resource: Resource, urn: string, value: any): Promise<any> {
    let headers = new HttpHeaders().append('Accept', 'application/pdf');

    if (this.production) {
      return this.http.get(`https://${resource.webServiceProd}.${this.url}/${urn}/${value}`, { headers: headers, responseType: 'blob' }).toPromise();
    }
    if (this.test) {
      return this.http.get(`https://${resource.webServiceTest}.${this.url}/${urn}/${value}`, { headers: headers, responseType: 'blob' }).toPromise();
    }
    if (this.local) {
      console.log('local');
      if (resource.resourceLocal.isLocal) {
        return this.http.get(`${resource.resourceLocal.urlLocal}/${urn}/${value}`, { headers: headers, responseType: 'blob' }).toPromise();
      } else {
        return this.http.get(`https://${resource.webServiceTest}.${this.url}/${urn}/${value}`, { headers: headers, responseType: 'blob' }).toPromise();
      }
    }
  }

  public post(resource: Resource, urn: string, object: Object): Promise<any> {
    if (this.production) {
      return this.http.post(`https://${resource.webServiceProd}.${this.url}/${urn}`, object).toPromise();
    }
    if (this.test) {
      return this.http.post(`https://${resource.webServiceTest}.${this.url}/${urn}`, object).toPromise();
    }
    if (this.local) {
      if (resource.resourceLocal.isLocal) {
        return this.http.post(`${resource.resourceLocal.urlLocal}/${urn}`, object).toPromise();
      } else {
        return this.http.post(`https://${resource.webServiceTest}.${this.url}/${urn}`, object).toPromise();
      }
    }
  }

  public postParams(resource: Resource, urn: string, params: HttpParams): Promise<any> {
    if (this.production) {
      return this.http.post(`https://${resource.webServiceProd}.${this.url}/${urn}`, null, { params: params }).toPromise();
    }
    if (this.test) {
      return this.http.post(`https://${resource.webServiceTest}.${this.url}/${urn}`, null, { params: params }).toPromise();
    }
    if (this.local) {
      if (resource.resourceLocal.isLocal) {
        return this.http.post(`${resource.resourceLocal.urlLocal}/${urn}`, null, { params: params }).toPromise();
      } else {
        return this.http.post(`https://${resource.webServiceTest}.${this.url}/${urn}`, null, { params: params }).toPromise();
      }
    }
  }

  public put(resource: Resource, urn: string, object: Object): Promise<any> {
    if (this.production) {
      return this.http.put(`https://${resource.webServiceProd}.${this.url}/${urn}`, object).toPromise();
    }
    if (this.test) {
      return this.http.put(`https://${resource.webServiceTest}.${this.url}/${urn}`, object).toPromise();
    }
    if (this.local) {
      if (resource.resourceLocal.isLocal) {
        return this.http.put(`${resource.resourceLocal.urlLocal}/${urn}`, object).toPromise();
      } else {
        return this.http.put(`https://${resource.webServiceTest}.${this.url}/${urn}`, object).toPromise();
      }
    }
  }

  public putParams(resource: Resource, urn: string, params: HttpParams): Promise<any> {
    if (this.production) {
      return this.http.put(`https://${resource.webServiceProd}.${this.url}/${urn}`, null, { params: params }).toPromise();
    }
    if (this.test) {
      return this.http.put(`https://${resource.webServiceTest}.${this.url}/${urn}`, null, { params: params }).toPromise();
    }
    if (this.local) {
      if (resource.resourceLocal.isLocal) {
        return this.http.put(`${resource.resourceLocal.urlLocal}/${urn}`, null, { params: params }).toPromise();
      } else {
        return this.http.put(`https://${resource.webServiceTest}.${this.url}/${urn}`, null, { params: params }).toPromise();
      }
    }
  }

  public delete(resource: Resource, urn: string, value: any): Promise<any> {
    if (this.production) {
      return this.http.delete(`https://${resource.webServiceProd}.${this.url}/${urn}/${value}`).toPromise();
    }
    if (this.test) {
      return this.http.delete(`https://${resource.webServiceTest}.${this.url}/${urn}/${value}`).toPromise();
    }
    if (this.local) {
      if (resource.resourceLocal.isLocal) {
        return this.http.delete(`${resource.resourceLocal.urlLocal}/${urn}/${value}`).toPromise();
      } else {
        return this.http.delete(`https://${resource.webServiceTest}.${this.url}/${urn}/${value}`).toPromise();
      }
    }
  }

}
