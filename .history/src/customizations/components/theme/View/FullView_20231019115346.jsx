import React from "react";
import Sidebar from "./sidebar";
import '../assets/styles/style.css'
import { connect } from 'react-redux';
import Rating from "./rating";

const MainContent = (state) => {
    return (
        <div className="main-content flex flex-col lg:flex-row gap-6">
            <Sidebar />
            <div className="courses w-full lg:w-9/12">
                <p className="text-2xl text-zinc-500 font-semibold mb-6">e-Learning Courses</p>
                <div className="courses-wrapper">
                    {/* Fetching course content from redux */}
                    {state.courses.map((element, key) => {
                        return (
                            <div className="course-card bg-white pt-7 px-4 lg:pl-0 lg:pr-6 flex flex-col lg:flex-row items-start mb-5" key={key}>
                                <div className="logo mx-auto w-24 h-16 lg:h-12">
                                    <img src={element.icon} className="w-full h-full object-contain" alt="" />
                                </div>
                                <div className="courses-info w-full lg:w-10/12">
                                    {element.catCourses.map((course, id) => {
                                        return (
                                            <div className="course-detail flex gap-6 mb-7" key={id}>
                                                <p className="course-name w-9/12 text-lg leading-6 text-zinc-500 font-bold ">
                                                    {course.name}
                                                </p>
                                                <div className="w-1/4">
                                                    <div className="duration flex flex-col lg:flex-row justify-between">
                                                        <p className="duration-text text-zinc-500">{course.duration}min</p>
                                                        {/* ADD RATING MODUL HERE */}
                                                        <Rating progress={course.progress} />
                                                    </div>
                                                    <div className="duration-text text-zinc-500">
                                                        To be done by: {course.end}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(MainContent)