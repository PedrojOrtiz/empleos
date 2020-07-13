import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../../services/empleos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AlertController } from '@ionic/angular';
import { Empleo } from 'src/app/model/empleo';


@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.page.html',
  styleUrls: ['./empleo.page.scss'],
})
export class EmpleoPage implements OnInit {

  empleo: Observable<any>;

  constructor(public alertController: AlertController, private empleosService: EmpleosService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.empleo = this.empleosService.getEmpleo(id);
  }

  async eliminarEmpleo2(emple: Empleo) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar empleo',
      message: 'Se eliminara de forma permanente',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.empleosService.deleteEmpleo(emple.uid);
            this.router.navigate([`lista-empleos`]);
          }
        }
      ]
    });

    await alert.present();
  }


  showCrearEmpleoId(id: any) {
    this.router.navigate([`editar-empleo/${id}`]);
  }

}
