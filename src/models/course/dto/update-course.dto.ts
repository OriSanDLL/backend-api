import { PartialType } from '@nestjs/swagger';

import { CreateCourseDto } from 'src/models/course/dto/create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
