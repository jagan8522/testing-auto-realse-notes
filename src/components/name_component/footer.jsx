import React from "react";
import styled from "styled-components"
const FooterContainer = styled.div`
  background-color: #222;
  color: green;
  text-align: center;
  padding: 15px 0;
  font-size: 14px;
  letter-spacing: 1px;
  `;

class Footer extends React.Component{
    render(){
        return <div>
            <h3><center>© 2023 Freeeze. All Rights Reserved.</center></h3>
        </div>
    }
}
export default Footer