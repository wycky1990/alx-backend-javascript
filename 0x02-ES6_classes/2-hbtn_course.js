export default class ALXCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every(s => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

<<<<<<< HEAD
  /**
   * @param {String} name
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

=======
>>>>>>> ce41c18d6d1bbb94bec0782836e27e7522412aab
  get name() {
    return this._name;
  }

<<<<<<< HEAD
  /**
   * @param {Number} length
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
=======
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
>>>>>>> ce41c18d6d1bbb94bec0782836e27e7522412aab
  }

  get length() {
    return this._length;
  }

<<<<<<< HEAD
  /**
   * @param {Array} students
   */
  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
=======
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
>>>>>>> ce41c18d6d1bbb94bec0782836e27e7522412aab
  }

  get students() {
    return this._students;
  }
<<<<<<< HEAD
}

export default HolbertonCourse;
=======

  set students(value) {
    if (!Array.isArray(value) || !value.every(s => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
>>>>>>> ce41c18d6d1bbb94bec0782836e27e7522412aab
