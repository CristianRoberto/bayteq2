import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  indiceSeleccionado: number = 0;

  user: any;
 

  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.user)
  }


  
  cambiarIndiceSeleccionado(i){
    this.indiceSeleccionado = i;
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Deberitas te quieres salir?',
      buttons: [
        {
          text: 'No mejor no',
          handler: () => {
            
          }
        }, {
          text: 'Sii',
          handler: () => {
            localStorage.removeItem('ingresado');
            //localStorage.clear();
            location.reload();
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });


    await alert.present();
  }

}