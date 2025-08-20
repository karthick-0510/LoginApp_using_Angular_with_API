import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {


  http = inject(HttpClient);
  router = inject(Router);

  loginForm:FormGroup = new FormGroup({
    EmailId: new FormControl(""),
    Password: new FormControl("")
  });


  onLogin(){
    debugger;
    const formValue = this.loginForm.value;
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",formValue).subscribe({
      next:(response:any)=>{
        debugger;
        if(response.result){
          alert("Login Success")
          this.router.navigateByUrl('dashboard');
        }else{
          alert(response.message)
        }
      },
      error:(error)=>{
        debugger;
        alert(error.statusText)
      }
    })
  }

}
