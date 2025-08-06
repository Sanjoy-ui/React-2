import React from 'react'
import { ZegoSuperBoardManager } from 'zego-superboard-web';
import {ZegoExpressEngine} from 'zego-express-engine-webrtc'
import { useEffect } from 'react';

function App() {
  

  const appID =576874493;
  const userID = 'sanjoydb';
  const roomID = '5690';
  const userName = 'Sanjoy ui'
  const token = '04AAAAAGiUvscADFgUkH7LIibtDSSzZwCxABXVcXGHMZx933bDBxg5Eb6Py//HNNBVNjRHkz2QgSAaQzQJgXCGiHSfJ264K63Y7QjcD2aCKFOvgGKew2xI++Zs36SN2ZjYrTvScgGk689W66OV1v2spv0ahLo3N+n8dJQu8yKVgp/oMElhmqTGVaVBZOm0zH8VeHZNQMpdiHAsApFOdEjPrl9wkM72Y8az9YhY0dbJJFVMkSSco3EMntxhGtJQcxhPdqB/PcsgNy/wAQ=='
  const server = 'wss://webliveroom576874493-api.coolzcloud.com/ws';
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
     <div className='w-full h-full' id="parentDomID">
      
    </div>
   </div>
  )
}

export default App

