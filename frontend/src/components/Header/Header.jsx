import React from 'react'
import logo1 from '../../assets/images/logo1.png'

const navlinks =[
  {
    path:'/home',
    display:'home'
  }
]

const Header = () => {
  return  <header className="header flex items-center">
    <div className="container">
      <div className="flex items-center justify-between">
        {/*======== logo ======*/}
        <div></div>
        <div className="logo">
          <img src={logo1} alt="" />
        </div>



        {/* ----------- menu ----------*/}
        <div className="navigation">
          <ul className="menu flex items-center gap-[2.7rem">

          </ul>

        </div>

      </div>

    </div>

  </header>
};

export default Header
