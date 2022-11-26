import React, { useState, useEffect } from 'react'
import "./Landing.css"
import axios from 'axios';
// https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_Players_of_match.json
const Landing = () => {
    // const [allPlayers,setAllPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [credit,setcredit] = useState(100);
    const [allBatsman, setAllBatsman] = useState([]);
    const [allBowlers, setAllBowlers] = useState([]);
    const [allRounders, setAllRounders] = useState([]);
    const [allWicketkeepers, setAllWicketkeepers] = useState([]);
    const [selectedBatsman, setSelectedBatsman] = useState([]);
    const [selectedWicketkeepers, setSelectedWicketkeepers] = useState([]);
    const [selectedRounders, setSelectedRounders] = useState([]);
    const [selectedBowlers, setSelectedBowlers] = useState([]);
    useEffect(() => {
        axios.get("https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_Players_of_match.json").then(response => {
            divide(response.data);
        }).catch(err => { console.log(err); });
    }, [])


    const divide = (data) => {
        // console.log("<--Inside divide-->",data);
        const bower = data.filter(data => data.role === "Bowler")
        const batters = data.filter(data => data.role === "Batsman")
        const wicketkeepers = data.filter(data => data.role === "Wicket-Keeper")
        const allrounders = data.filter(data => data.role === "All-Rounder")
        setAllBowlers(allBowlers.concat(bower));
        setAllBatsman(allBatsman.concat(batters));
        setAllWicketkeepers(allWicketkeepers.concat(wicketkeepers));
        setAllRounders(allRounders.concat(allrounders));
    }
    // console.log("<--All Players-->",allPlayers)
    // console.log("<--All Batsman-->", allBatsman)
    // console.log("<--All Rounders-->",allRounders)
    // console.log("<--All Wicketkeepers-->",allWicketkeepers)
    // console.log("<--All Bowlers-->",allBowlers)

    const batsmanselect = (data) => {
        // console.log(data)
        //change the state of allbatsmen array.
        const changeArr = allBatsman.map(obj=>{
            if(obj.name===data.name){
                // console.log("matched");
                return  {...obj, is_playing: true};
            }
            return obj;
        })
        setSelectedBatsman([...selectedBatsman,data])
        setAllBatsman(changeArr)
    }
    const bowlerselect = (data) => {
        // console.log(data)
        const changeArr = allBowlers.map(obj=>{
            if(obj.name===data.name){
                // console.log("matched");
                return  {...obj, is_playing: true};
            }
            return obj;
        })
        setSelectedBowlers([...selectedBowlers,data])
        setAllBowlers(changeArr)
    }
    const wicketkeeperselect = (data) => {
        // console.log(data)
        const changeArr = allWicketkeepers.map(obj=>{
            if(obj.name===data.name){
                // console.log("matched");
                return  {...obj, is_playing: true};
            }
            return obj;
        })
        setSelectedWicketkeepers([...selectedWicketkeepers,data])
        setAllWicketkeepers(changeArr)
    }
    const allrounderselect = (data) => {
        // console.log(data)
        const changeArr = allRounders.map(obj=>{
            if(obj.name===data.name){
                // console.log("matched");
                return  {...obj, is_playing: true};
            }
            return obj;
        })
        setSelectedRounders([...selectedRounders,data])
        setAllRounders(changeArr)
    }
    const proceed = () => {
    }

    return (

        <div className='landing'>
            <div className='head'>
                <h3 className='title'>Pick Players</h3>
                <div className='players_count'>
                    <div>
                        <p>0/11</p>
                        <h6>Players</h6>
                    </div>
                    <div>
                        <p>0</p>
                        <h6>country</h6>
                    </div>
                    <div>
                        <p>0</p>
                        <h6>country</h6>
                    </div>
                    <div>
                        <p>{credit}</p>
                        <h6>cr points</h6>
                    </div>
                </div>
            </div>
            <div className='hero_section'>
                <div className='hero_inside'>
                    <div>
                        <h4>Pick 3-7 Batsman</h4>
                        {allBatsman.map((data, i) => {
                            return <div key={i} onClick={() => { batsmanselect(data) }} className={`${data.is_playing?"inside-red":"inside"}`}>
                                <p>{data.name}</p>
                                <div className='credit'>
                                    <h6>Credit</h6>
                                    <p>{data.event_player_credit}</p>
                                </div>
                            </div>
                        })}
                        
                    </div>
                    <div>
                        <h4>Pick 1-5 Wicket Keepers</h4>
                        {allWicketkeepers.map((data, i) => {
                            return <div key={i} onClick={() => { wicketkeeperselect(data) }} className={`${data.is_playing?"inside-red":"inside"}`}>
                                <p>{data.name}</p>
                                <div className='credit'>
                                    <h6>Credit</h6>
                                    <p>{data.event_player_credit}</p>
                                </div>
                            </div>
                        })}
                        
                    </div>
                </div>
                <div className='hero_inside hero_down'>
                    <div>
                        <h4>Pick 0-4 All Rounders</h4>
                        {allRounders.map((data, i) => {
                            return <div key={i} onClick={() => { allrounderselect(data) }} className={`${data.is_playing?"inside-red":"inside"}`}>
                                <p>{data.name}</p>
                                <div className='credit'>
                                    <h6>Credit</h6>
                                    <p>{data.event_player_credit}</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <div>
                        <h4>Pick 3-7 Bowlers</h4>
                        {allBowlers.map((data, i) => {
                            return <div key={i} onClick={() => { bowlerselect(data) }} className={`${data.is_playing?"inside-red":"inside"}`}>
                                <p>{data.name}</p>
                                <div className='credit'>
                                    <h6>Credit</h6>
                                    <p>{data.event_player_credit}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className='Proceed'>
                <h2>Proceed</h2>
            </div>
        </div>
    )
}

export default Landing