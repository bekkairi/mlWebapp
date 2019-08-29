// export for convenience.
import {Subject} from 'rxjs';

export { ActivatedRoute } from '@angular/router';
import { convertToParamMap, ParamMap, Params } from '@angular/router';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private trigger: Subject<Params> = new Subject<Params>();

  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
  }

  /** The mock paramMap observable */
  readonly paramMap = this.trigger.asObservable();

  /** Set the paramMap observables's next value */
  setParamMap(params?: Params) {
    this.trigger.next(convertToParamMap(params));
  }
}


