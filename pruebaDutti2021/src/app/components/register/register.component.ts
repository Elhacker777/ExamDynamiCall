import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //se crea una nueva instancia del usuarioModel sin inicializar
  usuario: UsuarioModel;

  registerForm: FormGroup;
  dataLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    
    this.usuario = new UsuarioModel();

    /* this.registerForm = this.fb.group({
      first_name: [ '', [Validators.required, Validators.minLength(3)]],
      last_name: [ '', [Validators.required, Validators.minLength(3)]],
      username: [ '', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.minLength(6)]],

    }) */
  }

  registerUser(form: NgForm) {
    if( form.invalid){
      return;
    }

    /* if (this.registerForm.invalid) { return }
    // TODO : Falta integrar el servicio para registrar al usuario
    // JSON simulando usuarios
    var userLogin = this.registerForm.value;
    usersList.push(userLogin)
    console.log('User Register -->', usersList)
    this.router.navigate(['/principal/ships']) */
    this.auth.nuevoUsuario(this.usuario)
    .subscribe(resp => {
      console.log(resp)      
      localStorage.setItem('first_name', this.usuario.first_name);
      localStorage.setItem('last_name', this.usuario.last_name);
      localStorage.setItem('username', this.usuario.username);
      localStorage.setItem('email', this.usuario.email);
      localStorage.setItem('password', this.usuario.password);
      
      this.router.navigateByUrl('/principal/ships');
    }, (err)=>{
      console.log(err.error.error.message);
    })

  }

}
