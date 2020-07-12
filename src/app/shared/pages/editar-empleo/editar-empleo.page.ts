import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleosService } from '../../services/empleos.service';
import { ActivatedRoute } from '@angular/router';
import { Empleo } from 'src/app/model/empleo';

@Component({
  selector: 'app-editar-empleo',
  templateUrl: './editar-empleo.page.html',
  styleUrls: ['./editar-empleo.page.scss'],
})
export class EditarEmpleoPage implements OnInit {

  empleo: Observable<any>;
  
  constructor(private empleosService: EmpleosService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.empleo = this.empleosService.getEmpleo(id);
  }

  editarEmpleo(empleo: Empleo) {
    this.empleosService.editarEmpleo(empleo);
  }

}
