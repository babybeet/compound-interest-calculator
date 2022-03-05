import { BehaviorSubject, Observable } from 'rxjs';

export class StateStore<T> {

  private readonly _stateChangeNotifiers = new Map<string, BehaviorSubject<unknown>>();

  private _isInitialized = false;

  constructor(defaultState: T) {
    this._initialize(defaultState);
  }

  private _initialize(defaultState: T) {
    if (this._isInitialized) {
      throw new Error('Store has been initialized');
    }
    for (const [key, value] of Object.entries(defaultState)) {
      const notifier = new BehaviorSubject<any>(value);
      this._stateChangeNotifiers.set(key, notifier);
      notifier.next(value);
    }
    this._isInitialized = true;
  }

  update<K extends keyof T>(newState: Pick<T, K>) {
    for (const [k, v] of Object.entries(newState)) {
      this._stateChangeNotifiers.get(k).next(v);
    }
  }

  select<K extends keyof T>(key: K) {
    return this._stateChangeNotifiers.get(key as string).asObservable() as Observable<T[K]>;
  }

  valueOf<K extends keyof T>(key: K): T[K] {
    return this._stateChangeNotifiers.get(key as string).value as T[K];
  }

}
