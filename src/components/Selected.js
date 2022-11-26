import React,{useState,useEffect} from 'react';
import "./Selected.css"
import { useLocation } from 'react-router-dom';

const Selected = () => {
    const state = useLocation();
    const [players,setplayers] = useState([]);
    useEffect(() =>{
      setplayers(players.concat(state.state.players));
      // eslint-disable-next-line
    },[])
  return (
    <div className='All page'>
        <h2 className=''>
            Picked Player
        </h2>
        <div className='container'>
            {
              players.map((player,i)=>{
                return <div key={i} className='player'>
                <p>{player.name}</p>
                <div className='credit-player'>
                    <h6>Credit</h6>
                    <p>{player.event_player_credit}</p>
                </div>
            </div>
              })
            }
        </div>
    </div>
  )
}

export default Selected