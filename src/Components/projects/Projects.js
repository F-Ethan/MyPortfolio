import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const MyProjects = {
    ThatFoodTruck: {
        title: "That Food Truck",
        disciption: "That Food Truck is a project I worked on with three other students from Bethel Tech. \
        This is a simple food truck website we spent six weeks on. this is a React project that uses react-router-dom\
        Bootstrp and "
    },
    WebTracker: {
        title: "Web Tracker",
        disciption: "this is my discription!!!!"
    },
    MyPortfolio: {
        title: "My Portfolio",
        disciption: "this is my discription!!!!"
    }
}



const Projects = () => {

    let { project } = useParams();
    return (
        <div className='About container shadow-lg p-3 mb-5 mt-3 rounded col-12 col-md-10'>
            <div className='card text-center m-3 shadow p-3 mb-5 rounded '>
                <div className="card-header h4 mb-2">{MyProjects[project].title}</div>
                <div className="h5 line-height">
                    About this Project: <br />
                    {MyProjects[project].disciption}
                </div>
            </div>
        </div >

    )
}


export default Projects;