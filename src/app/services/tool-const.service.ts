import { Injectable } from "@angular/core";

const errorMessages = {
  pleaseEnterValidData: "Please Enter Valid Data",
  pleaseFillRequiredFields: "Please fill all the required fields",
  confirmPassword: "Password and Confirm Password did not match",
  whiteSpaceMessage: "Whitespace Not Allowed",
  userExist: "User Already exist with same Username",
  userNotExist: "Given credentials are incorrect!",
  pleaseEnterValidSSN: "Please Enter Valid SSN",
  pleaseEnterRequiredFields: "Please Enter All Required Fields",
  pleaseEnterValidUsername: "Please Enter Valid Username",
  pleaseEnterValidContactNumber: "Please Enter Valid Contact number",
  docAssinedAlready: "is already assigned to this patient",
  pleaseEnterValidDOB: "Please Enter Valid Date of Birth",
  pleaseEnterValidDateJoined: "Please Enter Valid Date of Joining",
  pleaseChooseApproveReject: "Please Choose Approve Or Reject",
  pleaseChooseApprove: "Please Choose Approve",
  pleaseChooseReject: "Please Choose Reject",
  pleaseEnterChiefComplaint: "Please Enter ChiefComplaint",
  pleaseFillDiagnosis: "Please Enter Diagnosis",
  pleaseSelectDoctor: "Please Assign Doctor",
  pleaseEnterDepartment: "Please Enter Department",
  pleaseEnterAdmissionStatus: "Please Enter Admission Status",
  pleaseEnterValidPassword: "Please Enter valid Password",
};

const successMessage = {
  saved: "Saved Successfully",
  userCreated: "Congratulations, your account has been created successfully",
  submit: "Recording Submitted Successfully",
  appove: "Recording Approved.",
  docAssined: "Doctor Assigned Successfully",
  diagnosisAdd: "Diagnosis Captured Successfully",
};

const processingMessage = {
  submit: "Transcription is Processing",
};

const Key = {
  DATE: "date",
  ATTRIBUTE_ID: "aId",
  ENTITY_ID: "entityId",
  ENTITY_VALID: "entityValid",
  WYSWYG: "wyswyg",
  PAGE: "page",
  SEARCH_TERM: "searchTerm",
  ENTITY_TYPE_ID: "entityTypeId",
  LIMIT: "limit",
  BEGIN: "begin",
  END: "end",
  TIME: "time",
};

@Injectable()
export class ToolConstService {
  getErrorMessages() {
    return errorMessages;
  }

  getSuccessMessage() {
    return successMessage;
  }

  getKeyValue() {
    return Key;
  }
  getTranscribed() {
    return processingMessage;
  }
}
