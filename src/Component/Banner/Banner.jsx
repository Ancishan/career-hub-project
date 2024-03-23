import Man from '../../assets/images/user.png'


const Banner = () => {
    return (
        <div className="flex justify-between mt-8 mb-16 max-w-6xl mx-auto ">
            <div className='mt-16 '>
                <h2 className='text-5xl font-extrabold pb-3'>One Step <br /> Closer To Your <br /> <span className='text-violet-400'>Dream Job</span></h2>
                <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
                <button className='border solid px-5 py-4 bg-slate-400 rounded-md text-xl font-bold text-white mt-3'> Get Started</button>
            </div>
            <div >
                <img src={Man} alt="" className='w-[516px] h-[444px] '  />
            </div>
            
        </div>
    );
};

export default Banner;