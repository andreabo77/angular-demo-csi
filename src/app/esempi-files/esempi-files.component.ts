import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { TipoDocumento} from 'src/app/model/documenti/tipoDocumento';
import { Documento} from 'src/app/model/documenti/Documento';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { isNull } from 'util';
import { TruncatePipe } from '../pipe/truncate.pipe';
//import { fileType, FileTypeResult } from 'src/app/lib/file-type/file-type';

@Component({
  selector: 'app-esempi-files',
  templateUrl: './esempi-files.component.html',
  styleUrls: ['./esempi-files.component.css']
})
export class EsempiFilesComponent implements OnInit {

  private readonly MAX_FILE_SIZE = 5 * 1024 * 1024; // in byte

  @ViewChild('labelPersonalizzata') labelPersonalizzata: ElementRef;

  tipoDocumento: TipoDocumento;
    
  fileToUpload: File = null;
  codEstensione = null;

  messaggi : string = '';

  trPipe : TruncatePipe ;

  constructor(
    
  ) { }

  ngOnInit(): void {
    this.trPipe = new TruncatePipe();
  }

  /*
  Scatta alla selezione di un documento, ne visualizza le caratteristiche
  */
  async handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    var date = new Date(this.fileToUpload.lastModified);

    var estensione = this.getCodEstensione(this.fileToUpload);

    this.messaggi = 'files.length '+files.length +
                    '\nfileToUpload.name='+this.fileToUpload.name +
                    '\nfileToUpload.size='+this.fileToUpload.size +
                    '\nfileToUpload.type='+this.fileToUpload.type + 
                    '\nestensione dedotta='+estensione +
                    '\nfileToUpload.lastModified='+ date.toLocaleString();
      this.clog(this.messaggi);

    //Esempio di aggiornamento di una label tramite viewChild
    this.labelPersonalizzata.nativeElement.innerText = 'Bravo hai selezionato il file '+this.fileToUpload.name;

    var contenutoFileFormatoStringa = (await this.readDocumento(this.fileToUpload, true));
    this.clog("Caricato il contenuto del file come stringa=" + contenutoFileFormatoStringa);

    const contenutoFileFormatoBase64 = btoa(contenutoFileFormatoStringa as string);
    this.clog("Caricato il contenuto convertito in Encode Base64="+contenutoFileFormatoBase64);

  }

  /* logga sulla console un messaggio ma troncando a 300 caratteri sfruttando la pipe truncate */ 
  clog(msg: string){
    console.log(this.trPipe.transform(msg,300));
  }

  /*
  Ritorna l'estensioen di un file 
  */
  private getCodEstensione(file: File) {
    let codEstensione = null;
    
    if (file.name.lastIndexOf('.') >0){
      const est1 = file.name.substr(file.name.lastIndexOf('.')+1);
      codEstensione = est1;
    }
    return codEstensione;
  }
  
  private readDocumento(file: File, flagString = false): Promise<string | ArrayBuffer> {
    const fileReader = new FileReader();
    return new Promise<string | ArrayBuffer>(
      (resolve) => {
        fileReader.onload = () => resolve(fileReader.result);
        if (flagString) {
          fileReader.readAsBinaryString(file);
        } else {
          fileReader.readAsArrayBuffer(file);
        }
      });
  }

/*

  private checkMimeTypeResult(fileTypeResult: FileTypeResult ) {
    return this.tipoDocumento.mime_type.some(element => element.descrizione_mime_type.split(',').some(type => type === fileTypeResult.mime))
      || false;
  }

  getAllMimeType() {
    return this.tipoDocumento.mime_type.reduce((acc, el) => el.descrizione_mime_type.trim() + ',' + acc, '');
  }
*/
/*
  private verificaContenutoFile(file: File): Promise<FileTypeResult> {
    return this.readDocumento(file).then(doc => fileType(doc as ArrayBuffer));
  }
*/
 

  async onSubmit() {
    
    /*
    console.log(JSON.stringify( this.form.controls.note.value));
    const contenuto = btoa( (await this.readDocumento(this.fileToUpload, true)) as string);
    const documento: Documento = {
      codice_tipo_documento: this.tipoDocumento.codice,
      data_inserimento: new Date(),
      data_inserim: new Date(),
      data_aggiornamento: new Date(),
      nome: this.fileToUpload.name,
      pdf: contenuto,
      codice_estensione: this.codEstensione.toUpperCase(),
      note_operatore: '',
      id_utente: this.commonPslpService.getUtente().id_utente,
      note_cittadino: this.form.controls.note.value,
      stato: StatoDocumento.getByDescrizione('Non inviato').codice,
      ambito: this.commonPslpService.getAmbito()
    };

    const updated = await this.businessService.saveDocumento(documento).pipe(
      catchError(err => of(null))
    ).toPromise();
    this.utilitiesService.hideSpinner();
    if (updated) {
      this.labelFileToUpload.nativeElement.innerText = 'Scegli un file';
      this.myInputFile.nativeElement.value = '';
      this.fileToUpload = null;
      
      this.utilitiesService.showToastrInfoMessage('Allegato aggiunto correttamente.', 'Allegati');
    } else {
      this.utilitiesService.showToastrErrorMessage('Inserimento allegato fallito.', 'Allegati');
    }
    this.form.reset();
    this.success.emit();
    */
  }

}
