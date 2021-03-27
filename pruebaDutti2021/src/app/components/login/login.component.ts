import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();

  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: any = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    
    /* this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    }) */
    if (localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      
      
    }
  }
  
  loginUser( form: NgForm) {

    if (form.invalid)
    {return;}

    console.log(this.usuario);

    this.auth.login(this.usuario)
    .subscribe( resp => {
      console.log(resp);
      
      localStorage.setItem('email', this.usuario.email);
      
      
      this.router.navigateByUrl('/principal/ships');
    }, (err) => {
      console.log(err.error.error.message);
    });

    /* if (this.loginForm.invalid) { return }
    // TODO : Falta integrar el servicio para autentificar al usuario
    // JSON simulando usuarios
    var userLogin = this.loginForm.value.username;
    var filterJson = this.users.filter(function (user) { return user.first_name === userLogin  });
    if (filterJson.length > 0) {
      this.router.navigate(['/principal/ships'])
    } else {
      this.unregistered = true;
    } */
  }
}

