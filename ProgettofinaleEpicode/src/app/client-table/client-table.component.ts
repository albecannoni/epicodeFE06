import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente2 } from '../classes/cliente2';

import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {


  clienti: Cliente2[] = [];


  constructor(
    
    private clientservice: ClientiService,
    private router: Router) { }

  ngOnInit(): void {

    this.clientservice.getAllClient().subscribe(data => this.clienti = data.content);
  }

  info(item: Cliente2) {
    this.router.navigate(['clients', item.id])
    console.log(item)
  }
  edit(item: Cliente2) {
    this.router.navigate(['clients', item.id, 'editClient'])
    console.log('test')
    console.log(item)
  }
  remove(id: number) {
    alert('remove oggetto ' + id)
  }

}
