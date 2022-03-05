import { AnimationMetadata } from '@angular/animations';

export interface AnimationSpecification {
  target: HTMLElement;
  instruction: AnimationMetadata | AnimationMetadata[];
  autoDestroy: boolean;
}
