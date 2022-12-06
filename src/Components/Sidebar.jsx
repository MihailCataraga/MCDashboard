import HouseIcon from '@mui/icons-material/House';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PaymentIcon from '@mui/icons-material/Payment';
import BuildIcon from '@mui/icons-material/Build';
import PersonIcon from '@mui/icons-material/Person';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h1 className="logo"><span>MC</span>Dashboard</h1>
        <div className='option'>
            <HouseIcon className='icon' />
            <Link className='h4' to='/'>Dashboard</Link>
        </div>
        <div className='option'>
            <EqualizerIcon className='icon' />
            <Link className='h4' to='/tables'>Tables</Link>
        </div>
        <div className='option'>
            <PaymentIcon className='icon' />
            <Link className='h4' to='/billing'>Billing</Link>
        </div>
        <div className='option'>
            <BuildIcon className='icon' />
            <Link to='/settings' className='h4'>Settings</Link>
        </div>
        <h3>ACCOUNT PAGES</h3>
        <div className='option'>
            <PersonIcon className='icon' />
            <Link className='h4'>Profile</Link>
        </div>
        <div className='option'>
            <InsertDriveFileIcon className='icon' />
            <Link className='h4'>Sign In</Link>
        </div>
        <div className='option'>
            <AssignmentIndIcon className='icon' />
            <Link className='h4'>Sign Up</Link>
        </div>
    </div>
  )
}

export default Sidebar