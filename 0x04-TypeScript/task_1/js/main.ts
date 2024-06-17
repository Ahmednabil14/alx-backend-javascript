interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName:string, lastName:string): string;
}

const printTeacher: printTeacherFunction = function (firstName, lastName): string {
    return `${firstName[0]}${lastName}`
}

interface IStudent {
    firstName: string;
    lastName: string;
    displayName(): string;
    workOnHomework(): string;
  }
  
  class StudentClass implements IStudent {
    constructor(public firstName: string, public lastName: string) {}
  
    displayName(): string {
      return this.firstName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  }