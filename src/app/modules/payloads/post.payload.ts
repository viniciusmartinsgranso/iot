export interface CreatePostPayload {
  //Quanto tempo fica aberto
  openSeconds: number;

  //De quanto em quanto ocorre a abertura?
  startHour: any;

  //Quando começa a contagem?
  setOpen: number;

  //Hora atual
  getNowHour: number;
}
