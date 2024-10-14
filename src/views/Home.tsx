import { useEffect, useState } from "react";
import ModalView from "../components/ModalView";
import Instructions from "../components/Instructions";
import { IResultExplanation, ITestResult } from "../interfaces/ITestResult";
import { sampleResults } from "../data/sampleResults";
import CustomerData from "../components/CustomerData";
import TestExplanation from "../components/TestExplanation";

export default function Home() {
    const [instructionsOpen, setInstructionsOpen] = useState<boolean>(false);
    const [explanationOpen, setExplanationOpen] = useState<boolean>(false);
    const [testResults, setTestResults] = useState<ITestResult[] | null>();
    const [explanation, setExplanation] = useState<IResultExplanation | null>();


    useEffect(() => {
        setTestResults(sampleResults)
    }, [])

    function showExplanation(r: ITestResult) {
        const result: IResultExplanation = {
            firstGoalScore: r.firstGoalRank,
            secondGoalScore: r.secondGoalRank,
            thirdGoalScore: r.thirdGoalRank,
            fourthGoalScore: r.fourthGoalRank,
            fifthGoalScore: r.fifthGoalRank,
            sixthGoalScore: r.sixthGoalRank,
            seventhGoalScore: r.seventhGoalRank,
            firstGoalExplan: null,
            secondGoalExplan: null,
            thirdGoalExplan: null,
            fourthGoalExplan: null,
            fifthGoalExplan: null,
            sixthGoalExplan: null,
            seventhGoalExplan: null
        }
        setExplanation(result);
        setExplanationOpen(true)
    }

    const results = testResults && testResults.map((r: ITestResult, i: number) => (
        <tr key={`row${i}`}>
            <td>{r.testId}</td>
            <td>{r.subject}</td>
            <td>{r.testLevel}</td>
            <td>{r.rawScore}</td>
            <td>{r.percentCorrect}</td>
            <td>{r.ritScore}</td>
            <td>{r.hewittPercentile}</td>
            <td>{r.natlPercentile}</td>
            <td>{r.firstGoalRank}</td>
            <td>{r.secondGoalRank}</td>
            <td>{r.thirdGoalRank}</td>
            <td>{r.fourthGoalRank}</td>
            <td>{r.fifthGoalRank}</td>
            <td>{r.sixthGoalRank}</td>
            <td>{r.seventhGoalRank}</td>
            <td>{r.responses}</td>
            <td><button className="btn btn-secondary" onClick={() => showExplanation(r)}>Details</button></td>
        </tr>
    ));

    return (
        <>
            <div className="p-5">
                <h1 className="my-3">PERSONALIZED ACHIEVEMENT SUMMARY SYSTEM</h1>
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
                                    <td>Seventh Goal    Rank</td>
                                    <td>Responses</td>
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