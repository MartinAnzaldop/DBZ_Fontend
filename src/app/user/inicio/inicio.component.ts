import { DbzService } from './../../services/dbz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
listaPersonajes: any[] = [];


  constructor(private _DBZ: DbzService) { }

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes(){
    return this._DBZ.getPersonajes().subscribe( data => {
      console.log(data);
      this.listaPersonajes = data as Object[];
    },error=>{
      console.log(error)
    })
    }

}
