import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async getStudent(id: string): Promise<Student> {
    const student = this.studentRepository.findOneBy({ id });
    return student;
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { first_name, last_name } = createStudentInput;

    const student = this.studentRepository.create({
      id: uuid(),
      first_name,
      last_name,
    });
    return this.studentRepository.save(student);
  }
}
