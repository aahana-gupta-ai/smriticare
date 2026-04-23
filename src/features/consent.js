export function canUseVoice(consent,now=new Date()){if(!consent||consent.permission_granted!==true||consent.revoked===true||!consent.voice_owner_id)return false;const expiry=new Date(consent.expires_at);return Number.isFinite(expiry.valueOf())&&expiry>now;}
export function requireVoiceConsent(consent,now=new Date()){if(!canUseVoice(consent,now))throw new Error('Valid voice-owner permission is required');return consent;}
export function revokeConsent(consent){return {...consent,revoked:true};}
