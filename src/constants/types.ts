export interface IformatStopAreaInfo {
  stopPoints: Array<{
    id: string;
    name: string;
    routes: Array<{
      name: string;
      line: {
        name: string;
      };
    }>;
  }>;
}

export interface IRawElement {
  destination_name: string;
  waittime: string;
  realtime: string;
  vehicle_position_updated_at: string;
}

export interface IformatRealtimeInfo {
  destinations: { [keys: string]: Array<IRawElement> };
}
