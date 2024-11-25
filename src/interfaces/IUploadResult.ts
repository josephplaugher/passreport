import { ITestResult } from "./ITestResult";

export interface IDataUploadResponse {
    totalRowsProcessed: number;
    successfulRows: number;
    failedRows: number;
    errors: string[];
    data: ITestResult[];
 }