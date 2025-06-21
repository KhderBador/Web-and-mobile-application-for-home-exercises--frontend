import React,{useState,useEffect} from 'react';
import { Howl } from 'howler';


const CounterBox = ({time}) => {
  
  const minuteCounter=0
  const [secondCounter,setSecondCounter]=useState(time)
   const sound = new Howl({
                          src: ['tic-tac-27828.mp3'],
                          // autoplay: true,
                        }).play()


  let DecreaseSecondCounter=() =>{
  secondCounter==0?setSecondCounter(0):  setSecondCounter(secondCounter-1)
  }



  useEffect(()=>{

    let Sinterval=setInterval(DecreaseSecondCounter,1000)
    return()=>{
  
      clearInterval(Sinterval)
    }
        
    },[secondCounter])

  
  

  return (
    <div className='counter_box'>
    <h1><span>{minuteCounter}</span>:<span>{secondCounter}</span></h1>  
      
    </div>
  );
}

export default CounterBox;
