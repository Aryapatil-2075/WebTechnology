import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    { name: 'Arya Patil', age: 21, course: 'CSE-AIML' },
    { name: 'Shravani Dake', age: 23, course: 'IT' },
    { name: 'Sia More', age: 21, course: 'Textile' },
    { name: 'Sandhya Patil', age: 20, course: 'AIDS' },
    { name: 'Bharat Patil', age: 21, course: 'CSE' },
    { name: 'Rohan Patil', age: 22, course: 'Civil' },
  ];

  getStudents() {
    return this.students;
  }
}
