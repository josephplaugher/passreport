import {  SubjectEnum } from "../enums/Enums";

export interface ITestResult {
    id: string;
    customerId: number;
    testId: number;
    studentId: number;
    subject: SubjectEnum;
    testLevel: number;
    overallRank: number;
    rawScore: number;
    percentCorrect: number;
    ritScore: number;
    hewittPercentile: number;
    nationalPercentile: number;
    firstGoalRank: string;
    secondGoalRank: string;
    thirdGoalRank: string;
    fourthGoalRank: string;
    fifthGoalRank: string;
    sixthGoalRank: string;
    seventhGoalRank: string;
    response: string;
}

export interface IResultExplanation {
    testId: number;
    subject: SubjectEnum;
    testLevel: number;
    scores: any,
}
