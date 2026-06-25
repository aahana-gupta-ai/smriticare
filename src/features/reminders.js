import {timeMinutes} from '../common/time.js';
export function nextReminder(entries,currentTime){const now=timeMinutes(currentTime);const sorted=[...entries].sort((a,b)=>timeMinutes(a.time)-timeMinutes(b.time));return sorted.find(e=>timeMinutes(e.time)>=now)??null;}
export function routineDuration(entries){if(!entries.length)return 0;const values=entries.map(e=>timeMinutes(e.time));return Math.max(...values)-Math.min(...values);}
