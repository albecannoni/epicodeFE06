import { IndirizzoSede } from "./indirizzo-sede";

export class Clienti {
    id!: number;
    ragioneSociale!: string;
    partitaIva!: string;
    tipoCliente!: string;
    email!: string;
    pec!:string;
    telefono!: string;
    nomeContatto!: string;
    cognomeContatto!: string;
    telefonoContatto!: string;
    emailContatto!: string;
    indirizzoSedeOperativa!: IndirizzoSede;
    indirizzoSedeLegale!: IndirizzoSede;
    dataInserimento!:Date;
    dataUltimoContatto!: Date;
    fatturatoAnnuale!: string
    
}
