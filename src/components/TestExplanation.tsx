// import { IResultExplanation } from "../interfaces/ITestResult";

// interface ITestExplanation {
//     explanation: IResultExplanation
// }
export default function TestExplanation(
    // props: ITestExplanation
) {
    // first score
    // switch(explanation.firstGoalScore) {
    //     case ScoreEnum.HI:
    //         explanation.firstGoalExplan = `Student should use enrichment materials to stimulate
    //                     additional growth in his or her numeration skills.`
    //                     break
    //                 case ScoreEnum.AV:
    // }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="fw-bold">Goal 1: Numeration and Number Systems</p>
                    <p>The student knows number series and other number
                        systems, place value, expanded notation, and properties of
                        number systems.</p>
                    <p className="fw-bold">Goal 2: Fractions</p>
                    <p> The student knows the parts of whole, relative values,
                        equivalent fractions, estimation of results, ratio, and
                        proportion.</p>
                    <p className="fw-bold">Goal 3: Decimals, Percent, and Currency</p>
                    <p>The student knows relative values, estimating results,
                        rounding, equivalence, and value of money.</p>
                    <p className="fw-bold">Goal 4: Geometry and Measurement</p>
                    <p>The student knows measures of time, quantity,
                        temperature, length, weight, and types and parts of plane
                        and solid geometric figures</p>
                    <p className="fw-bold">Goal 5: Graphs, Charts, and Statistics</p>
                    <p>The student can interpret and use graphs, statistics, and
                        probability.</p>
                    <p className="fw-bold">Goal 6: Word Problems and Problem Solving</p>
                    <p>The student can solve story problems and use
                        strategies and processes of problem solving.</p>
                    <p className="fw-bold">Goal 7: Computation (+,., x, I)</p>
                    <p>The student can compute with accuracy</p>
                </div>
                <div className="col">
                    {/* <p className="fw-bold">Performance on This Goal Is {props.explanation.firstGoalScore}</p>
                    <p>Student should use enrichment materials to stimulate
                        additional growth in his or her numeration skills.</p>
                    <p className="fw-bold">Performance on This Goal Is {props.explanation.secondGoalScore}</p>
                    <p>Review the fundamental concepts of fractions well. Provide
                        activities to exercise these skills; for example, baking.</p>
                    <p className="fw-bold">Performance on This Goal Is {props.explanation.thirdGoalScore}</p>
                    <p>Enhance curriculum by following an advanced structure
                        which allows room for growth in decimals, currency, and
                        percent.</p>
                    <p className="fw-bold">Performance on This Goal Is {props.explanation.fourthGoalScore}</p>
                    <p>The student should continue reviewing the geometric facts.
                        Use materials that provide concrete experiences of
                        instruction.</p>
                    <p className="fw-bold">Performance on This Goal Is {props.explanation.fifthGoalScore}</p>
                    <p>Have student follow an enriched curriculum. Expand the use
                        of statistics, graphing, and probability to other subjects.</p>
                    <p className="fw-bold">Performance on This Goal Is {props.explanation.sixthGoalScore}</p>
                    <p>Continue to review word problems and problem-solving skills
                        with the student. Provide activities which promote group
                        feedback.</p>
                    <p className="fw-bold">Performance on This Goal Is {props.explanation.seventhGoalScore}</p>
                    <p>Provide student with review of computation skills. Use
                        manipulative materials</p> */}
                </div>
            </div>
        </div>
    )
}