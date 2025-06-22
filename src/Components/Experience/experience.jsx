import './experience.css';
import {  Link } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export default function Experience(){

    const projects = [
        {id : 1, name : "" , desc : [] , skills :[] , companyName : "AAPGS Private Limited" }
    ]

    return <div className="experience-comp-container">
        <Link to='/'><MdOutlineKeyboardBackspace style={{marginRight : '10px'}} /> Vicky </Link>
        <h1> Experience </h1>


<div className='project-details' >
        <div className='d-flex flex-row align-items-center' >
        <p>Project name</p>
        <p>Year</p>
        </div>

        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint sunt, cum accusamus tempore, debitis quibusdam mollitia quasi velit neque maiores error iure est in incidunt nihil? Odit, voluptatem dolores!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint sunt, cum accusamus tempore, debitis quibusdam mollitia quasi velit neque maiores error iure est in incidunt nihil? Odit, voluptatem dolores!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint sunt, cum accusamus tempore, debitis quibusdam mollitia quasi velit neque maiores error iure est in incidunt nihil? Odit, voluptatem dolores!</li>
        </ul>
        </div>

    </div>
}