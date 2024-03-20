// import {useState} from "react"
// import Song from './Song';

// const SongList=():JSX.Element=>{
// const [visible,setVisible]=useState<boolean> (false);
// function toggleVisibility():void{
//     setVisible(!visible)
// }
// return(
//     <div>
//         <h2>Your fav songs are:</h2>
//         <ul style={{display:visible?'block':'none'}}>
//             <Song title="Last thing on my mind" artist="Steps"/>
//             <Song title="If you're over me" artist="yEARS AND years"/>
//         </ul>
//         <button onClick={toggleVisibility}>{visible?'show songs':'hide songs'}</button>
//     </div>
// )}

import { useState } from 'react';
import Song from './Song';
import { SongType} from './SongTypes';

import { SongProps} from './SongTypes';
import { title } from 'process';

// const SongList = () :JSX.Element => {
//     let [visible, setVisible] = useState<boolean>(false);
//     let [song1,setSong1] = useState<SongType>({title:'Last thing',artist:'steps', votes : 0})
//     let [song2,setSong2] = useState<SongType>({title:'If you\'re over me',artist:'Years and years', votes : 0})

//     function toggleVisibility():void{
//         setVisible(!visible);
//     }
//     const changeSong = () : void => {
//         setSong1({...song1, title : 'Something in your eyes'});
//         setSong2({...song2, title : 'King' })
//     }
//     const addVote1 = () :void => {
//         setSong1({...song1, votes : song1.votes + 1});
//     }

//     const addVote2 = () :void => {
//         setSong2({...song2, votes : song2.votes + 1});
//     }


//     return (
//         <div>
            
//             <h2>Your favourite songs are</h2>
//             <ul style={{display: visible?'block': 'none'}}>
//             {/* <Song title="Last song on my mind" artist="Steps"/>
//             <Song title='If you are over me' artist='Years and Years'/> */}
            
                
//             </ul>
//             <button onClick={toggleVisibility}>{visible?'Hide':'Show'} songs</button>
//             <ul style= {{display : visible ? 'block' : 'none'}}>
//                 <Song song={song1} recordVote={addVote1}/>
//                 <Song song={song2} recordVote={addVote2} />
//             </ul>

//             <button onClick={changeSong}>Change songs</button>
//         </div>
//     )
// }


const SongList=()=>{
    const initialSongs: SongType[]=[
        {title:'perfect',artist:'ed',votes:0},
        {title:'tene',artist:'ed',votes:0},
        {title:'',artist:'',votes:0},
        {title:'',artist:'',votes:0}
    ]

    const [songs,setSongs]=useState<SongType[]>(initialSongs)
    const [visible,setVisible] = useState<boolean>(false);
    const [showAll,setShowAll] =useState<boolean>(true);
    const addVote=(id:number):void=>{
        debugger;
        const newSongs=songs.map((song,idx)=>idx===id?{...song,votes:song.votes+1}:song)
        setSongs(newSongs)
    }
    const changeVisibilty=()=>{
        setVisible(!visible)
    }
    const toggleShowAll = () : void => {
        setShowAll(!showAll);
    }


    // const displaysongs: JSX.Element[]=songs.map((song ,index)=>{
    //     return(<Song key={index} song={song} recordVote={()=>addVote(index)}/>)
    // })

    return(
        <div>
            <h2>Your fav songs</h2>
            <button onClick={changeVisibilty}>{visible?'show':'hide'} songs</button>
            <ul>
                {
                    showAll && 
                    songs.map((song,index)=><Song key={index} song={song} recordVote={()=>addVote(index)} />)
                }
                { !showAll && 
                songs.filter((song)=>song.votes>=2).map((song,index)=><Song key={index} song={song} recordVote={()=>addVote(index)}/>)
                }
            </ul>
         <h3>Cuurently showing {showAll?'all':'2 or more rated'} songs</h3>
         <button onClick={toggleShowAll}>Show{showAll?'all songs':'only high rated songs'}</button>
        </div>
    )
}
export default SongList;