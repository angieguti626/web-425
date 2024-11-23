import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  // Give access to ngx-cookie-service
  const cookieService = inject(CookieService);
  // If cookieService is named session_user, authorize. If not back to sign in
  if (cookieService.get('session_user')) {
    return true;
  } else {
    const router = inject(Router);
    router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
    return false;
  }
};
