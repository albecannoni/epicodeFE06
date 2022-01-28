import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente2 } from '../classes/cliente2';
import { Comune } from '../classes/comune';
import { IndirizzoSede } from '../classes/indirizzo-sede';
import { Provincia } from '../classes/provincia';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {
  
  cliente: Cliente2 = new Cliente2();
  comune: Comune= new Comune();
  indirizzoSedeOperativa: IndirizzoSede= new IndirizzoSede;
  provincia : Provincia = new Provincia;
  
  
  constructor(
    private route: ActivatedRoute,
    private clientService: ClientiService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientService.getClientById(params['id']).subscribe(cliente => {
        this.cliente = cliente; 
        cliente.indirizzoSedeOperativa.comune= new Comune;
        cliente.indirizzoSedeOperativa.comune.provincia= new Provincia;
      });
    });
}

salva(){
  alert('chiamata PUT')
}

}
