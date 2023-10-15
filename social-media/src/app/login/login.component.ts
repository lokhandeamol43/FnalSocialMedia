import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private serviceLogin: ServiceService) {}

  ngOnInit() {}

  login(email, pass) {
    const enteredEmail = email.value;
    const enteredPassword = pass.value;

    
    this.serviceLogin.checkUserNameAndPass(enteredEmail, enteredPassword)
      .subscribe((loginSuccess: boolean) => {
        if (loginSuccess) {
          this.router.navigate(['/home']); 
        } else {
      
          console.log('Login failed. Please check your email and password.');
        }
      });
  }

  deleteUser(userId: number): void {
    this.serviceLogin.deleteUser(userId).subscribe(() => {
      console.log(`User with ID ${userId} has been deleted.`);
    });
  }
}
