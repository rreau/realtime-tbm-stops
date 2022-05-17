const LINE_ID: { [key: string]: string } = {
  TBNight: '58',
  BAT3: '69',
};

const getScheduleID = (idStopArea: string, nameLine: string): string => {
  const id = nameLine.split(' ').pop() as string;
  const idLine = Object.keys(LINE_ID).includes(id) ? LINE_ID[id] : id.toUpperCase();
  return `${idStopArea}/${idLine.match('^[0-9]$') === null ? idLine : `0${idLine}`}`;
};

export default getScheduleID;
