import { ApiProperty } from '@nestjs/swagger';

import { Course } from 'src/models/course/entities/course.entity';

export class CourseResponseDto {
  @ApiProperty({ type: Course })
  course: Course;
}
