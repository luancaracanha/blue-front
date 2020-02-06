export class Resources {
  static blueBack():Resource { return new Resource('http://localhost:8080'); }
}

export class Resource {
  public webServiceProd: string;
  constructor(
    private _webServiceProd: string
  ) {
    this.webServiceProd = _webServiceProd;
  }
}
