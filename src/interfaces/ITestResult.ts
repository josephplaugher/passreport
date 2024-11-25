import { ScoreEnum, SubjectEnum } from "../enums/Enums";

interface ITestResultProperty {
    nameof?: string;
    value: number | SubjectEnum | ScoreEnum;
}

export interface ITestResult {
    id:string;
    customerId: number;
    studentId: number;
    testId: number;
    subject: SubjectEnum;
    testLevel: number;
    rawScore: number;
    percentCorrect: number;
    ritScore: number;
    hewittPercentile: number;
    nationalPercentile: number;
    overallRank: ScoreEnum;
    firstGoalRank: ScoreEnum;
    secondGoalRank: ScoreEnum;
    thirdGoalRank: ScoreEnum;
    fourthGoalRank: ScoreEnum;
    fifthGoalRank: ScoreEnum;
    sixthGoalRank: ScoreEnum;
    seventhGoalRank: ScoreEnum;
    response: string;
    held: undefined | string;
}

export interface IResultExplanation {
    firstGoalScore: ScoreEnum;
    secondGoalScore: ScoreEnum;
    thirdGoalScore: ScoreEnum;
    fourthGoalScore: ScoreEnum;
    fifthGoalScore: ScoreEnum;
    sixthGoalScore: ScoreEnum;
    seventhGoalScore: ScoreEnum;
    firstGoalExplan?: string;
    secondGoalExplan?: string;
    thirdGoalExplan?: string;
    fourthGoalExplan?: string;
    fifthGoalExplan?: string;
    sixthGoalExplan?: string;
    seventhGoalExplan?: string;
}
