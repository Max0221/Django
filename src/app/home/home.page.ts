import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dato:string;


  constructor(public toastController: ToastController) {}

  saludar(){
    this.presentToast('Hola '+ this.dato);
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();

  }
  

  ngOnInit() {
  }


}
