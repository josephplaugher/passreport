// import { ITestResult } from "../interfaces/ITestResult";

import { ITestResult } from "../interfaces/ITestResult"

interface IToolTip {
    param: ITestResult | null;
    index: number;
    column: string;
}

export default function CellToolTip(props: IToolTip) {
    return (
        <>
            {props.param && props.column === typeof (props.param) ? <div>tool tip: {typeof (props.param)}</div> : null}
        </>
    )
}