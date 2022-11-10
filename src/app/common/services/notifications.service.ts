import { Injectable } from "@angular/core";
declare const $: any;

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  constructor() {}
  showNotification(message: any, type: any = "rose") {
    const typeList = [
      "",
      "info",
      "success",
      "warning",
      "danger",
      "rose",
      "primary",
    ];

    $.notify(
      {
        icon: "notifications",
        title: "",
        message: message,
      },
      {
        type: type,
        timer: 2000,
        placement: {
          from: "bottom",
          align: "right",
        },
        template:
          '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon showAbove" role="alert">' +
          '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  ' +
          '<i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message" style="font-weight: bold">{2}</span>' +
          "</div>",
      }
    );
  }
}
