import React from 'react'
import styled from 'styled-components'


const Btn = styled.button`
display: inline-block;
outline: none;
border: none;
color: #fff;
background-color: #5e035a;
padding: 0.8rem 2.5rem;
border-radius: 5px;
transition: all .2s ease;
position: relative;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50% ) scale(0);
    border: 2px solid #5e035a;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    transition: all .2s eas;
}
&:hover::after{
    transform: translate(-50%, -50% ) scale(1);
    padding: .3rem;
}
`
const Button2 = ({link, text}) => {
  return (
    <Btn>
        <a href={ link }>
            {text}
        </a>
    </Btn>
  )
}

export default Button2