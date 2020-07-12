import { Component, OnInit } from '@angular/core';
import { EmpleoPage } from '../empleo/empleo.page';
import { Empleo } from 'src/app/model/empleo';
import { EmpleosService } from '../../services/empleos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-empleo',
  templateUrl: './crear-empleo.page.html',
  styleUrls: ['./crear-empleo.page.scss'],
})
export class CrearEmpleoPage implements OnInit {

  empleo: Empleo = new Empleo();

  constructor(private empleosService: EmpleosService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  guardarEmpleo() {
    console.log(this.empleo);
    this.empleosService.insertEmpleo(this.empleo);
  }

}
