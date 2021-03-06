import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo.svg'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const LogoWrap = styled.div`
  padding: 10px;
  filter: blur(2px);
  width: 144px;
  height: 111px;
  transition: filter 0.3s;

  svg {
    width: 100%;
    height: auto;
  }
`

export default function Home() {
  return (
    <>
      <Head>
        <title>catinside club</title>
        <meta name="description" content="stay tuned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <LogoWrap>
        <svg width="173" height="135" viewBox="0 0 173 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="logo" d="M170.326 34.0847C175.07 14.7105 176.949 -15.5941 145.345 19.3374C138.664 14.1321 130.504 12.4292 123.56 16.4455C90.1552 -20.7618 103 19.5003 101.5 22.5001C100 25.5 100.255 29.8716 100.321 33.129C100.377 35.8599 102.064 39.6382 101.193 40.0692C100.321 40.5001 95.0137 32.2898 86.9595 31.105C79.4759 30.0041 69.6307 29.3702 62.2692 31.105C55.6277 32.6701 41.7361 35.0421 36.1266 38.9125C29.9782 43.1547 25.0886 46.4309 18.4077 52.5034C11.5534 58.7336 -13.8348 95.7656 9.98409 118.811C33.803 141.856 111.65 137.23 131.692 123.928C131.692 123.928 145.611 112.576 151.735 103.108C158.596 92.5 158.705 84.6802 163.064 72.8332C164.89 67.8686 166.336 65.2164 167.711 60.1098C169.465 53.6001 170.326 43.049 170.326 43.049V34.0847Z" fill="white"/>
        </svg>
        </LogoWrap>
      </Wrapper>
    </>
  )
}
