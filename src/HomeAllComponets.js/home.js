
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carouselcomponent from './Carouselcomponent';
import Catecory from './Catecory';
import Categories from './Catecory';
import'./home.css';
import Homefooter from './Homefooter';

import Nev from './Nev';
import Pictures from './Pictures';

 function Home({locationDataFromApp}) {
     
    return (
        <div>
        <div className="homeMain">
        <Nev locationFromHome={locationDataFromApp}/>
    
       
        </div>
        <div>
         <Catecory/>
         </div>
         <div>
             <Carouselcomponent/>
         </div>
         <div>
             <Pictures/>
         </div>
        
         <div>
        <Homefooter/>
         </div>
         </div>
    );
}

export default Home;