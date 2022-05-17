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
