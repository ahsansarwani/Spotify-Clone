import React from 'react'
import './SidebarOptions.css'

function SidebarOption({ title, Icon }) {
    return (
        <div className="SidebarOption">
            {Icon && <Icon className="sidebarOption_Icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p> }
        </div>
    )
}

export default SidebarOption
