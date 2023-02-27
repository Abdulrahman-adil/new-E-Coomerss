import { AbstractControl, FormControl } from "@angular/forms";


export function ForbiddenName(control:AbstractControl){
  let forbidden =/admin/.test(control.value);

  return forbidden ? {'forbiddenName':{value:control.value}} : null;
}
