import Person from './Person.js';

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }
}

export default Student;
