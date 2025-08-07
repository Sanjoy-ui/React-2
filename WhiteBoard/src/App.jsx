import React from 'react'
import { ZegoSuperBoardManager } from 'zego-superboard-web';
import {ZegoExpressEngine} from 'zego-express-engine-webrtc'
import { useEffect } from 'react';

function App() {
  

 
  const zg = new ZegoExpressEngine(appID, server);
  const zegoSuperBoard = ZegoSuperBoardManager.getInstance();
  const result = async ()=>{
    await zegoSuperBoard.init(zg, {
    parentDomID: 'parentDomID', // D of the parent container to be mounted to.
    appID , // The AppID you get.
    userID, // User-defined ID
    token // The Token you get that used for validating the user identity.
});
  await zg.loginRoom(roomID, token, {userID, userName}, {userUpdate: true});
   await zegoSuperBoard.createWhiteboardView({
    name: 'Virtual WhiteSpace', // Whiteboard name
    perPageWidth: 1600, // Width of each whiteboard page
    perPageHeight: 900, // Height of each whiteboard page
    pageCount: 1// Page count of a whiteboard
});

  }
  

  useEffect(()=>{
    if(zegoSuperBoard){
      result()
    }
  },[zegoSuperBoard])
  return (
   <div className='h-[100vh] w-full bg-black '>
      <h1 className='text-white text-center text-4xl py-6 font-bold'>Virtual White Board</h1>
     <div className='w-full h-3/4' id="parentDomID">
      
    </div>
   </div>
  )
}

export default App

