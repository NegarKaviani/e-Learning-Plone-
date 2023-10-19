import React from "react";

export default function Breadcrumbs () {
    return(
        <div className="breadcrumbs-wrapper bg-white h-7 flex mt-8 mb-6">
            <div className="breadcrumbs flex items-center pl-4 w-10/12">
                <p className="text-xs mr-3 text-gray-700">Home Page</p>
                <p className="text-xs mr-3 text-gray-300"> {'>'} </p>
                <p className="text-xs text-gray-700">e-Lerning Courses</p>
            </div>
            <div className="user bg-neutral-500 w-2/12 flex pl-3 text-xs text-white items-center"> admin </div>
        </div>
    )
}