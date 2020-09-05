import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const MyProjects = {
    ThatFoodTruck: {
        title: "That Food Truck",
        disciption: "That Food Truck is a project I worked on with three other students from Bethel Tech. \
        This is a simple food truck website we spent six weeks on. this is a React project that uses react-router-dom\
        Bootstrp and ",
        framworks: [
            {
                title: "Frontend",
                first: "React",
                second: "react-router-dom",

            }
        ]
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

                <div className='container border pt-3 text-center '>
                    <div className=""> Programing Languages and Frameworks used  </div>
                    <div className='row mb-3 justify-content-center'>
                        <div className="col-12 col-md-6 mt-3">
                            <div className="card" >
                                <div className="card-header">
                                    {MyProjects[project].framworks[0].title}
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item list-group-item-action"> {MyProjects[project].framworks[0].first}</li>
                                    <li className="list-group-item list-group-item-action"> {MyProjects[project].framworks[0].second}</li>
                                    <li className="list-group-item list-group-item-action">Beautiful Soup</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <div className="card" >
                                <div className="card-header">
                                    Backend JavaScript
                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item list-group-item-action">Express</li>
                                    <li className="list-group-item list-group-item-action">Node</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mt-3">
                            <div className="card " >
                                <div className="card-header">
                                    Frontend JavaScript
                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item list-group-item-action">React</li>
                                    <li className="list-group-item list-group-item-action">Angular</li>
                                    <li className="list-group-item list-group-item-action">Ionic</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <div className="card " >
                                <div className="card-header">
                                    DataBase
                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item list-group-item-action">Sql</li>
                                    <li className="list-group-item list-group-item-action">NoSql</li>
                                    <li className="list-group-item list-group-item-action">MangoDB</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <div className="card " >
                                <div className="card-header">
                                    Other
                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item list-group-item-action">Html</li>
                                    <li className="list-group-item list-group-item-action">Css</li>
                                    <li className="list-group-item list-group-item-action">Sass</li>
                                    <li className="list-group-item list-group-item-action">Bootstrap</li>
                                    <li className="list-group-item list-group-item-action">Amazon Web Services</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div >
        </div>

    )
}


export default Projects;