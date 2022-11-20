export const apiRoutes = {
  apiKeys: {
    //Quanto tempo fica aberto
    openSeconds: {
      write: 'https://api.thingspeak.com/update?api_key=281A9TSP3E136A8W&field1={openSeconds}'
    },
    //De quanto em quanto ocorre a abertura?
    startHour: {
      write: 'https://api.thingspeak.com/update?api_key=281A9TSP3E136A8W&field2={startHour}'
    },
    //Quando começa a contagem?
    setOpen: {
      write: 'https://api.thingspeak.com/update?api_key=281A9TSP3E136A8W&field3={setOpen}'
    },
    //Pega o horário atual;
    getNowHour: {
      write: 'https://api.thingspeak.com/update?api_key=281A9TSP3E136A8W&field4={getNowHour}'
    },
  },
};
