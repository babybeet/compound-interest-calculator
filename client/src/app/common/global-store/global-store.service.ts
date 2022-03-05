import { Injectable } from '@angular/core';

import { StateStore } from '@client:common/state-store';

import { GlobalState } from './global-state';

@Injectable({
  providedIn: 'root'
})
export class GlobalStore extends StateStore<GlobalState> {

  constructor() {
    super({
      lessonTopics: [],
      authenticatedAccount: null,
      hasInProgressRequests: true
    });
  }

}
