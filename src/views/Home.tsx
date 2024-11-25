import { useEffect, useState } from "react";
import ModalView from "../components/ModalView";
import Instructions from "../components/Instructions";
import { IResultExplanation, ITestResult } from "../interfaces/ITestResult";
import { sampleResults } from "../data/sampleResults";
import CustomerData from "../components/CustomerData";
import TestExplanation from "../components/TestExplanation";
import CellToolTip from "../components/CellToolTip";
import { useNavigate } from "react-router";
import Header from "../components/Header";

export default function Home() {
    const [instructionsOpen, setInstructionsOpen] = useState<boolean>(false);
    const [explanationOpen, setExplanationOpen] = useState<boolean>(false);
    const [testResults, setTestResults] = useState<ITestResult[] | null>();
    const [explanation, setExplanation] = useState<IResultExplanation | null>();
    const [row, setRow] = useState<number>(-1);
    const [column, setColumn] = useState<string>('');

    useEffect(() => {
        // const transformedSampleResults = [];
        // const names = []
        // const values = []
        // names.push(Object.keys(sampleResults[0]));
        // // values.push(Object.values(sampleResults[0]));
        // console.log("name", names)
        // // console.log("value", values)
        // for (let i: number = 0; i < names[0].length; i++) {
        //     let values = Object.values(sampleResults)[0];
        //     console.log('values: ', values[i])
        //     let item = { name: names[0][i], value: Object.values(sampleResults)[0] }
        //     console.log("item " + i, item)
        //     transformedSampleResults.push(item);
        // }
        // console.log(transformedSampleResults)
        // sampleResults.prototype.sayHello = function () {
        //     // Get the keys of the current object and store them as a string
        //     this.objectKeys = Object.keys(this).join(", ");

        //     return `Hello, my name is ${this.name}`;
        // };
        // setTestResults(sampleResults)
    }, [])

    function showExplanation(r: ITestResult) {
        // const result: IResultExplanation = {
        //     firstGoalScore: r.firstGoalRank.value,
        //     secondGoalScore: r.secondGoalRank.name,
        //     thirdGoalScore: r.thirdGoalRank.name,
        //     fourthGoalScore: r.fourthGoalRank.name,
        //     fifthGoalScore: r.fifthGoalRank.name,
        //     sixthGoalScore: r.sixthGoalRank.name,
        //     seventhGoalScore: r.seventhGoalRank.name,
        // }
        // setExplanation(result);
        setExplanationOpen(true)
    }

    function nameOf(obj: any): string {
        return Object.keys(obj)[0];
    }

    function TableData(props: { property: string | number, thisColumn: string, index: number }) {
        // const { property, thisColumn, index } = props;
        return (
            <>
                {/* <td onClick={() => {
                    setRow(index); setColumn(thisColumn)
                }}>
                    {row == index && column == property && <Popover />}
                    {property}
                </td> */}
            </>
        )
    }

    const results = testResults && testResults.map((r: ITestResult, i: number) => (
        <tr key={`row${i}`}>
            <td>{r.testId}</td>
            <td>{r.subject}</td>
            <td>{r.testLevel}</td>
            <td>{r.rawScore}</td>
            <td>{r.percentCorrect}</td>
            <td>{r.ritScore}</td>
            <td> {r.hewittPercentile}</td>
            <td>{r.nationalPercentile}</td>
            <td>{r.firstGoalRank}</td>
            <td>{r.secondGoalRank}</td>
            <td>{r.thirdGoalRank}</td>
            <td>{r.fourthGoalRank}</td>
            <td>{r.fifthGoalRank}</td>
            <td>{r.sixthGoalRank}</td>
            <td>{r.seventhGoalRank}</td>
            <td>{r.response}</td>
            <td><button className="btn btn-secondary" onClick={() => showExplanation(r)}>Details</button></td>
        </tr>
    ));

    return (
        <>
            <Header />
            <div className="p-5">
                <h3>REPORT OF TEST RESULTS</h3>

                <div className="container-fluid">
                    <CustomerData setInstructionsOpen={setInstructionsOpen} />
                    <div className="row d-flex justify-content-center">
                        <h3 className="text-center">SUMMARY OF RESULTS</h3>
                    </div>
                    <div className="row">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Test</th><th>Student</th><th>Date Scored</th><th>Comp % Tile</th><th>Student Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>51234</td>
                                    <td>266423-3</td>
                                    <td>04/31/2022</td>
                                    <td>83</td>
                                    <td>Eileen Dover</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row my-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Test Id</td>
                                    <td>Subject</td>
                                    <td>Test Level</td>
                                    <td>Raw Score</td>
                                    <td>Percent Correct</td>
                                    <td>Rit Score</td>
                                    <td>Hewitt Percentile</td>
                                    <td>Natl Percentile</td>
                                    <td>First Goal Rank</td>
                                    <td>Second Goal Rank</td>
                                    <td>Third Goal Rank</td>
                                    <td>Fourth Goal Rank</td>
                                    <td>Fifth Goal Rank</td>
                                    <td>Sixth Goal Rank</td>
                                    <td>Seventh Goal Rank</td>
                                </tr>
                            </thead>
                            <tbody>
                                {results}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
            <ModalView open={instructionsOpen} setOpen={setInstructionsOpen} title="INSTRUCTIONS">
                <Instructions />
            </ModalView>
            {explanation &&
                <ModalView open={explanationOpen} setOpen={setExplanationOpen} title="EXPLANATION">
                    <TestExplanation explanation={explanation} />
                </ModalView>
            }
        </>
    )
}
