import './SocialCard.css';
import './SocialCardInfo';
import React from 'react';
import SocialCardInfo from './SocialCardInfo';
import Border from './SocialCardBorder';




class SocialCard extends React.Component{
 


    render(){
        return(
            <div className="mainContent">
           
                <div className="text">learning React? Start small!
                    </div>
                    <Border />
                    <div className="info">
                    <SocialCardInfo />
                    </div>
                    
                    </div>
                   
               
                
        )
    }
}

export default SocialCard;