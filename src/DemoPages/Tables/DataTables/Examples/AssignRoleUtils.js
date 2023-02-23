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
    // status: "Active",
    date: "02/2023",
    limit: statusChance > 0.66
    ? "Admin"
    : statusChance > 0.33
    ? <FormGroup>
    <br />
<Input type="select" id="exampleCustomSelect" name="customSelect">
  <option value="">Select</option>
  <option>Admin</option>
</Input>
</FormGroup> 
    : <FormGroup>
    <br />
<Input type="select" id="exampleCustomSelect" name="customSelect">
  <option value="">Select</option>
  <option>Admin</option>
</Input>
</FormGroup>,
    suspend: statusChance > 0.66
    ? " "
    : statusChance > 0.33
    ? <Button className="mb-2 me-2" color="primary">
    Apply
  </Button>
    : <Button className="mb-2 me-2" color="primary">
    Apply
  </Button>,

    status:
      statusChance > 0.66
        ? "Admin"
        : statusChance > 0.33
        ? "Regular"
        : "Regular",
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
