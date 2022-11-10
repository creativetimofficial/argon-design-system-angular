import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { NotificationsService } from "./notifications.service";
import { ToolConstService } from "./tool-const.service";
import { Router } from "@angular/router";
import { commonHeaders } from "./common.headers";
import { Subject, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  public token: string;
  public role: any;
  public error: any;
  constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationsService,
    private toolConstService: ToolConstService,
    private router: Router
  ) {}
  private baseUrl = "https://admin.bayservicesindia.com/";
  private fullUrl = this.baseUrl + "app/testclient/";
  login(username, password) {
    let body = JSON.stringify({ username, password });
    return this.httpClient
      .post(this.fullUrl + "jwtUserAuthentication", body, {
        headers: commonHeaders,
      })
      .pipe(
        map((response: Response) => {
          // login successful if there's a jwt token in the response
          //let token = response.json() && response.json().token;
          let token = '';

          if (token) {
            let jwtData = token.split(".")[1];
            let decodedJwtJsonData = window.atob(jwtData);
            let decodedJwtData = JSON.parse(decodedJwtJsonData);

            const roles = decodedJwtData.roles;
            if (roles.includes("ROLE_DOCTOR")) {
              this.role = "Doctor";
            } else if (roles.includes("ROLE_INTERN")) {
              this.role = "Intern";
            }
            // set token property
            this.token = token;

            //const roles = decodedJwtData.roles

            // set token property
            this.token = token;

            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(
              "currentUser",
              JSON.stringify({
                username: username,
                token: token,
                role: this.role,
              })
            );
            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(
              "currentUser",
              JSON.stringify({
                username: username,
                token: token,
                role: this.role,
              })
            );
          } else {
            return false;
          }
        })
      )
      .pipe(catchError((err) => this.handleError()));
  }

  handleError = () => {
    this.notificationService.showNotification(
      this.toolConstService.getErrorMessages().userNotExist,
      "danger"
    );
    this.error = "Username or password is incorrect";
    this.router.navigate(["/pages/login"]);
    return throwError("Could not find matching products. Redirecting...");
  };

  signup(body) {
    return this.httpClient.post(this.fullUrl + "/signup?", body, {
        headers: commonHeaders,
      })
      .toPromise()
      .then((response: Response) => {
        let res = response["_body"];
        return res;
      });
  }

}
