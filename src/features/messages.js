import {textLimit} from '../common/validation.js';
export function cueMessage(cue,prefix=''){const text=textLimit(cue.text,1000);const name=textLimit(prefix,80);return name?`${name}: ${text}`:text;}
export function messageSequence(entries,cues){return entries.map(entry=>({time:entry.time,cue_id:entry.cue_id,text:cueMessage(cues.find(c=>c.id===entry.cue_id)??{text:''})}));}
