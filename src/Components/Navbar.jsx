import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="page">
            <div className="page-src">
                <HomeIcon className="icon" />
                <h4>/ Dashboard</h4>
            </div>
            <h3 className="page-title">Dashboard</h3>
        </div>
        <div className="options">
            <div className="search"  >
                <SearchIcon className="icon" />
                <input 
                    className="input"
                    type='text' 
                    placeholder="Type here..." />
            </div>
            <button>
                <AccountCircleIcon className="icon" />
                Sing In
            </button>
            <button>
                <SettingsIcon className="icon" />
            </button>
            <button>
                <NotificationsIcon className="icon" />
            </button>
        </div>   
    </div>
  )
}

export default Navbar