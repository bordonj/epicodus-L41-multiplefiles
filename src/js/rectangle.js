export default class Rectangle {
  constructor(side1, side2) {
    this.side1 = side1;
    this.side2 = side2;
  }
  getArea() {
    return this.side1 * this.side2;
  }
}

// Good Fail: Add first test and Example Class.
// Passing: Add constructor logic, pass first test.