import namor from "namor";
import { Input, FormGroup, Button, Container, ButtonGroup } from "reactstrap";

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
        no: "00000000",
        date: "datetime",
        // update: "@PM Name",
        // status: "medium",
        // change: 
        //     statusChance > 0.66
        //     ? <FormGroup>
        //     <Input type="select" id="exampleCustomSelectDisabled" name="customSelect">
        //       <option value="">---</option>
        //       <option>Approve</option>
        //       <option>Decline</option>
        //     </Input>
        // </FormGroup>
        //     : statusChance > 0.33
        //         ? "Complete"
        //         : "Rejected",

        // reason: "Invalid Credentials",
        
        submit: "", 
        //  <Button className="mb-2 me-2" color="primary">
        //     Reactivate
        // </Button>,
        status:
            statusChance > 0.66
                ? "Active"
                : statusChance > 0.33
                    ? "Active"
                    : "Deactivated",
    };
};

export function makeData(len = 8) {
    return range(len).map((d) => {
        return {
            ...newPerson(),
            children: range(10).map(newPerson),
        };
    });
}
