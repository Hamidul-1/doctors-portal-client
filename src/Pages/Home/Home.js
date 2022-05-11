import React from 'react';
import Banner from './Banner';
import Exceptional from './Exceptional';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;