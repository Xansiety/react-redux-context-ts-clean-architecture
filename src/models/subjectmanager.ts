import { Subject } from "rxjs";


// receives a generic type and returns an observable
export class SubjectManager<T> {
  private subject = new Subject<T>();

  // getter and setter for the subject
  // Unicast Subject
  get getSubject() {
    return this.subject.asObservable();
  }

  // Emit a value to the subject
  set setSubject(value: T) {
    this.subject.next(value);
  }
}
