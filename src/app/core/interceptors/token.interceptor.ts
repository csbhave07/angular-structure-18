import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';


export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with your token logic
    },
  });
  return next(modifiedReq);
};
