import React from 'react'
import Search from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import './Header.css';
import { useDataLayerValue } from './DataLayer';

function Header() {

    const [{user}, dispaatch] = useDataLayerValue();

    return (
        <div className="header">
           <div className="header_left">
                <Search />
                <input placeholder="Search for Artists, Songs, or podcasts" type="text" />
           </div>
           <div className="header_right">
               <Avatar src={user?.images[0]?.url} alt="AN" />
              <h4>{user?.display_name}</h4>
           </div>

        </div>
    )
}

export default Header
