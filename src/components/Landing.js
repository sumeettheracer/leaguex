import React, { useState, useEffect } from 'react'
import "./Landing.css"
import axios from 'axios';
// import { useNavigate,Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_Players_of_match.json
const Landing = () => {
    // const [allPlayers,setAllPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    // const [credit, setcredit] = useState(100);
    // const [playerscount,setPlayersCount] = useState(0);
    const [allBatsman, setAllBatsman] = useState([]);
    const [allBowlers, setAllBowlers] = useState([]);
    const [allRounders, setAllRounders] = useState([]);
    const [allWicketkeepers, setAllWicketkeepers] = useState([]);
    const [selectedBatsman, setSelectedBatsman] = useState([]);
    const [selectedWicketkeepers, setSelectedWicketkeepers] = useState([]);
    const [selectedRounders, setSelectedRounders] = useState([]);
    const [selectedBowlers, setSelectedBowlers] = useState([]);
    // eslint-disable-next-line
    const navigation = useNavigate();
    useEffect(() => {
        axios.get("https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_Players_of_match.json").then(response => {
            divide(response.data);
        }).catch(err => { console.log(err); });
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        if(selectedPlayers.length !== 0 ){
            navigation("/done",{state:{players:selectedPlayers}});
        }// eslint-disable-next-line
    },[selectedPlayers])

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
        if(data.is_playing === true){
            // setPlayersCount(prevstate=>prevstate - 1)
            // setcredit(prevstate=>prevstate+1)
            const changeArr = allBatsman.map(obj => {
                if (obj.name === data.name) {
                    return { ...obj, is_playing: false };
                }
                return obj;
            })
            setSelectedBatsman(current => current.filter(player=>player.name !== data.name))
            setAllBatsman(changeArr);
        }else{
            const changeArr = allBatsman.map(obj => {
                if (obj.name === data.name) {
                    return { ...obj, is_playing: true };
                }
                return obj;
            })
            setSelectedBatsman([...selectedBatsman, data])
            setAllBatsman(changeArr)
        }
        
    }
    
    const bowlerselect = (data) => {
        if(data.is_playing === true){
            // setPlayersCount(prevstate=>prevstate - 1)
            // setcredit(prevstate=>prevstate+1)
            const changeArr = allBowlers.map(obj => {
                if (obj.name === data.name) {
                    return { ...obj, is_playing: false };
                }
                return obj;
            })
            setSelectedBowlers(current => current.filter(player=>player.name !== data.name))
            setAllBowlers(changeArr);
        }else{
            const changeArr = allBowlers.map(obj => {
                if (obj.name === data.name) {
                    return { ...obj, is_playing: true };
                }
                return obj;
            })
            setSelectedBowlers([...selectedBowlers, data])
            setAllBowlers(changeArr)
        }
    }
    const wicketkeeperselect = (data) => {
        if(data.is_playing === true){
            // setPlayersCount(prevstate=>prevstate - 1)
            // setcredit(prevstate=>prevstate+1)
            const changeArr = allWicketkeepers.map(obj => {
                if (obj.name === data.name) {
                    return { ...obj, is_playing: false };
                }
                return obj;
            })
            setSelectedWicketkeepers(current => current.filter(player=>player.name !== data.name))
            setAllWicketkeepers(changeArr);
        }else{
            const changeArr = allWicketkeepers.map(obj => {
                if (obj.name === data.name) {
                    return { ...obj, is_playing: true };
                }
                return obj;
            })
            setSelectedWicketkeepers([...selectedWicketkeepers, data])
            setAllWicketkeepers(changeArr)
        }
    }
    const allrounderselect = (data) => {
        if(data.is_playing === true){
            // setPlayersCount(prevstate=>prevstate - 1)
            // setcredit(prevstate=>prevstate+1)
            const changeArr = allRounders.map(obj => {
                if (obj.name === data.name) {
                    return { ...obj, is_playing: false };
                }
                return obj;
            })
            setSelectedRounders(current => current.filter(player=>player.name !== data.name))
            setAllRounders(changeArr);
        }else{
            const changeArr = allRounders.map(obj => {
                if (obj.name === data.name) {
                    return { ...obj, is_playing: true };
                }
                return obj;
            })
            setSelectedRounders([...selectedRounders, data])
            setAllRounders(changeArr)
        }
    }


    const proceed = () => {
        const batlen = selectedBatsman.length;
        const bowlen = selectedBowlers.length;
        const wicketlen = selectedWicketkeepers.length;
        const roundlen = selectedRounders.length;
        if(batlen<3 || batlen>7){
            alert("select 3 to 7 Batsman")

        }
        if(bowlen< 3 || bowlen>7){
            alert("select 3 to 7 Bowlers")

        }
        if(wicketlen<1 || wicketlen>3){
            alert("select 1 to 3 Wicketkeepers")

        }
        if(roundlen>4){
            alert("select 0 to 4 All rounders")

        }
        setSelectedPlayers(selectedPlayers.concat(selectedBatsman,selectedBowlers,selectedWicketkeepers,selectedRounders))
        // console.log(selectedPlayers)
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
                        <p>100</p>
                        <h6>cr points</h6>
                    </div>
                </div>
            </div>
            <div className='hero_section'>
                <div className='hero_inside'>
                    <div>
                        <h4>Pick 3-7 Batsman</h4>
                        {allBatsman.map((data, i) => {
                            return <div key={i} onClick={() => { batsmanselect(data) }} className={`${data.is_playing ? "inside-red" : "inside"}`}>
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
                            return <div key={i} onClick={() => { wicketkeeperselect(data) }} className={`${data.is_playing ? "inside-red" : "inside"}`}>
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
                            return <div key={i} onClick={() => { allrounderselect(data) }} className={`${data.is_playing ? "inside-red" : "inside"}`}>
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
                            return <div key={i} onClick={() => { bowlerselect(data) }} className={`${data.is_playing ? "inside-red" : "inside"}`}>
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
            <div className='Proceed' onClick={() => {proceed()}}>
                <h2>Proceed</h2>
            </div>
        </div>
    )
}

export default Landing