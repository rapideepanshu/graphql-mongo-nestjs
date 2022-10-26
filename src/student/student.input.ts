import { InputType, Field } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @IsUUID()
  @Field()
  first_name: string;

  @IsUUID('4', { each: true })
  @Field()
  last_name: string;
}
