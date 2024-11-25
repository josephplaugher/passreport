import { ScoreEnum, SubjectEnum } from "../enums/Enums";

export interface ITestScore {
    testId: number;
    subject: SubjectEnum;
    testLevel: number;
    rawScore: number;
    percentCorrect: number;
    ritScore: number;
    hewittPercentile: number;
    natlPercentile: number;
    firstGoalRank: string;
    secondGoalRank: string;
    thirdGoalRank: string;
    fourthGoalRank: string;
    fifthGoalRank: string;
    sixthGoalRank: string;
    seventhGoalRank: string;
}

export interface ITestResult {
    customerId: number;
    studentId: number;
    mathTest: ITestScore;
    readingTest: ITestScore;
    writingTest: ITestScore;
}

export interface IResultExplanation {
    testId: number;
    subject: SubjectEnum;
    testLevel: number;
    scores: ITestScore
}
