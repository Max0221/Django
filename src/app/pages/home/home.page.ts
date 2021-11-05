import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  LoginForm: FormGroup;

  valuefromuser:any;

  valuefrompass:any;


  dato:string;


  constructor(public toastController: ToastController){
  }
  

  async saludar(){

    this.presentToast('Hola '+ this.valuefromuser);
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();

  }
  

  ngOnInit() {

    this.LoginForm = new FormGroup({

      name: new FormControl('',[
        Validators.required,
      ]),

      contra: new FormControl('',[
        Validators.required,
      ])

    });

  }

  
}


