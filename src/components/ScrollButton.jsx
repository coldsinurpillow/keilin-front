import React, {useState} from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import styled from "styled-components";

const Button = styled.div`
  position: fixed;
  left: 95%;
  bottom: 40px;
  height: 20px;
  padding: 15px;
  z-index: 99999;
  cursor: pointer;
  color: #82e0b4;
`

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return(
            <Button style={{display: visible ? 'inline' : 'none'}}>
                <ArrowUpwardIcon onClick={scrollToTop}
                                 />
            </Button>
    )
}

export default ScrollButton