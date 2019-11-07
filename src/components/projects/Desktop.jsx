import React from 'react'
import { DesktopContainer, DesktopBezel, AbsoluteInnerWrapper, DesktopCamera, DesktopScreen, BrowserBar, BrowserButton, RelativeInnerWrapper, AddressBar, Address, DestopButton, DesktopButtonDetail, BrowserWindow } from './DeviceStyles'

export default function Desktop({className, address, children }) {
  return (
      <DesktopContainer className={className}>
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
                    <Address href="#" >
                      {address}
                    </Address>
                  </RelativeInnerWrapper>
                </AddressBar>
              </BrowserBar>
              <BrowserWindow>
                {children}
              </BrowserWindow>
            </DesktopScreen>
            <DestopButton>
              <AbsoluteInnerWrapper>
                <DesktopButtonDetail />
              </AbsoluteInnerWrapper>
            </DestopButton>
          </DesktopBezel>
        </AbsoluteInnerWrapper>
      </DesktopContainer>
  )
}
