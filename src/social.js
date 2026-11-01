// Friends, the weekly board, messages and the online library. Everything goes
// through functions in the database that check who is asking (see
// supabase/social.sql). Until that file has been run, every call answers
// { missing: true } and the screens say so rather than failing.

import { supabase } from "./supabase.js";

const gone = (e) => e && (e.code === "PGRST202" || e.code === "42883" || e.code === "42P01" || e.code === "PGRST205" || /could not find|does not exist/i.test(e.message || ""));
const fail = (e) => ({ ok: false, missing: gone(e), error: e?.message || "Something went wrong." });

async function rpc(name, args) {
  if (!supabase) return { ok: false, missing: true, error: "Not connected." };
  const { data, error } = await supabase.rpc(name, args);
  return error ? fail(error) : { ok: true, data };
}

export const setHandle = (h) => rpc("set_handle", { h });
export const leaderboard = (scope) => rpc("leaderboard", { scope });
export async function publish({ kind, title, about, subject, payload, listed }) {
  if (!supabase) return { ok: false, missing: true, error: "Not connected." };
  const { data: u } = await supabase.auth.getUser();
  if (!u?.user) return { ok: false, error: "Sign in first." };
  const size = JSON.stringify(payload).length;
  if (size > 2900000) return { ok: false, error: "That is too big to share. Try a smaller one." };
  const { data, error } = await supabase.from("shares")
    .insert({ owner: u.user.id, kind, title: title.slice(0, 120), about: about?.slice(0, 300) || null, subject: subject?.slice(0, 40) || null, payload, listed: !!listed })
    .select("id").single();
  return error ? fail(error) : { ok: true, id: data.id };
}

/* ---------- messages ---------- */

/* ---------- what a share carries ---------- */

