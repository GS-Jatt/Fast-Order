import { SERVER_URL } from "../utils/util";
import { getUser } from "./login";

export function updateCart(data) {
  const user = getUser();
  if (!user) {
    return;
  }
  fetch(SERVER_URL + "cart/" + user.id, {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error("update cart error", err));
}

export async function getCart(setCart) {
  const user = getUser();
  const res = await fetch(SERVER_URL + "cart/" + user.id, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    return;
  }
  const data = await res.json();
  console.log("cart", data);
  setCart(data);
}
