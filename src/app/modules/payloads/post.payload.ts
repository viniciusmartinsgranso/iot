export interface CreatePostPayload {
  //Quanto tempo fica aberto
  openSeconds: any;

  //De quanto em quanto ocorre a abertura?
  startHour: any;

  //Quando começa a contagem?
  setOpen: any;

  //Hora atual
  getNowHour: number;
}
