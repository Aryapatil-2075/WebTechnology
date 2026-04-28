import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  imports: [CommonModule],
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class Studentlist {
  students: any[] = [];

  constructor(private studentService: StudentService) {} // Dependency Injection

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
}
