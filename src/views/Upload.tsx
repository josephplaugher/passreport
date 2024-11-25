import { useRef, useState } from "react";
import { AxiosClientPostFile } from "../data/Ajax";
import { IDataUploadResponse } from "../interfaces/IUploadResult";

interface IProps {
    refresh: ()=> void;
}
export default function Upload(props: IProps) {
    const formRef = useRef<HTMLFormElement>(null)
    const [uploadResult, setUploadResult] = useState<IDataUploadResponse | null>();
    const [error, setError] = useState("");
    function validate() {
        if (formRef.current && formRef.current.checkValidity()) {
            return true;
        } else {
            return false;
        }
    }

    async function submit(event: any) {
        event.preventDefault()
        if (!formRef?.current) return;
        validate();
        const formData = new FormData(formRef.current);
        const formValues = Object.fromEntries(formData.entries());

        console.log("Form Data:", formValues);

        AxiosClientPostFile.post<any>("TestResult", formValues)
        .then((result: any)=> {
            setUploadResult(result.data);
            props.refresh();
        })
        .catch((error: any)=> {
            console.error(error);
            setError(error.join(" "))
        });
    }

    return (
        <div className="bg-secondary p-5 rounded">
            <div className="p-5">
                <h1 className="text-white"><em>Upload PASS file</em></h1>
            </div>
            <div className="p-5">
                <form id="form" onSubmit={(e) => submit(e)} ref={formRef}>
                    <div className="form-group mb-5">
                        <label htmlFor="file" className="text-white">File</label>
                        <input name="file" type="file" accept=".xlsx" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                        {uploadResult && 
                            <div className="text-white p-3">
                                <div>Total Rows Processed: {uploadResult.totalRowsProcessed}</div>
                                <div>Successful Rows: {uploadResult.successfulRows}</div>
                                <div>Failed Rows: <span className="text-danger">{uploadResult.failedRows}</span></div>
                                {error && 
                                    <div className="text-danger">{error}</div>    
                                }
                            </div>
                        }

                </form>
            </div>
        </div>
    )
}