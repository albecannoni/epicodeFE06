import { Comune } from "./comune";

export class IndirizzoSede {
    id!: number;
    via!: string;
    civico!: number;
    cap!: number;
    localita!: string;
    comune!: Comune
}
