/**
 * Portale Servizi Lavoro API
 * API per il backend del portale servizi lavoro.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { TipoDocumentoMimeType } from './tipoDocumentoMimeType';


export interface TipoDocumento { 
    /**
     * codice
     */
    codice?: string;
    /**
     * descrizione
     */
    descrizione?: string;
    mime_type?: Array<TipoDocumentoMimeType>;
}
