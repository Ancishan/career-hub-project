import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Featured = () => {

    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data

    const [dataLength, setDataLength] = useState([4]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));

    }, [])
    return (
        <div>
            <div>
                <h2 className="text-5xl text-center font-bold mt-8 pb-4">Featured Jobs {jobs.length}</h2>
                <p className="text-center text-lg">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 ">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="card-actions justify-center mt-8 ">
                <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary ">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;