class TeamMember {
   name;
   designation = 'Support Web Dev';
   address = 'BD';
   constructor(name, address) {
      this.name = name;
      this.address = address;
   }
}


class Support extends TeamMember {
   groupSupportTime;
   constructor(name, address, time) {
      super(name, address);
      this.groupSupportTime = time;
   }
   startSession() {
      // console.log(this.name, 'start a support session');

   }
}

class StudentCare extends TeamMember {
   buildARoutine(student) {
      // console.log(student.name, 'Build a routine for', student)
   }
}
class NeptuneDev {
   name;
   designation = 'Student Care Web Deb';
   address = 'BD';
   constructor(name, address) {
      this.name = name;
      this.address = address;
   }
   releaseApp(version) {
      // console.log(student.name, 'release app version', version)
   }
}
const aamir = new Support('Amir Khan', 'BD', 11);
const salman = new Support('Solaiman khan', 'Dubai', 20);
const sharukh = new Support('Shahrukh khan', 'Dubai');
const akshay = new Support('Akshay kumar', 'Dubai', 3);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');

// aamir.startSession();
// salman.startSession();
// console.log(aamir, salman, sharukh, akshay);
// console.log(aamir);
// console.log(alia);


/*step---1//////////////////.................../////////
class Support {
   name;
   designation = 'Support Web Dev';
   address = 'BD';
   constructor(name, address) {
      this.name = name;
      this.address = address;
   }
   startSession() {
      console.log(this.name, 'start a support session');

   }
}

class StudentCare {
   name;
   designation = 'Student Care Web Deb';
   address = 'BD';
   constructor(name, address) {
      this.name = name;
      this.address = address;
   }
   buildARoutine(student) {
      console.log(student.name, 'Build a routine for', student)
   }
}
class NeptuneDev {
   name;
   designation = 'Student Care Web Deb';
   address = 'BD';
   constructor(name, address) {
      this.name = name;
      this.address = address;
   }
   releaseApp(version) {
      console.log(student.name, 'release app version', version)
   }
}
const aamir = new Support('Amir Khan', 'BD');
const salman = new Support('Solaiman khan', 'Dubai');
const sharukh = new Support('Shahrukh khan', 'Dubai');
const akshay = new Support('Akshay kumar', 'Dubai');

const alia = new StudentCare('Alia Bhatt', 'Mumbai');

aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharukh, akshay);
console.log(alia);*/
