import { utcToZonedTime } from 'date-fns-tz';
import React from 'react';

const timeZone = 'America/Los_Angeles';
const zonedDate = utcToZonedTime(new Date().toISOString(), timeZone);

export function Home(): JSX.Element {
    return <div>{zonedDate.toJSON()}</div>;
}
