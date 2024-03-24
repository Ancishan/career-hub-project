import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const hanldeApplyJob = () =>{
        saveJobApplication(idInt);
        toast('your have applied successfully');
    }
   
    return (
        <div>
            <h2>Job Details</h2>          
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2><span className="text-xl font-bold">Job Description:</span>{job.job_description} </h2>
                    <h2><span className="text-xl font-bold">Job Responsibility:</span>{job.job_responsibility}</h2>
                    <h2><span className="text-xl font-bold" >Educational Requirements:</span>{job.educational_requirements}</h2>
                    <h2 className="text-xl font-bold">Experiences:</h2>
                    <h2>{job.experiences}</h2>


                </div>
                <div className="border">
                    <h2>Job Details: {job.job_title}</h2>
                    <h2 className="text-2xl">side thing</h2>
                    <button onClick={hanldeApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;