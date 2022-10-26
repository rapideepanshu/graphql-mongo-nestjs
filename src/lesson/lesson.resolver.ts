import { CreateLessonInput } from './lesson.input';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';
import { AssignStudentToLessonInput } from './assign-student-to-lesson.input';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    const lesson = this.lessonService.getLesson(id);
    return lesson;
  }

  @Query((returns) => [LessonType])
  lessons() {
    return this.lessonService.getAllLesson();
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation((returns) => LessonType)
  assignStudentToLesson(
    @Args('assignStudentsToLesson')
    assignStudentsToLesson: AssignStudentToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudentsToLesson;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }
}
