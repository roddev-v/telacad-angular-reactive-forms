import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(undefined, [Validators.required]),
      password: new FormControl(undefined, [Validators.required, Validators.minLength(8), Validators.maxLength(14)]),
      email: new FormControl(undefined, [Validators.required, Validators.email]),
      amount: new FormControl(undefined, [Validators.required, Validators.min(0)])
    });
  }

  submit() {
    console.log(this.form.value);
  }

  reset() {
    this.form.reset();
    this.form.markAsPristine();
  }

  getErrors(key: string) {
    console.log(this.form.get(key).errors);
    return this.form.get(key).errors;
  }
}
