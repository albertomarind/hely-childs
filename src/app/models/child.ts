export interface Child {
  nombreNino: string;
  edadNino: string;
  nombrePadreTutor: string;
  telefonoPadreTutor: string;
  autActividadFisica: boolean;
  autBano: boolean;
  autMaquillaje: boolean;
  autPinturas: boolean;
  padAlergiaEnfermedad: boolean;
  descAlergiaEnfermedad?: string;
  terminosCondiciones: boolean;
  observaciones?: string;
  [key: string]: any;
}
