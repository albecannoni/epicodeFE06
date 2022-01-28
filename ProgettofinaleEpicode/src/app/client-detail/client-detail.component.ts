import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente2 } from '../classes/cliente2';

import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  cliente: Cliente2 = new Cliente2();
  

constructor(
    private route: ActivatedRoute,
    private clientService: ClientiService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientService.getClientById(params['id']).subscribe(cliente => {
        this.cliente = cliente; 
             
      });
    });
}
}

