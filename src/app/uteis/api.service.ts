import {HttpClient} from '@angular/common/http';
import {Resource} from './resources.model';

export class ApiService {

  constructor(private http: HttpClient) { }

  public get(resource: Resource, urn: string): Promise<any> {
    return this.http.get(`${resource.webServiceProd}/${urn}`).toPromise();
  }

  public post(resource: Resource, urn: string, objeto: any): Promise<any> {
    return this.http.post(`${resource.webServiceProd}/${urn}`, objeto).toPromise();
  }
}
