import { AccountDto } from '@w2c/auth';
import { LessonTopic } from '@client:core/lesson';

export interface GlobalState {
  lessonTopics: LessonTopic[];
  authenticatedAccount: AccountDto;
  hasInProgressRequests: boolean;
}
