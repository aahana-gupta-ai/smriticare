import {isoNow} from '../common/time.js';import {syntheticId} from '../common/validation.js';
export function exportPlan(id,routine,messages){syntheticId(id);return {id,project_id:'smriticare',is_synthetic:true,created_at:isoNow(),payload:{routine,messages,delivery:'not-sent'}};}
