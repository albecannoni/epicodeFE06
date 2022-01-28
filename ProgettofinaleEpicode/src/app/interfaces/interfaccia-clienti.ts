import { Cliente2 } from "../classes/cliente2";
import { Clienti } from "../clienti";

export interface InterfacciaClienti {

    count: number;
    next:string;
    previous:string;
    content: Array<Cliente2>
}
