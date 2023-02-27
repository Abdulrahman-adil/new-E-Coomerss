import { AbstractControl } from "@angular/forms";

export function confirmPasswordValid(control:AbstractControl){
  // read the password
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  // if the password contain value and confirmPassword has value and password notEqual confirmPassword.value
  if(password?.pristine || confirmPassword?.pristine){
    return null;
  }
  return password && confirmPassword && password.value!== confirmPassword.value
  ?{'misMatch':true}
  : null;
}
