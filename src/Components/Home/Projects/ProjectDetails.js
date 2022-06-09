import React from 'react';

const ProjectDetails = ({ project }) => {
    return (
        <div className="col-md-4 mt-5">
            <div class="card" style={{ width: '400px', height: '400px' }}>
                <img style={{ height: '150px', width: '400px' }} class="card-img-top img-fluid" src={project.image} alt="" />
                <div class="card-body CardBody">
                    <h6 className="text-center border-bottom p-2">{project.title}</h6>
                    {/* <p>{project.description}</p> */}
                    <div className="d-flex justify-content-center">
                        <div className="float-left fixed-middle">
                            <a target="_blank" href={project.live}><button className=" btn btn-primary" style={{ marginRight: '10px' }}>Live Link</button></a>
                        </div>
                        <div className="float-right">
                            <a target="_blank" href={project.code}><button className="btn btn-primary">Code Link</button></a>
                        </div>

                    </div>
                    <div className='text-center mt-3 ' ><button className='btn btn-info px-5'>Details</button></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;