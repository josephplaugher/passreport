import { useEffect, useState } from "react";
import ModalView from "../components/ModalView";
import Instructions from "../components/Instructions";
import { ITestResult } from "../interfaces/ITestResult";
import CustomerData from "../components/CustomerData";
import Header from "../components/Header";
import { AxiosClient } from "../data/Ajax";
import { SubjectEnum } from "../enums/Enums";

export default function Home() {
    const [instructionsOpen, setInstructionsOpen] = useState<boolean>(false);
    // const [explanationOpen, setExplanationOpen] = useState<boolean>(false);
    const [mTestResults, setMTestResults] = useState<ITestResult | null>();
    const [lTestResults, setLTestResults] = useState<ITestResult | null>();
    const [rTestResults, setRTestResults] = useState<ITestResult | null>();
    // const [explanation, setExplanation] = useState<IResultExplanation | null>();
    const [explanationText, setExplanationText] = useState<string>("");
    // const [focusedCell, setFocusedCell] = useState<string>("");

    function getResultsByTestId() {
        AxiosClient.get("TestResult/43450")
            .then((r: any) => {
                setRTestResults(r.data.find((item: any) => item.subject == "R"));
                setLTestResults(r.data.find((item: any) => item.subject == "L"));
                setMTestResults(r.data.find((item: any) => item.subject == "M"));
            }).catch((error: any) => {
                console.log("error", error)
            })
    }

    useEffect(() => {
        getResultsByTestId();
    }, [])

    function showScoreDetails(subject: string | undefined, score: number | string | undefined, scoreType: string | undefined) {
        // add logic to get the actual score description when a cell is clicked
        setExplanationText(`Description for score ${score} on test ${subject} on column ${scoreType}`);
    }

    // const handleFocus = (cellId: string) => {
    //     setFocusedCell(cellId);
    // };

    // const handleBlur = () => {
    //     setFocusedCell("");
    // };

    

    return (
        <>
            <div className="">
                <Header />

                <div className="container-fluid p-5">
                    <h3>REPORT OF TEST RESULTS</h3>
                    <CustomerData setInstructionsOpen={setInstructionsOpen} />
                    <div className="row d-flex justify-content-center">
                        <h4 className="text-center">SUMMARY OF RESULTS</h4>
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
                                    <td>{mTestResults?.testId}</td>
                                    <td>{mTestResults?.studentId}</td>
                                    <td>[04/31/2022]</td>
                                    <td>[93]</td>
                                    <td>Eileen Dover</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="explanation" className="row border border-primary border-2 text-center my-4">
                        {explanationText ? <p>{explanationText}</p> : <p>Select a score to see more information</p>}
                    </div>
                    <div className="row my-5 table-responsive">
                        <table className="table w-auto">
                            <thead>
                                <tr>
                                    <th scope="col" className="m-4">Raw Score</th>
                                    <th scope="col" className="m-4">Percent Correct</th>
                                    <th scope="col" className="m-4">Rit Score</th>
                                    <th scope="col" className="m-4">Hewitt Percentile</th>
                                    <th scope="col" className="m-4">Natl Percentile</th>
                                    <th scope="col" className="m-4">Overall Rank</th>
                                    <th scope="col" className="m-4">First Goal Rank</th>
                                    <th scope="col" className="m-4">Second Goal Rank</th>
                                    <th scope="col" className="m-4">Third Goal Rank</th>
                                    <th scope="col" className="m-4">Fourth Goal Rank</th>
                                    <th scope="col" className="m-4">Fifth Goal Rank</th>
                                    <th scope="col" className="m-4">Sixth Goal Rank</th>
                                    <th scope="col" className="m-4">Seventh Goal Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-primary">
                                    <td>Mathematics</td>
                                </tr>
                                {mTestResults?.subject == SubjectEnum.M &&
                                    <tr role="button">
                                        <td onClick={() => showScoreDetails("Mathematics", mTestResults?.rawScore, "rawScore")}>{mTestResults?.rawScore}</td>
                                        <td onClick={() => showScoreDetails("Mathematics", mTestResults?.percentCorrect, "percentCorrect")}>{mTestResults?.percentCorrect}</td>
                                        <td onClick={() => showScoreDetails("Mathematics", mTestResults?.ritScore, "ritScore")}>{mTestResults?.ritScore}</td>
                                        <td onClick={() => showScoreDetails("Mathematics", mTestResults?.hewittPercentile, "hewittPercentile")}>{mTestResults?.hewittPercentile}</td>
                                        <td onClick={() => showScoreDetails("Mathematics", mTestResults?.nationalPercentile, "nationalPercentile")}>{mTestResults?.nationalPercentile}</td>
                                        <td onClick={() => showScoreDetails("Mathematics", mTestResults?.overallRank, "firstGoalRank")}>{mTestResults?.overallRank}</td>
                                        <td onClick={() => showScoreDetails("Mathematics", mTestResults?.firstGoalRank, "firstGoalRank")}>{mTestResults?.firstGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Mathematics", mTestResults?.secondGoalRank, "secondGoalRank")}>{mTestResults?.secondGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Mathematics", mTestResults?.thirdGoalRank, "thirdGoalRank")}>{mTestResults?.thirdGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Mathematics", mTestResults?.fourthGoalRank, "fourthGoalRank")}>{mTestResults?.fourthGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Mathematics", mTestResults?.fifthGoalRank, "fifthGoalRank")}>{mTestResults?.fifthGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Mathematics", mTestResults?.sixthGoalRank, "sixthGoalRank")}>{mTestResults?.sixthGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Mathematics", mTestResults?.seventhGoalRank, "seventhGoalRank")}>{mTestResults?.seventhGoalRank}</td>
                                    </tr>
                                }
                                <tr className="table-primary">
                                    <td>Reading</td>
                                </tr>
                                {rTestResults?.subject == SubjectEnum.R &&
                                    <tr role="button">
                                        <td onClick={() => showScoreDetails("Reading", rTestResults?.rawScore, "rawScore")}>{rTestResults?.rawScore}</td>
                                        <td onClick={() => showScoreDetails("Reading", rTestResults?.percentCorrect, "percentCorrect")}>{rTestResults?.percentCorrect}</td>
                                        <td onClick={() => showScoreDetails("Reading", rTestResults?.ritScore, "ritScore")}>{rTestResults?.ritScore}</td>
                                        <td onClick={() => showScoreDetails("Reading", rTestResults?.hewittPercentile, "hewittPercentile")}>{rTestResults?.hewittPercentile}</td>
                                        <td onClick={() => showScoreDetails("Reading", rTestResults?.nationalPercentile, "natlPercentile")}>{rTestResults?.nationalPercentile}</td>
                                        <td onClick={() => showScoreDetails("Reading", rTestResults?.overallRank, "firstGoalRank")}>{rTestResults?.overallRank}</td>
                                        <td onClick={() => showScoreDetails("Reading", rTestResults?.firstGoalRank, "firstGoalRank")}>{rTestResults?.firstGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Reading", rTestResults?.secondGoalRank, "secondGoalRank")}>{rTestResults?.secondGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Reading", rTestResults?.thirdGoalRank, "thirdGoalRank")}>{rTestResults?.thirdGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Reading", rTestResults?.fourthGoalRank, "fourthGoalRank")}>{rTestResults?.fourthGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Reading", rTestResults?.fifthGoalRank, "fifthGoalRank")}>{rTestResults?.fifthGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Reading", rTestResults?.sixthGoalRank, "sixthGoalRank")}>{rTestResults?.sixthGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Reading", rTestResults?.seventhGoalRank, "seventhGoalRank")}>{rTestResults?.seventhGoalRank}</td>
                                    </tr>
                                }
                                <tr className="table-primary">
                                    <td>Language</td>
                                </tr>
                                {lTestResults?.subject == SubjectEnum.L &&
                                    <tr role="button">
                                        <td onClick={() => showScoreDetails("Language", lTestResults?.rawScore, "rawScore")}>{lTestResults?.rawScore}</td>
                                        <td onClick={() => showScoreDetails("Language", lTestResults?.percentCorrect, "percentCorrect")}>{lTestResults?.percentCorrect}</td>
                                        <td onClick={() => showScoreDetails("Language", lTestResults?.ritScore, "ritScore")}>{lTestResults?.ritScore}</td>
                                        <td onClick={() => showScoreDetails("Language", lTestResults?.hewittPercentile, "hewittPercentile")}>{lTestResults?.hewittPercentile}</td>
                                        <td onClick={() => showScoreDetails("Language", lTestResults?.nationalPercentile, "natlPercentile")}>{lTestResults?.nationalPercentile}</td>
                                        <td onClick={() => showScoreDetails("Language", lTestResults?.overallRank, "firstGoalRank")}>{lTestResults?.overallRank}</td>
                                        <td onClick={() => showScoreDetails("Language", lTestResults?.firstGoalRank, "firstGoalRank")}>{lTestResults?.firstGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Language", lTestResults?.secondGoalRank, "secondGoalRank")}>{lTestResults?.secondGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Language", lTestResults?.thirdGoalRank, "thirdGoalRank")}>{lTestResults?.thirdGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Language", lTestResults?.fourthGoalRank, "fourthGoalRank")}>{lTestResults?.fourthGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Language", lTestResults?.fifthGoalRank, "fifthGoalRank")}>{lTestResults?.fifthGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Language", lTestResults?.sixthGoalRank, "sixthGoalRank")}>{lTestResults?.sixthGoalRank}</td>
                                        <td onClick={() => showScoreDetails("Language", lTestResults?.seventhGoalRank, "seventhGoalRank")}>{lTestResults?.seventhGoalRank}</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
            <ModalView open={instructionsOpen} setOpen={setInstructionsOpen} title="INSTRUCTIONS">
                <Instructions />
            </ModalView>
        </>
    )
}
