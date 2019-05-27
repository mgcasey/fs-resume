import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

//  constructor() {}

  public myDateOfBirth: String;

  ionViewDidEnter() {
    this.myDateOfBirth = "1999-12-20";
  }
  constructor(public alertController: AlertController, public toastController: ToastController) {}

  
  
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Cannot be diskliked.',
      message: 'Please see button above.',
      buttons: ['Cancel', 'Delete']
    });

    await alert.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Thanks for favoriting me!',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }


  pressMe() {
    alert("Thanks for stopping by my site!")
  }
  

}
