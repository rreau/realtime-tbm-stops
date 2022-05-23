interface IformatRealtimeInfo {
  destinations: { [keys: string]: Array<IRawElement> };
}

interface IRealtimeInfoElement {
  destination: string;
  waittime: string;
  realtime: boolean;
  lastUpdateVehicule: string;
}

interface IRawElement {
  destination_name: string;
  waittime: string;
  realtime: string;
  vehicle_position_updated_at: string;
}

const formatRealtimeInfo = (rawData: IformatRealtimeInfo) => {
  const data: Array<IRealtimeInfoElement> = [];

  Object.keys(rawData.destinations).map((destination: string) => {
    rawData.destinations[destination].map((tram: IRawElement) => {
      const value = {
        destination: tram.destination_name,
        waittime: tram.waittime,
        realtime: tram.realtime === '1' ? true : false,
        lastUpdateVehicule: tram.vehicle_position_updated_at,
      };
      data.push(value);
    });
  });

  return data;
};

export default formatRealtimeInfo;
