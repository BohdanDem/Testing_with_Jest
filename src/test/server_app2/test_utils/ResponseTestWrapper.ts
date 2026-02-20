import { HTTP_CODES } from "../../../app/server_app/model/ServerModel";


export class ResponseTestWrapper {
  
  public statusCode: HTTP_CODES | undefined = undefined;
  public headers = new Array<object>();
  public body: object | undefined = undefined;
  
  public writeHead(statusCode: HTTP_CODES, header: object) {
    this.statusCode = statusCode;
    this.headers.push(header);
  }
  
  public write(stringifiedBody: string) {
    this.body = JSON.parse(stringifiedBody);
  }
  
  public end(){}
  
  public clearFields(){
    this.statusCode = undefined;
    this.body = undefined;
    this.headers.length = 0;
  }
}
