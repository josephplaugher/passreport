import { Dispatch, SetStateAction } from "react";

interface ICustomerDataProps {
    setInstructionsOpen: Dispatch<SetStateAction<boolean>>
}
export default function customerData(props: ICustomerDataProps) {
    return (
        <div className="row d-flex justify-content-start mb-4">
            <div className="col">
                <p className="mb-0">Parent / Guardian</p>
                <p className="mb-0">Joe Sample</p>
                <p className="mb-0">1234 Main St</p>
                <p className="mb-0">Anytown, US 01776</p>
            </div>
            <div className="col-4">
                <button className="btn btn-primary" onClick={() => props.setInstructionsOpen(true)}>
                    How TO READ THE TEST RESULTS
                </button>
            </div>
        </div>
    )
}