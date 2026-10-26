// Coming from Dwiddle signed in: its sign in token arrives after the # of the
// address. It is checked with the account service, kept as this site's own
// session, and wiped from the address bar straight away.
//
// Only the short lived access token travels. The long lived refresh token stays
// on Dwiddle, because two sites refreshing one token would sign both out.
import { supabase } from "./supabase.js";

export async function linkFromDwiddle() {
  const m = /[#&]link=([\w.-]+)/.exec(window.location.hash || "");
  if (!m) return;
  try { window.history.replaceState(null, "", window.location.pathname + window.location.search); } catch { /* ignore */ }
  if (!supabase) return;
  try {
    const token = m[1];
    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data?.user) return;
    const have = (await supabase.auth.getSession()).data?.session;
    if (have?.user?.id === data.user.id) return; // already this person
    await supabase.auth.setSession({ access_token: token, refresh_token: "linked-from-dwiddle" });
  } catch { /* they sign in here instead */ }
}
