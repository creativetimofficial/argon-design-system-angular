import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuardsService {
  private currentUserRole: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {}

  getCurrentUser(role) {
    if (role) {
      this.currentUserRole.next(role);
    } else {
      this.currentUserRole.next(false);
    }
  }

  returnUserRole() {
    return this.currentUserRole.asObservable();
  }
}
