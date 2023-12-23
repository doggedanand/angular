import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  testDi() {
    console.log("===>",'DI is working.');
  }
}
