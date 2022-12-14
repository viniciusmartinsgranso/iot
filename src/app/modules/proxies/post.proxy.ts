export interface PostProxy {
  //Quanto tempo fica aberto
  openSeconds: number;

  //De quanto em quanto ocorre a abertura?
  startHour: number;

  //Quando começa a contagem?
  setOpen: number;

  //Pega o horário atual;
  getNowHour?: number;

  createdAt?: Date;
  updatedAt?: Date;
}
