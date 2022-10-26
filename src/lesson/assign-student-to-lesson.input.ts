import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class AssignStudentToLessonInput {
  @Field((type) => [ID])
  studentIds: string[];

  @Field((type) => ID)
  lessonId: string;
}
