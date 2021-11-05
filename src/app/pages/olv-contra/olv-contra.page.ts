import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-olv-contra',
  templateUrl: './olv-contra.page.html',
  styleUrls: ['./olv-contra.page.scss'],
})
export class OlvContraPage implements OnInit {

  formularioRecuperar: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioRecuperar = this.fb.group({
      'nombre': new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }

}
