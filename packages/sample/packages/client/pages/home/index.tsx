import { format, utcToZonedTime } from 'date-fns-tz';
import React from 'react';

const timeZone = 'America/Los_Angeles';
const zonedDate = utcToZonedTime(new Date().toISOString(), timeZone);

const pattern = 'd.MMM.yyyy HH:mm:ss OOOO';
const output = format(zonedDate, pattern, { timeZone }).toString();

export function Home(): JSX.Element {
    return <div>{output}</div>;
}
