import { DateTime, Duration } from 'luxon';

let rooms = [
  {
    id: '1',
    name: 'Room 1',
  },
  {
    id: '2',
    name: 'Room 2',
  },
  {
    id: '3',
    name: 'Room 3',
  },
  {
    id: '4',
    name: 'Room 4',
  },
  {
    id: '5',
    name: 'Room 5',
  },
];

const startTime = '09:00';
const endTime = '18:00';
const interval = '00:30';

const dateEnd = DateTime.fromFormat(endTime, 'HH:mm');
const durationInterval = Duration.fromISOTime(interval);

let timeInterval = [];
let i = DateTime.fromFormat(startTime, 'HH:mm');
let id = 0;
while (i < dateEnd) {
  timeInterval.push({
    id,
    time: `${i.toFormat('HH:mma')}-${i
      .plus(durationInterval)
      .toFormat('HH:mma')}`,
    isTaken: '',
  });
  i = i.plus(durationInterval);
  id++;
}

rooms = rooms.map((item) => {
  return {
    id: item.id,
    name: item.name,
    slots: timeInterval,
  };
});

// console.log(rooms);
export default rooms;
