import { tidy, distinct, filter, summarize, sum } from "@tidyjs/tidy";
import CONSTANT from "./myfile";

const data = [
  { str: "foo", value: 3 },
  { str: "foo", value: 3 },
  { str: "foo", value: 1 },
  { str: "bar", value: 3 },
  { str: "bar", value: 1 },
  { str: "bar", value: 1 },
  { str: "foo", value: 3 },
  { str: "bar", value: 7 },
];

const res = tidy(
  data,
  distinct(["str", "value"]),
  filter((d) => d.value <= 3),
  summarize({ summedValue: sum("value") })
);

console.log(res);

console.log(CONSTANT);
