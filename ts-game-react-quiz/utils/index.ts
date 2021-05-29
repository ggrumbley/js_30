export { supabase } from './initSupabase';
export { $fetch, initBling } from './bling';

export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);
