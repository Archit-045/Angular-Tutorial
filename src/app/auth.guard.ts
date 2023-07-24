import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let isLoggedId = localStorage.getItem('isloggedin');
    if(isLoggedId=='false'){
      alert ("not Authentic User")
      return false;
    }else {
      return true;
    }
};
