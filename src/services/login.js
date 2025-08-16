/**
 * @type {string}
 */
const URL = import.meta.env.VITE_SERVER_URL;
/**
 *
 * @param {string} email
 * @param {string} password
 */
export async function login(email, password) {
  try {
    const res = await fetch(URL + "login", {
      body: JSON.stringify({ email, password }),
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

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}
