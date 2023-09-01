import { DateTime, Duration } from 'luxon';

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
  });
  i = i.plus(durationInterval);
  id++;
}

// console.log(timeInterval);
export default timeInterval;
