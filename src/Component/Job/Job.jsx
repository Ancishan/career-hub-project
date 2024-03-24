import { Link } from 'react-router-dom';
import Location from './../../assets/icons/Location.png'
import Money from './../../assets/icons/money.png'

const Job = ({ job }) => {
    const { id, logo,salary,location,job_title,company_name,remote_or_onsite,job_type } = job;
    return (
        <div>
            <div className="card max-w-6xl mx-auto bg-base-100 shadow-xl mt-6">
                  <div className="pl-9 pt-4">  <img src={logo} alt="" className="rounded-lg w-16 h-10" /></div>
                <div className="card-body ">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex gap-4">
                    <button className="btn btn-sm border-violet-400">{job_type}</button>
                    <button className="btn btn-sm  border-violet-400">{remote_or_onsite}</button>
                  </div>
                  <div className="flex gap-4 pb-2 pt-1">
                    <div className='flex gap-2'>
                    <img src={Location} alt="" />
                        <p>{location}</p>
                    </div>
                    <div className='flex gap-2'>
                    <img src={Money} alt="" />
                    <p>{salary}</p>
                    </div>
                  </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;