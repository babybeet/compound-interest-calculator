import { Injectable } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import BezierEasing from 'bezier-easing';
import { Subject } from 'rxjs';

import { AnimationSpecification } from './animation-specification';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(private readonly _animationBuilder: AnimationBuilder) {

  }

  /**
   *
   * @param duration Duration in milliseconds
   * @param animator A function that gets called with current time step which is between 0 and 1
   */
  timeStep(duration: number, easingFunction = BezierEasing(0.04, 0.54, 0.25, 1)) {
    const subject = new Subject<number>();
    // eslint-disable-next-line no-undef
    let start: DOMHighResTimeStamp;
    // eslint-disable-next-line no-undef
    function step(timestamp: DOMHighResTimeStamp) {
      if (start === undefined) {
        start = timestamp;
        window.requestAnimationFrame(step);
      } else {
        const t = Math.min(1, (timestamp - start) / duration);
        subject.next(easingFunction(t));
        if (t < 1) {
          window.requestAnimationFrame(step);
        } else {
          subject.complete();
        }
      }
    }
    window.requestAnimationFrame(step);
    return subject.asObservable();
  }

  executeAnimationSpecification(animationSpec: AnimationSpecification) {
    const animationFactory = this._animationBuilder.build(animationSpec.instruction);
    const animationPlayer = animationFactory.create(animationSpec.target);

    if (animationSpec.autoDestroy) {
      animationPlayer.onDone(() => animationPlayer.destroy());
    }
    animationPlayer.play();
  }

}
