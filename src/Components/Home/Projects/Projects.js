import React from 'react';
import pic1 from '../../../images/manufacture.PNG'
import ProjectDetails from './ProjectDetails';
import Dynasty from '../../../images/dynasty.PNG'
import pic3 from '../../../images/pcare.PNG'
import './Projects.css'

const Projects = () => {
    const styles = {
        backgroundImage: 'linear-gradient(-15deg,rgba(255,122,24,.25),#fff)',
        backgroundSize: 'cover'
    }
    const projectsData = [
        {
            id: 1,
            title: 'Fantacy Computer Parts',
            image: pic1,
            description: "Built a full-stack service-related web app User can select a service, used stripe for payment used Google authentication and private route services and reviews are dynamic.updated from the database by admin and customer",
            live: 'https://final-website-b7c99.web.app/',
            code: 'https://github.com/Eshshatabdi/fantacy-computer-parts-client-side'
        },
        {
            id: 2,
            title: 'Feuits Dynasty',
            image: Dynasty,
            description: "Built a full-stack website where customer order their product and Users can Create an Account, Stock Update, Add Products, Delete Products, and Manage Products.",
            live: 'https://warehouse-management-739be.web.app/',
            code: 'https://github.com/Eshshatabdi/fruits-dinesty-client-side'
        },
        {
            id: 3,
            title: 'Physical Care',
            image: pic3,
            description: "Physical Care is for a Single Doctor Website and It Provides Various Primary Services.",
            live: 'https://authentication-assignmen-7c87c.web.app/',
            code: ''
        },
        // {
        //     id: 1,
        //     title: '',
        //     image: ,
        //     description: "Built a full-stack service-related web app User can select a service, used stripe for payment used Google authentication and private route services and reviews are dynamic.updated from the database by admin and customer",
        //     live: '',
        //     code: ''
        // },
        // {
        //     id: 1,
        //     title: '',
        //     image: ,
        //     description: "Built a full-stack service-related web app User can select a service, used stripe for payment used Google authentication and private route services and reviews are dynamic.updated from the database by admin and customer",
        //     live: '',
        //     code: ''
        // },

    ]
    return (
        <div className='m-5 bg-light CardBody'>
            <h3 style={{ fontWeight: '300', fontFamily: 'cursive' }} className="text-center m-5 pt-5">My Projects</h3>
            <div className="row mt-5" >
                {
                    projectsData.map(project => <ProjectDetails project={project}></ProjectDetails>)
                }
            </div>

        </div>
    );
};

export default Projects;