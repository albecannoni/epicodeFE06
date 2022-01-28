import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente2 } from '../classes/cliente2';
import { IndirizzoSede } from '../classes/indirizzo-sede';
import { InterfacciaClienti } from '../interfaces/interfaccia-clienti';



@Injectable({
  providedIn: 'root'
})
export class ClientiService {
  urlApi = 'http://epicode.online/epicodebeservice_v2/';
  

  constructor(private http: HttpClient) { }

  getAllClient() {
    return this.http.get<InterfacciaClienti>(this.urlApi + 'api/clienti?page=0&size=20&sort=id,ASC')
  }

  getClientById(id: string) {
    return this.http.get<Cliente2>(this.urlApi + 'api/clienti/' + id);
    
  }

  getSedelegale(){
    return this.http.get<IndirizzoSede>(this.urlApi + 'api/clienti/');
  }

}
