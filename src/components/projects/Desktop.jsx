import React from 'react'
import ReactFitText from "react-fittext"
import TrackVisibility from "react-on-screen"
import Typist from "react-typist";

import { 
  DesktopContainer, 
  DesktopBezel, 
  AbsoluteInnerWrapper, 
  DesktopCamera, 
  DesktopScreen, 
  BrowserBar, 
  BrowserButton, 
  RelativeInnerWrapper, 
  AddressBar, 
  Address, 
  DestopButton, 
  DesktopButtonDetail, 
  BrowserWindow } from './DeviceStyles'



export default function Desktop({
                 className,
                 address,
                 children,
                 onTypingDone
               }) {
                 const TrackedAddress = ({ isVisible }) => {
                   return (
                     <ReactFitText compressor={3.5}>
                       <Address
                         href={address}
                         target="_blank"
                         rel="noopener noreferrer"
                       >
                         {isVisible && (
                           <Typist cursor={{hideWhenDone: true}} onTypingDone={onTypingDone}>
                             {address}
                           </Typist>
                         )}
                       </Address>
                     </ReactFitText>
                   );
                 };

                 return (
                   <div className={className}>
                     <DesktopContainer>
                       <AbsoluteInnerWrapper>
                         <DesktopBezel>
                           <DesktopCamera />
                           <DesktopScreen>
                             <BrowserBar>
                               <BrowserButton color="red" left="2%" />
                               <BrowserButton color="yellow" left="6%" />
                               <BrowserButton color="green" left="10%" />
                               <AddressBar>
                                 <RelativeInnerWrapper>
                                   <TrackVisibility once>
                                     <TrackedAddress />
                                   </TrackVisibility>
                                 </RelativeInnerWrapper>
                               </AddressBar>
                             </BrowserBar>
                             <BrowserWindow>{children}</BrowserWindow>
                           </DesktopScreen>
                           <DestopButton>
                             <AbsoluteInnerWrapper>
                               <DesktopButtonDetail />
                             </AbsoluteInnerWrapper>
                           </DestopButton>
                         </DesktopBezel>
                       </AbsoluteInnerWrapper>
                     </DesktopContainer>
                   </div>
                 );
               }
