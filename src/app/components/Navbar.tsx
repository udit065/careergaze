import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
    return (

        <div className='flex justify-around  items-center h-16 bg-red-100'>
            <div className='font-bold text-xl'>CarrerGaze</div>
            <div className='flex justify-evenly w-[35rem] font-medium'>
                <div>Community</div>
                <div>Jobs</div>
                <div>Companies</div>
                <div>Salaries</div>
            </div>
            <div className='flex justify-evenly w-44'>
                <div className='flex'>
                    <div className='mr-2'><SearchIcon /></div>
                    <div>Search</div>
                </div>
                <div><NotificationsNoneIcon /></div>
                <div><AccountCircleIcon /></div>
            </div>
        </div>
    )
}

export default Navbar