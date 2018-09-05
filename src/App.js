import React, {Component} from 'react';
import ListCompanies from './components/listCompanies';
import styled, { injectGlobal } from "styled-components";
import * as globalCss from './GlobalStyle'
import { companyList } from './store/index'
import ListCompaniesItem from "./components/listCompaniesItem";

const Wrapper = styled.div`
  max-width: 1347px;
  margin:0 auto;
  font-family: 'Roboto', sans-serif;
  color: #4a4a4a;
  
  a {
      color: #4a4a4a;
    }
`;

class App extends Component {
    render() {
        return (
            <Wrapper>
                <ListCompanies store={companyList} />
            </Wrapper>
        );
    }
}


export default App;
