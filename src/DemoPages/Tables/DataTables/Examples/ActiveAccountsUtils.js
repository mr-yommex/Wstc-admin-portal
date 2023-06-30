import namor from "namor";
import { Button,} from "reactstrap";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    firstName: <a className="text-dark" href="#/pages/channel-test">{namor.generate({ words: 1})}</a>,
    lastName: <a className="text-dark" href="#/pages/channel-test">{namor.generate({ words: 1})}</a>,
    acct: "00000000",
    progress: Math.floor(Math.random() * 100),
    status: "Active",
  //   suspend: <Button className="mb-2 me-2" color="warning">
  //   Suspend
  // </Button>,
  // restrict: <Button className="mb-2 me-2" color="dark">
  // Restrict
  //   </Button>,
    deactivate: <Button className="mb-2 me-2" color="danger">
    Deactivate
      </Button>,
    // status:
    //   statusChance > 0.66
    //     ? "relationship"
    //     : statusChance > 0.33
    //     ? "complicated"
    //     : "single",
  };
};

export function makeData(len = 20) {
  return range(len).map((d) => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson),
    };
  });
}
