import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_forms';  
  constructor(private userService: UserService) {}

  applyForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('')
  });

  submitApplication() {
    this.userService.submitApplication(
      this.applyForm.value.firstname ?? '',
      this.applyForm.value.lastname ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}