import React from 'react'

const Mainportfolio = (props) => {
    return (
        <>

            {/* <!-------------- home part  -------------> */}
            <div id="home"
                className="home min-h-[100vh] w-[100%]  flex flex-wrap-reverse justify-center">

                <div className="w-[100%] sm:w-[65%] md:w-[60%] lg:w-[50%] lg:mt-24  flex flex-col sm:justify-center  h-[90vh] mt-4">
                    <div className="mx-2">

                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:my-4 my-2">
                            Hi, I'm <span className="text-blue-500">Milan Mishra</span>
                        </h1>
                        <div className="text-animation">
                            <h2 className="font-bold md:text-3xl sm:text-2xl text-xl mb-2">
                                Frontend Developer
                            </h2>
                        </div>

                        <p>{props.portfolioDescription}</p>
                    </div>
                    <div className="my-4 mx-2">
                        <a href="/contact"><button type="button" className="btn mr-4 bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg p-2">Hire Me</button></a>
                        <button type="button" className="btn bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg p-2">Lets Talk</button>
                    </div>

                    <div className="social md:mt-18 sm:mt-12 mt-8 mx-2">
                        <a href="#" className="mr-6 border-2 border-sky-400 "><i className="fa-brands fa-facebook fa-2x p-2"></i></a>
                        <a href="#" className="mr-6 border-2 border-sky-400 "><i className="fa-brands fa-twitter fa-2x p-2"></i></a>
                        <a href="#" className="mr-6 border-2 border-sky-400 "><i className="fa-brands fa-instagram fa-2x p-2"></i></a>
                        <a href="#" className="my-4 border-2 border-sky-400 "><i className="fa-brands fa-linkedin fa-2x p-2"></i></a>

                    </div>
                </div>

                <div className="w-[100%] sm:w-[35%] md:w-[40%] bg-yellow-80 flex justify-center  ">
                    <img src={props.portfolioImage} alt="" className="w-[50%] md:h-[60%] lg:h-[65%] sm:h-[50%] sm:w-[100%] sm:mr-4 md:mr-0 mt-8 bg-cover object-center" />
                </div>


            </div>

            {/* <!-- about section --> */}
            <div id="about" className="lg:mt-24 md:mt-18 sm:mt-14 ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-center md:text-3xl text-2xl font-bold my-10">About <span className="text-blue-400">Me</span></h1>

                    <div className="md:h-[25rem] md:w-[25rem] h-[20rem] w-[20rem] flex relative justify-center items-center">
                        <img src={props.aboutMeImage} alt="" className="" />
                        <span className="circle-spin"></span>
                    </div>
                    <div className="my-6 mx-2">
                        <h1 className="font-bold text-xl md:text-3xl my-1 text-center">Frontend Developer</h1>
                        <p>{props.aboutMeDescription}</p>

                    </div>

                </div>
            </div>

            {/* <!-- education section --> */}
            <div id="education" className="lg:mt-24 md:mt-18 sm:mt-14 mt-10">
                <h1 className="text-center md:text-3xl text-2xl font-bold my-10">My <span className="text-blue-400">Journey</span> </h1>
                <div className=" mx-2">
                    <h1 className="font-bold md:text-xl text-lg my-2">Education</h1>
                    <div className=" mt-4 mb-6">
                        <div className="content mb-6 border-2 border-sky-400 p-2 rounded-lg">
                            <p> <span className="font-semibold text-lg"> School</span> - {props.schoolName}</p>
                            <i className="fa-regular fa-calendar"></i> <span className="ml-2 text-blue-400">{props.joindate}-{props.enddate}</span>
                            <p className="my-1 md:my-2">{props.educationDescription}</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* skill section */}
            <div className="text-center lg:mt-24 md:mt-18 sm:mt-14 mt-10">
                <h1 className="text-center md:text-3xl text-2xl font-bold my-10">My <span className="text-blue-400"> Skills</span></h1>
                {/* <!-- animation --> */}
                {/* <div className="flex justify-center ">
                            <div id="animContainer" className=" md:w-[40%] w-[50%] my-4">acdvdj</div>
                        </div> */}

                <div className="flex flex-wrap justify-between gap-4  mx-2">
                    <div className="border-2 border-sky-400 md:w-[48%] w-[100%] p-4 rounded-lg">
                        <h1 className="font-bold text-xl">Coding Skills</h1>
                        <div className="my-2">
                            <div className="flex justify-between">
                                <p>{props.codingHeading}</p>

                            </div>
                            <div className=" my-1"><span className="w-[90%]"> <p>{props.codingExperienceDescription}</p></span></div>

                        </div>

                    </div>
                    <div className="border-2 border-sky-400 md:w-[48%]  w-[100%] p-4 rounded-lg">
                        <h1 className="font-bold text-xl">Professional Skills</h1>
                        <div className="my-2">
                            <div className="flex justify-between">
                                <p>{props.professionalHeading}</p>

                            </div>
                            <div className=" my-1"><span className="w-[90%]"> <p>{props.professionalExperienceDescription}</p></span></div>
                        </div>

                    </div>
                </div>
            </div>

            {/* project section */}
            
            <div className="project lg:mt-24 md:mt-18 sm:mt-14 mt-10 mx-2">
                <h1 className="text-center md:text-3xl text-2xl font-bold my-10">My <span className="text-blue-400"> Project</span></h1>
                <div className="content mb-6 border-2 border-sky-400 px-3 p-2 rounded-lg">
                    <span className="font-semibold text-xl">{props.projectHeading}</span>
                    <p className="my-2">{props.projectDescription}</p>
                </div>

            </div>

        </>
    )
}

export default Mainportfolio