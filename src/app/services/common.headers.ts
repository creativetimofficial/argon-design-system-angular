import { HttpHeaders } from "@angular/common/http";

export const commonHeaders = new HttpHeaders();
commonHeaders.append("Accept", "application/json");
commonHeaders.append("Content-Type", "application/json");
