import React, { useEffect, useState } from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LanguageIcon from '@mui/icons-material/Language';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';
import { Line } from 'rc-progress';
import MouseIcon from '@mui/icons-material/Mouse';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HtmlIcon from '@mui/icons-material/Html';
import PaidIcon from '@mui/icons-material/Paid';
import AddCardIcon from '@mui/icons-material/AddCard';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ContDashboard = () => {
  const stats = [
    {
      title: "Today's Money",
      value: "$53,000",
      percentages: "55%",
      symbol: "+",
      icon: <AccountBalanceWalletIcon className='icon' />
    },
    {
      title: "Today's Users",
      value: "2,300",
      percentages: "3%",
      symbol: "+",
      icon: <LanguageIcon className='icon' />
    },
    {
      title: "New Clients",
      value: "+3,462",
      percentages: "2%",
      symbol: "-",
      icon: <DescriptionIcon className='icon' />
    },
    {
      title: "Total Sales",
      value: "$103,430",
      percentages: "5%",
      symbol: "+",
      icon: <ShoppingCartIcon className='icon' />
    },
  ]
  const data = [
    {
      name: 'Jan',
      Websites: 200,
      MobileApps: 500
    },
    {
      name: 'Feb',
      Websites: 230,
      MobileApps: 250
    },
    {
      name: 'Mar',
      Websites: 300,
      MobileApps: 300
    },
    {
      name: 'Apr',
      Websites: 350,
      MobileApps: 220
    },
    {
      name: 'May',
      Websites: 370,
      MobileApps: 500
    },
    {
      name: 'Jun',
      Websites: 420,
      MobileApps: 250
    },
    {
      name: 'Jul',
      Websites: 550,
      MobileApps: 300
    },
    {
      name: 'Aug',
      Websites: 350,
      MobileApps: 230
    },
    {
      name: 'Sep',
      Websites: 400,
      MobileApps: 300
    },
    {
      name: 'Oct',
      Websites: 500,
      MobileApps: 350
    },
    {
      name: 'Nov',
      Websites: 330,
      MobileApps: 250
    },
    {
      name: 'Dec',
      Websites: 550,
      MobileApps: 400
    },
  ];
  const data2 = [
    {
      name: 'Apr',
      Sales: 330
    },
    {
      name: 'May',
      Sales: 250
    },
    {
      name: 'Jun',
      Sales: 110
    },
    {
      name: 'Jul',
      Sales: 300
    },
    {
      name: 'Aug',
      Sales: 490
    },
    {
      name: 'Sep',
      Sales: 350
    },
    {
      name: 'Oct',
      Sales: 270
    },
    {
      name: 'Nov',
      Sales: 130
    },
    {
      name: 'Dec',
      Sales: 425
    },
  ]
  const infos = [
    {
      icon: <AccountBalanceWalletIcon className='icon' />,
      name: 'Users',
      value: '32,984'
    },
    {
      icon: <MouseIcon className='icon' />,
      name: 'Clicks',
      value: '2,42M'
    },
    {
      icon: <ShoppingCartIcon className='icon' />,
      name: 'Sales',
      value: '2,400$'
    },
    {
      icon: <BuildIcon className='icon' />,
      name: 'Items',
      value: '320'
    },
  ]
  const rows = [
    {
      logo: 'img/small-logos/logo-xd.svg',
      name: 'Chakra Vision UI Version',
      member: [
        {
          img: 'img/avatar1.png',
          name: 'Ryan Tompson'
        },
        {
          img: 'img/avatar2.png',
          name: 'Romina Hadid'
        },
        {
          img: 'img/avatar3.png',
          name: 'Alexander Smith'
        },
        {
          img: 'img/avatar4.png',
          name: 'Jessica Doe'
        }
      ],
      budget: '$14,000',
      percent: 60
    },
    {
      logo: 'img/small-logos/logo-atlassian.svg',
      name: 'Add Progress Track',
      member: [
        {
          img: 'img/avatar2.png',
          name: 'Romina Hadid'
        },
        {
          img: 'img/avatar4.png',
          name: 'Jessica Doe'
        }
      ],
      budget: '$3,000',
      percent: 10
    },
    {
      logo: 'img/small-logos/logo-slack.svg',
      name: 'Fix Platform Errors',
      member: [
        {
          img: 'img/avatar1.png',
          name: 'Ryan Tompson'
        },
        {
          img: 'img/avatar3.png',
          name: 'Alexander Smith'
        }
      ],
      budget: 'Not set',
      percent: 100
    },
    {
      logo: 'img/small-logos/logo-spotify.svg',
      name: 'Launch our Mobile App',
      member: [
        {
          img: 'img/avatar4.png',
          name: 'Jessica Doe'
        },
        {
          img: 'img/avatar3.png',
          name: 'Alexander Smith'
        },
        {
          img: 'img/avatar2.png',
          name: 'Romina Hadid'
        },
        {
          img: 'img/avatar1.png',
          name: 'Ryan Tompson'
        }
      ],
      budget: '$20,500',
      percent: 100
    },
    {
      logo: 'img/small-logos/logo-jira.svg',
      name: 'Add the New Pricing Page',
      member: [
        {
          img: 'img/avatar1.png',
          name: 'Ryan Tompson'
        }
      ],
      budget: '$500',
      percent: 25
    },
    {
      logo: 'img/small-logos/logo-invision.svg',
      name: 'Redesign New Online Shop',
      member: [
        {
          img: 'img/avatar4.png',
          name: 'Jessica Doe'
        },
        {
          img: 'img/avatar1.png',
          name: 'Ryan Tompson'
        }
      ],
      budget: '$2,000',
      percent: 40
    },
  ]
  const orders = [
    {
      logo: <NotificationsIcon className='iconNotification' />,
      title: '$2400, Design changes',
      date: '22 DEC 7:20 PM'
    },
    {
      logo: <HtmlIcon className='iconHTML' />,
      title: 'New order #1832412',
      date: '21 DEC 11 PM'
    },
    {
      logo: <PaidIcon className='iconPaid' />,
      title: 'Server payments for Apri',
      date: '21 DEC 9:34 PM'
    },
    {
      logo: <AddCardIcon className='iconCard' />,
      title: 'New card added for order #4395133s',
      date: '20 DEC 2:20 AM'
    },
    {
      logo: <AddCardIcon className='iconCard' />,
      title: 'New card added for order #4395133',
      date: '18 DEC 4:54 AM'
    },
    {
      logo: <HtmlIcon className='iconHTML' />,
      title: 'New order #9583120',
      date: '17 DEC'
    },
  ]
  const [value, setValue] = useState(0);
  const [scor, setScor] = useState(0);
  const [chart, setChart] = useState(false);
  const [barChart, setBarChart] = useState(false);
  const [options, setOptions] = useState(false)
  useEffect(() => {
    setValue(95);
    setScor(9.3);
    setChart(true);
    setBarChart(true);
  }, [])
  return (
    <div className='dashboard'>
      <div className='stats'>
        { stats.map((stat, index) => (
          <div className='stat' key={index}>
            <div className='left'>
              <p>{stat.title}</p>
              <h2>{stat.value}<span className={stat.symbol === "+" ? "green" : "red"}>{stat.symbol + stat.percentages}</span></h2>
            </div>
            <div className='right'>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>
      <div className='profile'>
        <div className='left'>
          <p className='welcome'>Welcome back,</p>
          <h1>Mark Johnson</h1>
          <p>Glad to see you again!</p>
          <p>Ask me anything.</p>
          <div className='record'>
            <p>Tap to record</p>
            <ArrowForwardIcon className='icon' />
          </div>
        </div>
        <div className='center'>
          <h2>Satisfaction Rate</h2>
          <p>From all projects</p>
          <CircularProgressbar 
            className='progresBar'
            value={value}
            styles={buildStyles({
              trailColor: '#acbcd8',
              pathTransitionDuration: 1.5,
              pathColor: "#5f92d5",
            })}
          />
          <div className='emoji'>
            <EmojiEmotionsIcon className='icon' />
          </div>
          <div className='percentBox'>
              <p>0%</p>
              <div className='procent'>
                <h1>95%</h1>
                <p>Based on likes</p>
              </div>
              <p>100%</p>
          </div>
        </div>
        <div className='right'>
            <div className='top'>
              <h2>Referral Tracking</h2>
              <div className='dots'>
                <MoreHorizIcon className='icon' />
              </div>
            </div>
            <div className='bottom'>
              <div className='left'>
                <div className='invited'>
                  <p>Invited</p>
                  <h2>145 people</h2>
                </div>
                <div className='bonus'>
                  <p>Bonus</p>
                  <h2>1,456</h2>
                </div>
              </div>
              <div className='right'>
                <CircularProgressbar 
                  className='progresBar'
                  minValue={0}
                  maxValue={12}
                  value={scor}
                  styles={buildStyles({
                    trailColor: '#a6bbb2',
                    pathTransitionDuration: 1.5,
                    pathColor: "#04a37a",
                  })}
                />
                <div className='date'>
                  <p>Safety</p>
                  <h1>9.3</h1>
                  <p>Total Score</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className='sales'>
        <div className='left'>
          <h2>Sales Owerview</h2>
          <p><span>+5% more</span> in 2021</p>
          { chart && <AreaChart
            className='chart'
            width={810}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorWeb" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38dbff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#38dbff" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#33a0ff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#33a0ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="5 5" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: "white"}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: "white"}} />
            <Tooltip />
            <Area type="monotone" dataKey="MobileApps" strokeWidth="5px" stroke="#33a0ff" fillOpacity={.8} fill="url(#colorMobile)" />
            <Area type="monotone" dataKey="Websites" strokeWidth="5px" stroke="#38dbff" fillOpacity={.8} fill="url(#colorWeb)" />
          </AreaChart>}
        </div>
        <div className='right'>
          {barChart && <BarChart
              className='barChart'
              width={590}
              height={200}
              data={data2}
              margin={{
                top: 5,
                right: 20,
                left: 0,
                bottom: 5,
              }}
              barSize={10}
              
            >
              <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} axisLine={false} tickLine={false} tick={false} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: "white"}} />
              <Tooltip labelStyle={{color: "blue"}} />
              <CartesianGrid vertical={false} horizontal={false} />
              <Bar dataKey="Sales" fill="rgb(34, 36, 34)"  />
            </BarChart>
          }
          <h3>Active Users</h3>
          <p><span>(+23)</span>than last week</p>
          <div className='infos'>
            {infos.map((info, index) => (
              <div className='info' key={index}>
                <div className='top'>
                  <div className='iconBox'>
                    {info.icon}
                  </div>
                  <p>{info.name}</p>
                </div>
                <div className='bottom'>
                  <h3>{info.value}</h3>
                  <Line width={100} percent={60} strokeWidth={6} strokeColor="#005ecc" trailWidth={3} trailColor="#0c112a" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='projects'>
          <div className='title'>
            <div className='left'>
              <h2>Projects</h2>
              <p>
                <CheckCircleIcon className='icon' />
                <span>30 done</span>
                this month
              </p>
            </div>
            <div className='right'>
              <MoreVertIcon className='icon' onClick={() => setOptions(!options)} />
              {options && <div className='options view'>
                  <p>Action</p>
                  <p>Another action</p>
                  <p>Something else</p>
                </div>
              }
            </div>
          </div>
          
          <div className='titles'>
            <p className='companies'>COMPANIES</p>
            <p className='members'>MEMBERS</p>
            <p className='budget'>BUDGET</p>
            <p className='completion'>COMPLETION</p>
          </div>
          <div className='rows'>
            {rows.map((row, index) => (
              <div className='row' key={index}>
                <div className='name'>
                  <img src={row.logo} alt=''></img>
                  <h4>{row.name}</h4>
                </div>
                <div className='memberList'>
                  {row.member.map((img, index) => (
                    <img src={img.img} alt='' key={index} title={img.name} />
                  ))}
                </div>
                <h4 className='budget'>{row.budget}</h4>
                <div className='percent'>
                  <h4>{row.percent}%</h4>
                  <Line 
                    width={100} 
                    percent={row.percent} 
                    strokeWidth={6} 
                    strokeColor="#005ecc" 
                    trailWidth={3} 
                    trailColor="#0c112a" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='orders'>
          <h1>Orders overview</h1>
          <p>
            <CheckCircleIcon className='icon' />
            <span>+30%</span>
            this month
          </p>
          <div className='ordersList'>
            {orders.map((order, index) => (
              <div className='order' key={index}>
                {order.logo}
                <div className='title'>
                  <h4>{order.title}</h4>
                  <p>{order.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContDashboard