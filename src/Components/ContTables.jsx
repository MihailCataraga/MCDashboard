import React from 'react'
import { Line } from 'rc-progress';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ContTables = () => {
    const authors = [
        {
            img: '/img/avatar4.png',
            name: 'Esthera Jackson',
            email: 'esthera@simmmple.com',
            function: 'Manager',
            lvl: 'Organization',
            status: 'Online',
            employed: '23/04/18'
        },
        {
            img: '/img/avatar2.png',
            name: 'Alexa Liras',
            email: 'alexa@simmmple.com',
            function: 'Programator',
            lvl: 'Developer',
            status: 'Offline',
            employed: '11/01/19'
        },
        {
            img: '/img/avatar3.png',
            name: 'Laurent Michael',
            email: 'laurent@simmmple.com',
            function: 'Executive',
            lvl: 'Projects',
            status: 'Online',
            employed: '19/09/17'
        },
        {
            img: '/img/avatar1.png',
            name: 'Freduardo Hill',
            email: 'freduardo@simmmple.com',
            function: 'Programator',
            lvl: 'Developer',
            status: 'Online',
            employed: '24/12/08'
        },
        {
            img: '/img/avatar5.png',
            name: 'Daniel Thomas',
            email: 'daniel@simmmple.com',
            function: 'Manager',
            lvl: 'Executive',
            status: 'Offline',
            employed: '04/10/21'
        },
        {
            img: '/img/avatar6.png',
            name: 'Mark Wilson',
            email: 'mark@simmmple.com',
            function: 'Programtor',
            lvl: 'Developer',
            status: 'Offline',
            employed: '14/09/20'
        },
    ]
    const projects = [
        {
            img: '/img/small-logos/logo-xd.svg',
            title: 'Chakra Vision UI Version',
            budget: '$14,000',
            status: 'Working',
            percent: 60,
        },
        {
            img: '/img/small-logos/logo-atlassian.svg',
            title: 'Add Progress Track',
            budget: '$3,000',
            status: 'Done',
            percent: 100,
        },
        {
            img: '/img/small-logos/logo-slack.svg',
            title: 'Fix Platform Errors',
            budget: 'Not set',
            status: 'Canceled',
            percent: 30,
        },
        {
            img: '/img/small-logos/logo-spotify.svg',
            title: 'Launch our Mobile App',
            budget: '$32,000',
            status: 'Canceled',
            percent: 0,
        },
        {
            img: '/img/small-logos/logo-jira.svg',
            title: 'Add the New Pricing Page',
            budget: '$2,300',
            status: 'Done',
            percent: 100,
        },
    ]
  return (
    <div className='tables'>
        <div className='authors'>
            <h1>Authors table</h1>
            <div className='titlesList'>
                <p>AUTHOR</p>
                <p>FUNCTION</p>
                <p>STATUS</p>
                <p>EMPLOYED</p>
                <p>ACTION</p>
            </div>
            <div className='authorsList'>
                {authors.map((author, index) => (
                    <div className='author'>
                        <div className='info' key={index}>
                            <img src={author.img} alt='' />
                            <div className='right'>
                                <h4>{author.name}</h4>
                                <p>{author.email}</p>
                            </div>
                        </div>
                        <div className='function'>
                            <p>{author.function}</p>
                            <p className='lvl'>{author.lvl}</p>
                        </div>
                        <div className='status'>
                            <p className={author.status === "Online" ? 'online' : 'offline'}>{author.status}</p>
                        </div>
                        <div className='employed'>
                            <p>{author.employed}</p>
                        </div>
                        <div className='action'>
                            <p>Edit</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        <div className='projects'>
            <h1>Projects table</h1>
            <div className='titlesList'>
                <p>PROJECT</p>
                <p>BUDGET</p>
                <p>STATUS</p>
                <p>COMPLETION</p>
                <p>ACTION</p>
            </div>
            <div className='projectsList'>
                {projects.map((project, index) => (
                    <div className='project' key={index}>
                        <div className='title'>
                            <img src={project.img} alt='' />
                            <h4>{project.title}</h4>
                        </div>
                        <h4 className='budget'>{project.budget}</h4>
                        <h4 className='status'>{project.status}</h4>
                        <div className='completion'>
                            <h4>{project.percent}%</h4>
                            <Line 
                                width={130} 
                                percent={project.percent} 
                                strokeWidth={5} 
                                strokeColor="#005ecc" 
                                trailWidth={3} 
                                trailColor="#0c112a" 
                            />
                        </div>
                        <MoreVertIcon className='icon' />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ContTables