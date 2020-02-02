import {Comune} from './comune';

export class ElencoComuni {
    private static data: Comune[] = [
      {'codice': 'L219',  'descrizione': 'TORINO'},
      {'codice': 'F952',  'descrizione': 'NOVARA'},
      {'codice': 'L200',  'descrizione': 'TORTONA'},
      {'codice': 'X750',  'descrizione': 'TRECATE'},
    ];

    public static getAll(): Comune[] {
        return this.data;
    }

    static getByCodice(codice: string): Comune {
      return this.data.find(v => v.codice === codice.toUpperCase());
    }

}
