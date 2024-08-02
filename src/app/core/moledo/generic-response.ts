import {HttpStatusCode} from "@angular/common/http";

export class GenericResponse {
  data: Object = new Object;
  success: boolean = false;
  message: String = '';
  status: HttpStatusCode = HttpStatusCode.Ok;
  title: string = '';
}
