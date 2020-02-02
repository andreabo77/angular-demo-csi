import { Directive, OnInit, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCambiaColore]'
})
export class CambiaColoreDirective implements OnInit {

  /*
  Esempio di utilizzo di direttiva che sfrutta le proprieta 
  HostBinding per legare a una variabile il colore di sfondo del tag
  HostListener per gestire gli eventi mouseenter e mouseleave

  Sono molto potenti e consentono di modificare il dom.
  In questo caso al passaggio del mouse pone il colore di sfondo a blu (coloreNuovo)
  se il mouse se  ne va ritorna il colore iniziale (coloreInput)
  */

  @Input() coloreSfondoInizialeInput: string = '';
  @Input() coloreNuovo: string = '';
  //Questo modo non mi piace, preferisco usare tanti parametri input
  //si poteva usare nel html es: [appCambiaColore]="'red'"
  //@Input('appCambiaColore') coloreNuovo: string = 'green';
  
  //Questo lega una variabile a una proprieta' dell'elemento
  @HostBinding('style.backgroundColor') coloreSfondo: string;

  constructor(private elementRef: ElementRef) {
    
    //Metodo 1:
    //Si potrebeb sfruttare direttamente elementRef per modificare il dom del tag legato alla direttiva
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'grey';
    

  }

  ngOnInit() {
    console.log('CambiaColoreDirective-ngOnInit input coloreSfondoInizialeInput='+this.coloreSfondoInizialeInput);
    console.log('CambiaColoreDirective-ngOnInit input coloreNuovo='+this.coloreNuovo);
    
    this.coloreSfondo = this.coloreSfondoInizialeInput;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    console.log('CambiaColoreDirective-mouse entrato imposto colore '+this.coloreNuovo);
    this.coloreSfondo = this.coloreNuovo;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    console.log('CambiaColoreDirective-mouse uscito rimetto colore '+this.coloreSfondoInizialeInput);
   
    this.coloreSfondo = this.coloreSfondoInizialeInput;
  }
}
