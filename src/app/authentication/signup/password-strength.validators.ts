import { AbstractControl, ValidationErrors } from "@angular/forms";

export const PasswordStrengthValidator = function (
  control: AbstractControl
): ValidationErrors | null {
  let value: string = control.value || "";

  if (!value) {
    return null;
  }

  let upperCaseCharacters = /[A-Z]+/g;
  if (upperCaseCharacters.test(value) === false) {
    return {
      passwordStrength: `Password should contain Upper case characters `,
    };
  }

  let lowerCaseCharacters = /[a-z]+/g;
  if (lowerCaseCharacters.test(value) === false) {
    return {
      passwordStrength: `Password should contain lower case characters`,
    };
  }

  let numberCharacters = /[0-9]+/g;
  if (numberCharacters.test(value) === false) {
    return {
      passwordStrength: `Password should contain number`,
    };
  }

  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (specialCharacters.test(value) === false) {
    return {
      passwordStrength: `Password should contain special characters`,
    };
  }
  return null;
};
