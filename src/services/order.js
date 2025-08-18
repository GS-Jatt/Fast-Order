import { fromUnixTime, getUnixTime } from "date-fns";
import { SERVER_URL } from "../utils/util";
import { getUser } from "./login";

export function addOrder(data) {
  const user = getUser();
  const order = { ...data };

  if (!user) {
    return;
  }
  order.id = user.id;
  order.date = getUnixTime(new Date());
  order.oder = JSON.stringify(order.oder);

  fetch(SERVER_URL + "order/" + user.id, {
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
  })
    .then((res) => {
      console.log("add order ", res);
    })
    .catch((err) => console.error("add order error", err));
}

export async function getOrder(setOrder) {
  const user = getUser();
  const res = await fetch(SERVER_URL + "order/" + user.id, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    return;
  }
  const data = await res.json();
  if (Array.isArray(data)) {
    data.forEach((item) => {
      item.oder = JSON.parse(item.oder);
      const date = fromUnixTime(item.date);
      item.date = { month: date.getMonth(), day: date.getDay() };
    });
  }

  setOrder(data);
}
