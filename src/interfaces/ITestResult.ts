import { ScoreEnum, SubjectEnum } from "../enums/Enums";

export interface ITestResult {
    customerId: number;
    studentId: number;
    testId: number;
    subject: SubjectEnum;
    testLevel: number;
    rawScore: number;
    percentCorrect: number;
    ritScore: number;
    hewittPercentile: number;
    natlPercentile: number;
    firstGoalRank: ScoreEnum;
    secondGoalRank: ScoreEnum;
    thirdGoalRank: ScoreEnum;
    fourthGoalRank: ScoreEnum;
    fifthGoalRank: ScoreEnum;
    sixthGoalRank: ScoreEnum;
    seventhGoalRank: ScoreEnum;
    responses: string;
}

export interface IResultExplanation {
    firstGoalScore: ScoreEnum;
    secondGoalScore: ScoreEnum;
    thirdGoalScore: ScoreEnum;
    fourthGoalScore: ScoreEnum;
    fifthGoalScore: ScoreEnum;
    sixthGoalScore: ScoreEnum;
    seventhGoalScore: ScoreEnum;
    firstGoalExplan: string | null;
    secondGoalExplan: string | null;
    thirdGoalExplan: string | null;
    fourthGoalExplan: string | null;
    fifthGoalExplan: string | null;
    sixthGoalExplan: string | null;
    seventhGoalExplan: string | null;
}