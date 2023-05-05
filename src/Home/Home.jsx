import React from 'react'
import './Home.scss';
//import { AcUnit } from '@material-ui/icons';
import Navbar from '../Component/navbar/Navbar';
import Featured from '../Component/featured/Featured';
import List from '../Component/list/list';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured />
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/> 

    </div>
  )
}

export default Home

