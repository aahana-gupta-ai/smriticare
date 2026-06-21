export function createWhatsAppDraft(messages){if(!Array.isArray(messages))throw new Error('Messages required');return messages.map(m=>`${m.time} — ${m.text}`).join('\n\n');}
export function deliveryState(){return {mode:'local-text-draft',sent:false,provider_connected:false};}
