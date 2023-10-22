import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Box,styled,AppBar,Toolbar,Typography,Button} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Logo from "../../assets/logo.png";

import { NavLink } from 'react-router-dom';

const HeaderBox=styled(Toolbar)`
    display:flex;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    background-color:#DEF257;
    height : 14vh;
    background-image: linear-gradient(to top, rgba(238,194,174,0) 0%, rgba(230,99,103,0.3) 100%);
`

const LogoBar=styled(Box)`
    display:flex;
    align-items:center;
    gap : 20px;
    margin-left : 38px;


    & > img {
    cursor : pointer;  
    background : none;
    width : 5vw;
    }
`

const HeadingBox = styled(Box)`
    display: flex;
    flex-direction: column;

    @keyframes example {
    0%   {color: #f32170;}
    25%  {color: #ff6b08;}
    50%  {color: #cf23cf;}
    100% {color: #F88379;}
  }

    & > p:nth-child(1) {
    font-family: "Trebuchet MS";
    font-size: 26px;
    color : rgb(211,47,47);
    font-weight: bolder;
    animation-name: example;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    }

    & > p:nth-child(2) {
    font-family: "Trebuchet MS";
    font-size: 12px;
    margin-left: 3rem;
    margin-bottom : 3px;
    color : rgb(211,47,47);
    font-weight: bolder;
    animation-name: example;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    }
  `

const NavItems = styled(Box)`
display : flex;
gap: 2rem;

& > ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: black;
    font-weight: bold;
    font-size: 16px;
    list-style-type: none;
    
    & a {
      text-decoration : none;
      color : black;
    }

    & > li > a:hover{
    color : rgba(211,47,47,0.5);
    cursor: pointer;
    }
}
`
const MainBox = styled(Box)`
display : flex;
align-items:center;
gap :2px;

: hover {
  color : grey;
}
`

const CartBox = styled(Box)`
position : relative;
display : flex;
align-items:  center;
gap : 3px;

& > svg {
  margin-bottom : 3px;
  font-size: 25px ;
}
`

const CartItemBox = styled(Box)`
position: absolute;
display : flex;
align-items : center;
justify-content : center;
background-color:#56C4E5;
width : 1.5vw;
border-radius : 50%;
top: 0;
left: 15px;
`

const Item = styled(Box)`
color : white;
font-family: "Trebuchet MS";
`

const ButtonBox = styled(Button)`
padding: 3px;
width: 7vw ;
align-items: center;
cursor: pointer;
font-weight: bolder;
border : 1.5px solid rgb(211,47,47);
text-transform : capitalize;

:hover {
  background : rgb(211,47,47);
  color : white;
  box-shadow : 3px 3px 6px rgb(211,47,47);
}
`

const LogOutUserBox = styled(Box)`
display : flex;
align-items : center;
gap : 25px;
margin-right : 3rem;
`

const LoggedOutBox = styled(Box)`
display : flex;
align-items : center;
color : rgb(211,47,47);
gap : 3px;
font-weight : bolder;
`





const Header = () => {

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? 'grey' : '',
      fontWeight: isActive ? 'bolder' : '',
      textDecoration: isActive ? 'underline' : 'none',
    }
  }



  return (
    <HeaderBox>


      <LogoBar>
        <img src={Logo} alt='app_logo' />
        <HeadingBox>
          <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '26px' } }}>
            FOOD NATION
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '10px', md: '12px' }, ml: { md: '3rem' }, mb: '3px' }}>
            I am Loving it
          </Typography>
        </HeadingBox>
      </LogoBar>

      <NavItems>
        <ul>
          <li>
            <NavLink style={navLinkStyle} to="/home">
                HOME
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/about">
                ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/cart">
              <MainBox>
                <Box>CART</Box>
                  <CartBox>
                    <ShoppingBasketIcon/>
                    <CartItemBox>
                      <Item>
                        3
                      </Item> 
                    </CartItemBox> 
                  </CartBox>
              </MainBox>
            </NavLink>
          </li>
        </ul>
      </NavItems>

      <LogOutUserBox>


        <LoggedOutBox>
          <PersonIcon style={{fontSize:'3rem'}}/>
        </LoggedOutBox>


        <ButtonBox>
            LOGOUT
              <PowerSettingsNewIcon
                sx={{
                  ml: "4px",
                  fontSize: '18px',
                }}
                />
        </ButtonBox>

      </LogOutUserBox>
    </HeaderBox>
  )
}

export default Header