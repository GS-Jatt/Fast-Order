/**
 * @type {string}
 */
const URL = import.meta.env.VITE_SERVER_URL;
/**
 *
 * @param {string} email
 * @param {string} password
 * @param {string} name
 */
export async function signup(email, password, name) {
  try {
    const res = await fetch(URL + "signup", {
      body: JSON.stringify({ email, password, name }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      return { error: await res.text(), data: null };
    }
    const data = await res.json();
    return { data, error: null };
  } catch (err) {
    return { error: err.message || "network error", data: null };
  }
}
