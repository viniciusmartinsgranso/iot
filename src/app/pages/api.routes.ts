export const apiRoutes = {
  apiKeys: {
    openSeconds: {
      write: 'https://api.thingspeak.com/update?api_key=281A9TSP3E136A8W&field1={openSeconds}'
    },
    startHour: {
      write: 'https://api.thingspeak.com/update?api_key=281A9TSP3E136A8W&field2={startHour}'
    },
    setOpen: {
      write: 'https://api.thingspeak.com/update?api_key=281A9TSP3E136A8W&field3={setOpen}'
    },
    getNowHour: {
      write: 'https://api.thingspeak.com/update?api_key=281A9TSP3E136A8W&field4={getNowHour}'
    },
  },
};
