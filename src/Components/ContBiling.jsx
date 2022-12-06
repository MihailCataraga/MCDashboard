import React, { useState, useEffect } from 'react'
import WidgetsIcon from '@mui/icons-material/Widgets';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import BuildIcon from '@mui/icons-material/Build';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import BoltIcon from '@mui/icons-material/Bolt';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContBiling = () => {
    const data = [
        {
            name: 'Jan',
            MobileApps: 100
        },
        {
            name: 'Feb',
            MobileApps: 250
        },
        {
            name: 'Mar',
            MobileApps: 300
        },
        {
            name: 'Apr',
            MobileApps: 220
        },
        {
            name: 'May',
            MobileApps: 500
        },
        {
            name: 'Jun',
            MobileApps: 250
        },
        {
            name: 'Jul',
            MobileApps: 300
        },
        {
            name: 'Aug',
            MobileApps: 230
        },
        {
            name: 'Sep',
            MobileApps: 300
        },
        {
            name: 'Oct',
            MobileApps: 350
        },
        {
            name: 'Nov',
            MobileApps: 250
        },
        {
            name: 'Dec',
            MobileApps: 400
        },
    ]
    const types = [
        {
            img: '/img/profile-1.png',
            number: 'Project #2',
            type: 'Modern',
            description: 'As Uber works through a huge amount of internal management turmoil.',
            users: [
                {
                    img: '/img/avatar1.png',
                    name: 'Elena Morison'
                },
                {
                    img: '/img/avatar2.png',
                    name: 'Ryan Milly'
                },
                {
                    img: '/img/avatar3.png',
                    name: 'Nick Daniel'
                },
                {
                    img: '/img/avatar4.png',
                    name: 'Peterson'
                }
            ]
        },
        {
            img: '/img/profile-2.png',
            number: 'Project #1',
            type: 'Scandinavian',
            description: 'Music is something that every person has his or her own specific opinion about.',
            users: [
                {
                    img: '/img/avatar3.png',
                    name: 'Nick Daniel'
                },
                {
                    img: '/img/avatar4.png',
                    name: 'Peterson'
                },
                {
                    img: '/img/avatar1.png',
                    name: 'Elena Morison'
                },
                {
                    img: '/img/avatar2.png',
                    name: 'Ryan Milly'
                }
            ]
        },
        {
            img: '/img/profile-3.png',
            number: 'Project #3',
            type: 'Minimalist',
            description: 'Different people have different taste, and various types of music.',
            users: [
                {
                    img: '/img/avatar4.png',
                    name: 'Peterson'
                },
                {
                    img: '/img/avatar3.png',
                    name: 'Nick Daniel'
                },
                {
                    img: '/img/avatar2.png',
                    name: 'Ryan Milly'
                },
                {
                    img: '/img/avatar1.png',
                    name: 'Elena Morison'
                }
            ]
        }
    ]
    const [percent, setPercent] = useState(0);
    // const [width, setWidth] = useState(130);
    const [check, setCheck] = useState(true)
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(true)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(true)
    const [check5, setCheck5] = useState(true)
    const [check6, setCheck6] = useState(false)
    const [chart, setChart] = useState(false)

    useEffect(() => {
        setPercent(68);
        setChart(true);
    }, []);
  return (
    <div className='biling'>
        <div className='top'>
            <div className='user'>
                <img src='/img/avatar-simmmple.png' alt='' />
                <div className='name'>
                    <h2>Mark Johnson</h2>
                    <p>mark@simmmple.com</p>
                </div>
            </div>
            <div className='options'>
                <div className='overview'>
                    <WidgetsIcon className='icon' />
                    <h4>OVERVIEW</h4>
                </div>
                <div className='teams'>
                    <InsertDriveFileIcon className='icon' />
                    <h4>TEAMS</h4>
                </div>
                <div className='projects'> 
                    <BuildIcon className='icon' />
                    <h4>PROJECTS</h4>
                </div>
            </div>
        </div>
        <div className='mid'>
            <div className='avatar'>
                <h1>Welcome back!</h1>
                <p>Nice to see you, Mark Johnson!</p>
                <div className='tap'>
                    <p>Tap to record</p>
                    <ArrowForwardIcon className='icon' />
                </div>
            </div>
            <div className='car'>
                <h2>Car Informations</h2>
                <p>Hello, Mark Johnson! Your Car is ready.</p>
                <div className='info'>
                    <div className='left'>
                        <CircularProgressbar 
                            className='progresBar'
                            minValue={0}
                            maxValue={100}
                            value={percent}
                            styles={buildStyles({
                                trailColor: '#a6bbb2',
                                pathTransitionDuration: 1.5,
                                pathColor: "#04a37a",
                            })}
                        />
                        <div className='stats'>
                            <BoltIcon className='icon' />
                            <h1>68%</h1>
                            <p>Current Load</p>
                        </div>
                        <h2>0h 58 min</h2>
                        <p>Time to full charge</p>
                    </div>
                    <div className='center'>
                        <div className='battery'>
                            <div className='infos'>
                                <p>Battery Health</p>
                                <h2>76%</h2>
                            </div>
                            <div className='symb'>
                                <ElectricCarIcon className='icon' />
                            </div>
                        </div>
                        <div className='consum'>
                            <div className='infos'>
                                <p>Consumption</p>
                                <h2>163W/km</h2>
                            </div>
                            <div className='symb'>
                                <BoltIcon className='icon' />
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='effinciency'>
                            <div className='infos'>
                                <p>Efficiency</p>
                                <h2>+20%</h2>
                            </div>
                            <div className='symb'>
                                {chart && <AreaChart
                                        className='chart'
                                        width={130}
                                        height={30}
                                        data={data}
                                        margin={{
                                        top: 10,
                                        right: 20,
                                        left: 0,
                                        bottom: 0,
                                        }}
                                    >
                                        <defs>
                                            <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#4efebe" stopOpacity={0.8}/>
                                                <stop offset="95%" stopColor="#4efebe" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid vertical={false} horizontal={false} />
                                        <XAxis dataKey="name" hide={true} />
                                        <YAxis hide={true} />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="MobileApps" strokeWidth="4px" stroke="#4efebe" fillOpacity={.8} fill="url(#colorMobile)" />
                                    </AreaChart>
                                }
                            </div>
                        </div>
                        <div className='week'>
                            <div className='infos'>
                                <p>This Week</p>
                                <h2>1.342km</h2>
                            </div>
                            <div className='symb'>
                                {chart && <AreaChart
                                        className='chart'
                                        width={130 - 20}
                                        height={30}
                                        data={data}
                                        margin={{
                                        top: 10,
                                        right: 20,
                                        left: 0,
                                        bottom: 0,
                                        }}
                                    >
                                        <defs>
                                            <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#33a0ff" stopOpacity={0.8}/>
                                                <stop offset="95%" stopColor="#33a0ff" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid vertical={false} horizontal={false} />
                                        <XAxis dataKey="name" hide={true} />
                                        <YAxis hide={true} />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="MobileApps" strokeWidth="4px" stroke="#33a0ff" fillOpacity={.8} fill="url(#colorMobile)" />
                                    </AreaChart>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='profile'>
                <h2>Profile Information</h2>
                <p className='text'>Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                <p>Full Name: <span>Mark Johnson</span></p>
                <p>Mobile: <span>(44) 123 1234 123</span></p>
                <p>Email: <span>mark@simmmple.com</span></p>
                <p>Location: <span>United States</span></p>
                <p className='icons'>
                    Social: 
                    <span>
                        <FacebookIcon className='icon' />
                        <TwitterIcon className='icon' />
                        <InstagramIcon className='icon' />
                    </span>
                </p>
            </div>
        </div>
        <div className='bottom'>
            <div className='settings'>
                <h2>Platform Settings</h2>
                <p>ACCOUNT</p>
                <div className='option'>
                    <div className={check === false ? 'check' : 'checkActive'} onClick={() => setCheck(!check)}>
                        <div className='circle'></div>
                    </div>
                    <p>Email me when someone follows me</p>
                </div>
                <div className='option'>
                    <div className={check1 === false ? 'check' : 'checkActive'} onClick={() => setCheck1(!check1)}>
                        <div className='circle'></div>
                    </div>
                    <p>Email me when someone answers on my post</p>
                </div>
                <div className='option'>
                    <div className={check2 === false ? 'check' : 'checkActive'} onClick={() => setCheck2(!check2)}>
                        <div className='circle'></div>
                    </div>
                    <p>Email me when someone mentions me</p>
                </div>
                <p>APPLICATION</p>
                <div className='option'>
                    <div className={check3 === false ? 'check' : 'checkActive'} onClick={() => setCheck3(!check3)}>
                        <div className='circle'></div>
                    </div>
                    <p>New launches and projects</p>
                </div>
                <div className='option'>
                    <div className={check4 === false ? 'check' : 'checkActive'} onClick={() => setCheck4(!check4)}>
                        <div className='circle'></div>
                    </div>
                    <p>Monthly product updates</p>
                </div>
                <div className='option'>
                    <div className={check5 === false ? 'check' : 'checkActive'} onClick={() => setCheck5(!check5)}>
                        <div className='circle'></div>
                    </div>
                    <p>Subscribe to newsletter</p>
                </div>
                <div className='option'>
                    <div className={check6 === false ? 'check' : 'checkActive'} onClick={() => setCheck6(!check6)}>
                        <div className='circle'></div>
                    </div>
                    <p>Receive mails weekly</p>
                </div>
            </div>
            <div className='projects'>
                <h2>Projects</h2>
                <p>Architects design houses</p>
                <div className='types'>
                    {types.map((type, index) => (
                        <div className='type' key={index}>
                            <img src={type.img} alt='' />
                            <p>{type.number}</p>
                            <h3>{type.type}</h3>
                            <p className='desc'>{type.description}</p>
                            <div className='more'>
                                <button>VIEW ALL</button>
                                <div className='users'>
                                    {type.users.map((user, index) => (
                                        <img src={user.img} alt='' title={user.name} />
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContBiling