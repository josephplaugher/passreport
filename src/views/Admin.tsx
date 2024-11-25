import { useEffect, useRef, useState } from "react";
import { AxiosClient, AxiosClientPostFile } from "../data/Ajax";
import { ITestResult } from "../interfaces/ITestResult";
import TestResult from "../components/TestResult";
import Upload from "./Upload";
import { useNavigate } from "react-router";
import Header from "../components/Header";

enum CurrentViewEnum {
    Home = "home",
    Upload = "upload",
    ViewTest = "viewtest"
}
export default function Admin() {
    const [testResults, setTestResults] = useState<ITestResult[]>([]);
    const [currerntView, setCurrentView] = useState<CurrentViewEnum>(CurrentViewEnum.Home);

    function getResults() {
        AxiosClient.get("TestResult")
            .then((r: any) => {
                console.log("then...", r)
                setTestResults(r.data);
            }).catch((error: any) => {
                console.log("error", error)
            })
    }

    useEffect(() => {
        getResults();
    }, [])

    const testResultDisplay = testResults.length > 0 && testResults.map((result) =>
        <tr key={result.id}>
            <td>{result.customerId}</td>
            <td>{result.testId}</td>
            <td>{result.subject}</td>
            <td>{result.studentId}</td>
            <td>{result.testLevel}</td>
            <td>{result.rawScore}</td>
            <td>{result.percentCorrect}</td>
            <td>{result.ritScore}</td>
            <td>{result.hewittPercentile}</td>
            <td>{result.nationalPercentile}</td>
            <td>{result.overallRank}</td>
            <td>{result.firstGoalRank}</td>
            <td>{result.secondGoalRank}</td>
            <td>{result.thirdGoalRank}</td>
            <td>{result.fourthGoalRank}</td>
            <td>{result.fifthGoalRank}</td>
            <td>{result.sixthGoalRank}</td>
            <td>{result.seventhGoalRank}</td>
            <td>{result.response}</td>
        </tr>
    )
    return (
        <div className="grid-container">
            <Header />
            <div className="column column-1 d-flex flex-column bg-secondary pt-5 w-auto">
                <p className="h2 text-white">MENU</p>
                <button className="btn btn-primary m-3" onClick={() => setCurrentView(CurrentViewEnum.Upload)}>Upload Test Results</button>
                <button className="btn btn-primary m-3" onClick={() => setCurrentView(CurrentViewEnum.ViewTest)}>View Test Results</button>
            </div>
            <div className="column column-2 w-auto">
                {currerntView == CurrentViewEnum.Upload &&
                    <div className="d-flex flex-column align-item-center justify-content-between align-items-center m-4">
                        <Upload refresh={getResults} />
                    </div>
                }
                {currerntView == CurrentViewEnum.ViewTest &&
                    <div className="overflow-scroll vh-75">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className="m-4">Customer Id</th>
                                    <th scope="col" className="m-4">Test Id</th>
                                    <th scope="col" className="m-4">Subject</th>
                                    <th scope="col" className="m-4">Student Id</th>
                                    <th scope="col" className="m-4">Test Level</th>
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
                                    <th scope="col" className="m-4">Response</th>
                                </tr>
                            </thead>
                            <tbody>
                                {testResultDisplay && testResultDisplay}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    )
}