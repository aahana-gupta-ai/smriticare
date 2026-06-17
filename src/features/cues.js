export function filterCues(cues,category='all'){return cues.filter(c=>category==='all'||c.category===category);}
export function resolveCue(cues,id){const cue=cues.find(c=>c.id===id);if(!cue)throw new Error('Unknown cue');return cue;}
