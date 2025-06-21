import React from 'react';

import { Howl } from 'howler';

const PractiseStartButton = (props) => {

  
    

  return (
  
                <div class="practice_button ">
                  
                    <div class="btn btn-primary " onClick={
                      ()=>{
                        props.PracticeHandler(props.value)
                        // const sound = new Howl({
                        //   src: ['tic-tac-27828.mp3'],
                        //   // autoplay: true,
                        // }).play()
                      
                      }
                      
                    }>{props.ButtonName}</div>
                    {/* <audio loop controls  autoPlay >
                      <source src='D:\New folder\project\front end\src\components\clock-clock-sound-clock-clock-time-10343.mp3' type='audio/mpeg'></source>
                    </audio> */}
                </div>
          
  );
}

export default PractiseStartButton;
