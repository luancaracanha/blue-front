import { HttpClient } from '@angular/common/http';
import { Resource } from './resources.model';

export class ApiService {

  constructor(private http: HttpClient) { }

  public get(resource: Resource, urn: string): Promise<any> {
    console.log(`${resource.webServiceProd}/${urn}`);
    return this.http.get(`${resource.webServiceProd}/${urn}`).toPromise();
  }
  
}
