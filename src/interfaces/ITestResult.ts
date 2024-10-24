import { ScoreEnum, SubjectEnum } from "../enums/Enums";

interface ITestResultProperty {
    nameof?: string;
    value: number | SubjectEnum | ScoreEnum;
}

export interface ITestResult {
    // customerId: number;
    // studentId: number;
    // testId: number;
    // subject: string;
    // testLevel: number;
    // rawScore: number;
    // percentCorrect: number;
    // ritScore: number;
    // hewittPercentile: number;
    // natlPercentile: number;
    // firstGoalRank: number;
    // secondGoalRank: number;
    // thirdGoalRank: number;
    // fourthGoalRank: number;
    // fifthGoalRank: number;
    // sixthGoalRank: number;
    // seventhGoalRank: number;
    customerId: ITestResultProperty
    studentId: ITestResultProperty
    testId: ITestResultProperty
    subject: ITestResultProperty
    testLevel: ITestResultProperty
    rawScore: ITestResultProperty
    percentCorrect: ITestResultProperty
    ritScore: ITestResultProperty
    hewittPercentile: ITestResultProperty
    natlPercentile: ITestResultProperty
    firstGoalRank: ITestResultProperty
    secondGoalRank: ITestResultProperty
    thirdGoalRank: ITestResultProperty
    fourthGoalRank: ITestResultProperty
    fifthGoalRank: ITestResultProperty
    sixthGoalRank: ITestResultProperty
    seventhGoalRank: ITestResultProperty
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
