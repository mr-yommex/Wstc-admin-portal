import namor from "namor";
import { Button, FormGroup, Input } from "reactstrap";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1}),
    lastName: namor.generate({ words: 1 }),
    acct: "00000000",
    approve: statusChance > 0.66
    ? <Button className="mb-2 me-2" color="primary">
    Approve
  </Button>
    : statusChance > 0.33
    ? "Successful"
    : <Button className="mb-2 me-2" color="primary">
    Approve
  </Button>,
    status:
      statusChance > 0.66
        ? "Pending"
        : statusChance > 0.33
        ? "Successful"
        : "Pending",
  };
};

export function makeData(len = 10) {
  return range(len).map((d) => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson),
    };
  });
}
