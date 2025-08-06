import React, { useEffect, useRef, useState } from 'react';
import { ZegoSuperBoardManager } from 'zego-superboard-web';
import { ZegoExpressEngine } from 'zego-express-engine-webrtc';

function App() {
  const appID = 576874493;
  const userID = 'sanjoydb';
  const roomID = '5690'; // Should be string
  const userName = 'Sanjoy ui';
  const token = '04AAAAAGiUvscADFgUkH7LIibtDSSzZwCxABXVcXGHMZx933bDBxg5Eb6Py//HNNBVNjRHkz2QgSAaQzQJgXCGiHSfJ264K63Y7QjcD2aCKFOvgGKew2xI++Zs36SN2ZjYrTvScgGk689W66OV1v2spv0ahLo3N+n8dJQu8yKVgp/oMElhmqTGVaVBZOm0zH8VeHZNQMpdiHAsApFOdEjPrl9wkM72Y8az9YhY0dbJJFVMkSSco3EMntxhGtJQcxhPdqB/PcsgNy/wAQ==';
  const server = 'wss://webliveroom576874493-api.coolzcloud.com/ws';

  const zgRef = useRef(null);
  useEffect(()=>{
    const initializeZego = async ()=>{
        try {
            const zg =
        } catch (error) {
            
        }
    }
  },[])