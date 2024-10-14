import { ITestResult } from "../interfaces/ITestResult";

export default function TestResult(props: ITestResult) {

    return (
        <>
            <h3 className="text-center">MATHEMATICS TEST RESULTS</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Test ID</th>
                        <th>Date Taken</th>
                        <th>Grade</th>
                        <th>Test Level</th>
                        <th>Raw Score</th>
                        <th>Pct Right</th>
                        <th>RIT Score</th>
                        <th>Hewitt Percentile</th>
                        <th>Nat'l Percentile</th>
                        <th>Overall Performance</th>
                        <th>Goal 1</th>
                        <th>Goal 2</th>
                        <th>Goal 3</th>
                        <th>Goal 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.testId}</td>
                        <td>{props.8}</td>
                        <td>{props.7}</td>
                        <td>{props.7}</td>
                        <td>{props.38}</td>
                        <td>{props.86}</td>
                        <td>{props.239}</td>
                        <td>{props.82}</td>
                        <td>{props.96}</td>
                        <td>{props.HI}</td>
                        <td>{props.HI}</td>
                        <td>{props.HI}</td>
                        <td>{props.HI}</td>
                        <td>{props.HI}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}