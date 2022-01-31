import React from 'react';

function Footer({listAddItems}) {
    return (
        <div style={{position:"fixed",bottom:"0",backgroundColor:"#0975df",color:"white",textAlign:"center",width:"27%",height:"3rem" ,display:"flex",alignItems:"center",justifyContent:"center"}}>
        {listAddItems}      
        </div>
    );
}

export default Footer;