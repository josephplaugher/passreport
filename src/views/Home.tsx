import { useEffect, useState, useRef } from "react";
import ModalView from "../components/ModalView";
import Instructions from "../components/Instructions";
import { IResultExplanation, ITestResult } from "../interfaces/ITestResult";
import { sampleResults } from "../data/sampleResults";
import CustomerData from "../components/CustomerData";
import TestExplanation from "../components/TestExplanation";
import Popover from "../components/Popover";
import React from "react";
import { ScoreEnum } from "../enums/Enums";

export default function Home() {
    const [instructionsOpen, setInstructionsOpen] = useState<boolean>(false);
    const [explanationOpen, setExplanationOpen] = useState<boolean>(false);
    const [testResults, setTestResults] = useState<ITestResult | null>();
    const [explanation, setExplanation] = useState<IResultExplanation | null>();
    const [explanationText, setExplanationText] = useState<string>("");
    const [focusedCell, setFocusedCell] = useState<string>("");

    useEffect(() => {
        setTestResults(sampleResults)
    }, [])

    function showScoreDetails(testId: number | undefined, score: number | string | undefined, scoreType: string | undefined) {
        console.log(`Clicked on ${testId} with score ${score} on score type ${scoreType}`);
        setExplanationText(`Clicked on ${testId} with score ${score} on score type ${scoreType}`);
    }

    const handleFocus = (cellId: string) => {
        setFocusedCell(cellId);
    };

    const handleBlur = () => {
        setFocusedCell("");
    };

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
                                    <th scope="col">Test</th><th scope="col">Student</th><th scope="col">Date Scored</th><th scope="col">Comp % Tile</th><th scope="col">Student Name</th>
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

                    <div className="row my-5 table-responsive">
                        <table className="table w-auto">
                            <thead>
                                <tr>
                                    <th scope="col">Test Id<br />Raw Score</th>
                                    <th scope="col">Subject<br />% Correct</th>
                                    <th scope="col">Test Level<br />RIT Score</th>
                                    <th scope="col">Hewitt Percentile</th>
                                    <th scope="col">Natl Percentile</th>
                                    <th scope="col">First Goal Rank</th>
                                    <th scope="col">Second Goal Rank</th>
                                    <th scope="col">Third Goal Rank</th>
                                    <th scope="col">Fourth Goal Rank</th>
                                    <th scope="col">Fifth Goal Rank</th>
                                    <th scope="col">Sixth Goal Rank</th>
                                    <th scope="col">Seventh Goal Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-primary">
                                    <td>{testResults?.mathTest.testId}</td>
                                    <td>{testResults?.mathTest.subject}</td>
                                    <td>{testResults?.mathTest.testLevel}</td>
                                </tr>
                                <tr>
                                    <td tabIndex={0}
                                        onFocus={() => handleFocus("cell-a1")}
                                        onBlur={handleBlur}
                                        className={`${focusedCell == "cell-a1" ? "bg-success" : "bg-light"}`} onClick={() => showScoreDetails(testResults?.mathTest.testId, testResults?.mathTest.rawScore, "rawScore")}>{testResults?.mathTest.rawScore}</td>
                                    <td tabIndex={0}
                                        onFocus={() => handleFocus("cell-a2")}
                                        onBlur={handleBlur}
                                        className={`${focusedCell == "cell-a2" ? "bg-success" : "bg-light"}`} onClick={() => showScoreDetails(testResults?.mathTest.testId, testResults?.mathTest.percentCorrect, "percentCorrect")}>{testResults?.mathTest.percentCorrect}</td>
                                    <td tabIndex={0}
                                        onFocus={() => handleFocus("cell-a3")}
                                        onBlur={handleBlur}
                                        className={`${focusedCell == "cell-a3" ? "bg-success" : "bg-light"}`} onClick={() => showScoreDetails(testResults?.mathTest.testId, testResults?.mathTest.ritScore, "ritScore")}>{testResults?.mathTest.ritScore}</td>
                                    <td tabIndex={0}
                                        onFocus={() => handleFocus("cell-a4")}
                                        onBlur={handleBlur}
                                        className={`${focusedCell == "cell-a4" ? "bg-success" : "bg-light"}`} onClick={() => showScoreDetails(testResults?.mathTest.testId, testResults?.mathTest.hewittPercentile, "hewittPercentile")}>{testResults?.mathTest.hewittPercentile}</td>
                                    <td className={`${focusedCell == testResults?.mathTest.natlPercentile.toString() && "focused"}`} onClick={() => showScoreDetails(testResults?.mathTest.testId, testResults?.mathTest.natlPercentile, "natlPercentile")}>{testResults?.mathTest.natlPercentile}</td>
                                    <td className={`${focusedCell == testResults?.mathTest.firstGoalRank.toString() && "focused"}`} onClick={() => showScoreDetails(testResults?.mathTest.testId, testResults?.mathTest.firstGoalRank, "firstGoalRank")}>{testResults?.mathTest.firstGoalRank}</td>
                                    <td className={`${focusedCell == testResults?.mathTest.secondGoalRank.toString() && "focused"}`} onClick={() => showScoreDetails(testResults?.mathTest.testId, testResults?.mathTest.secondGoalRank, "secondGoalRank")}>{testResults?.mathTest.secondGoalRank}</td>
                                    <td className={`${focusedCell == testResults?.mathTest.thirdGoalRank.toString() && "focused"}`} onClick={() => showScoreDetails(testResults?.mathTest.testId, testResults?.mathTest.thirdGoalRank, "thirdGoalRank")}>{testResults?.mathTest.thirdGoalRank}</td>
                                    <td className={`${focusedCell == testResults?.mathTest.fourthGoalRank.toString() && "focused"}`} onClick={() => showScoreDetails(testResults?.mathTest.testId, testResults?.mathTest.fourthGoalRank, "fourthGoalRank")}>{testResults?.mathTest.fourthGoalRank}</td>
                                    <td className={`${focusedCell == testResults?.mathTest.fifthGoalRank.toString() && "focused"}`} onClick={() => showScoreDetails(testResults?.mathTest.testId, testResults?.mathTest.fifthGoalRank, "fifthGoalRank")}>{testResults?.mathTest.fifthGoalRank}</td>
                                    <td className={`${focusedCell == testResults?.mathTest.sixthGoalRank.toString() && "focused"}`} onClick={() => showScoreDetails(testResults?.mathTest.testId, testResults?.mathTest.sixthGoalRank, "sixthGoalRank")}>{testResults?.mathTest.sixthGoalRank}</td>
                                    <td className={`${focusedCell == testResults?.mathTest.seventhGoalRank.toString() && "focused"}`} onClick={() => showScoreDetails(testResults?.mathTest.testId, testResults?.mathTest.seventhGoalRank, "seventhGoalRank")}>{testResults?.mathTest.seventhGoalRank}</td>
                                </tr>
                                <tr className="table-primary">
                                    <td>{testResults?.readingTest.testId}</td>
                                    <td>{testResults?.readingTest.subject}</td>
                                    <td>{testResults?.readingTest.testLevel}</td>
                                </tr>
                                <tr>
                                    <td onClick={() => showScoreDetails(testResults?.readingTest.testId, testResults?.readingTest.rawScore, "rawScore")}>{testResults?.readingTest.rawScore}</td>
                                    <td onClick={() => showScoreDetails(testResults?.readingTest.testId, testResults?.readingTest.percentCorrect, "percentCorrect")}>{testResults?.readingTest.percentCorrect}</td>
                                    <td onClick={() => showScoreDetails(testResults?.readingTest.testId, testResults?.readingTest.ritScore, "ritScore")}>{testResults?.readingTest.ritScore}</td>
                                    <td onClick={() => showScoreDetails(testResults?.readingTest.testId, testResults?.readingTest.hewittPercentile, "hewittPercentile")}>{testResults?.readingTest.hewittPercentile}</td>
                                    <td onClick={() => showScoreDetails(testResults?.readingTest.testId, testResults?.readingTest.natlPercentile, "natlPercentile")}>{testResults?.readingTest.natlPercentile}</td>
                                    <td onClick={() => showScoreDetails(testResults?.readingTest.testId, testResults?.readingTest.firstGoalRank, "firstGoalRank")}>{testResults?.readingTest.firstGoalRank}</td>
                                    <td onClick={() => showScoreDetails(testResults?.readingTest.testId, testResults?.readingTest.secondGoalRank, "secondGoalRank")}>{testResults?.readingTest.secondGoalRank}</td>
                                    <td onClick={() => showScoreDetails(testResults?.readingTest.testId, testResults?.readingTest.thirdGoalRank, "thirdGoalRank")}>{testResults?.readingTest.thirdGoalRank}</td>
                                    <td onClick={() => showScoreDetails(testResults?.readingTest.testId, testResults?.readingTest.fourthGoalRank, "fourthGoalRank")}>{testResults?.readingTest.fourthGoalRank}</td>
                                    <td onClick={() => showScoreDetails(testResults?.readingTest.testId, testResults?.readingTest.fifthGoalRank, "fifthGoalRank")}>{testResults?.readingTest.fifthGoalRank}</td>
                                    <td onClick={() => showScoreDetails(testResults?.readingTest.testId, testResults?.readingTest.sixthGoalRank, "sixthGoalRank")}>{testResults?.readingTest.sixthGoalRank}</td>
                                    <td onClick={() => showScoreDetails(testResults?.readingTest.testId, testResults?.readingTest.seventhGoalRank, "seventhGoalRank")}>{testResults?.readingTest.seventhGoalRank}</td>
                                </tr>
                                <tr className="table-primary">
                                    <td>{testResults?.writingTest.testId}</td>
                                    <td>{testResults?.writingTest.subject} </td>
                                    <td>{testResults?.writingTest.testLevel}</td>
                                </tr>
                                <tr>
                                    <td onClick={() => showScoreDetails(testResults?.writingTest.testId, testResults?.writingTest.rawScore, "rawScore")}>{testResults?.writingTest.rawScore}</td>
                                    <td onClick={() => showScoreDetails(testResults?.writingTest.testId, testResults?.writingTest.percentCorrect, "percentCorrect")}>{testResults?.writingTest.percentCorrect}</td>
                                    <td onClick={() => showScoreDetails(testResults?.writingTest.testId, testResults?.writingTest.ritScore, "ritScore")}>{testResults?.writingTest.ritScore}</td>
                                    <td onClick={() => showScoreDetails(testResults?.writingTest.testId, testResults?.writingTest.hewittPercentile, "hewittPercentile")}>{testResults?.writingTest.hewittPercentile}</td>
                                    <td onClick={() => showScoreDetails(testResults?.writingTest.testId, testResults?.writingTest.natlPercentile, "natlPercentile")}>{testResults?.writingTest.natlPercentile}</td>
                                    <td onClick={() => showScoreDetails(testResults?.writingTest.testId, testResults?.writingTest.firstGoalRank, "firstGoalRank")}>{testResults?.writingTest.firstGoalRank}</td>
                                    <td onClick={() => showScoreDetails(testResults?.writingTest.testId, testResults?.writingTest.secondGoalRank, "secondGoalRank")}>{testResults?.writingTest.secondGoalRank}</td>
                                    <td onClick={() => showScoreDetails(testResults?.writingTest.testId, testResults?.writingTest.thirdGoalRank, "thirdGoalRank")}>{testResults?.writingTest.thirdGoalRank}</td>
                                    <td onClick={() => showScoreDetails(testResults?.writingTest.testId, testResults?.writingTest.fourthGoalRank, "fourthGoalRank")}>{testResults?.writingTest.fourthGoalRank}</td>
                                    <td onClick={() => showScoreDetails(testResults?.writingTest.testId, testResults?.writingTest.fifthGoalRank, "fifthGoalRank")}>{testResults?.writingTest.fifthGoalRank}</td>
                                    <td onClick={() => showScoreDetails(testResults?.writingTest.testId, testResults?.writingTest.sixthGoalRank, "sixthGoalRank")}>{testResults?.writingTest.sixthGoalRank}</td>
                                    <td onClick={() => showScoreDetails(testResults?.writingTest.testId, testResults?.writingTest.seventhGoalRank, "seventhGoalRank")}>{testResults?.writingTest.seventhGoalRank}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="explanation" className="row border border-primary border-2 text-center">
                        {explanationText ? <p>{explanationText}</p> : <p>Select a score to see more information</p>}
                    </div>
                </div>
            </div >
            <ModalView open={instructionsOpen} setOpen={setInstructionsOpen} title="INSTRUCTIONS">
                <Instructions />
            </ModalView>
        </>
    )
}
