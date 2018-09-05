import React, { Component } from "react";
import {
    ListCompaniesItemSubMenu
} from './index'
import styled from 'styled-components';

const Item = styled.div`
  background-color: #f3f3f3;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
  margin-bottom:21px;
  min-height:76px;
  box-sizing:border-box;
  align-items: center;
  display: flex;
  @media (max-width: 800px) {
    display:block;
    position:relative;
  }
`;

const ItemCompanyName = styled.div`
  font-size: 16px;
  font-weight: 300;
  float:left;
  text-transform: uppercase;
  padding-left:24px;
  letter-spacing: normal;
  @media (max-width: 800px) {
    padding:20px 0 20px 24px;
    box-sizing:border-box;
    float:left;
    margin-right:-150px;
    width:100%;
    padding-right:150px;
    text-align:left;
  }
`;

const ItemLinks = styled.div`
    margin-left: auto;
    margin-right: 49px;
    order: 1;
    
    & > a {
      font-size: 14px;
      letter-spacing: normal;
      text-decoration:none;
      margin-left:50px;
      
      &:hover{
          color:#f26620;
        }
    }
    
    @media (max-width: 800px) {
        padding:20px 150px 20px 24px;
        box-sizing:border-box;
        margin:0;
        & > a {
          margin: 0 20px 10px 0;
          display: inline-block;
        }
      }
`;

const ItemUserHidden = styled.div`
  display:none;
  position:absolute;
  top: 50%;
  margin-top:10px;
  right: 8px;
  z-index: 10;
  min-width:188px;
  padding:4px 0 0 0;
  padding-top:30px;
  &::before{
      position:absolute;
      top: 16px;
      right: 28px;
      width: 27px;
      height:27px;
      border-top:1px solid #e4e4e4;
      border-right:1px solid #e4e4e4;
      background: #fff;
      content:'';
      display:block;
      transform: rotate(-45deg);
    }
`;

const ItemUser = styled.div`
  float:right;
  padding:0 25px;
  border-left:1px solid #e4e4e4;
  margin-left: 0;
  order: 1;
  height:100%;
  align-items: center;
  display:flex;
  cursor: pointer;
  position:relative;
  li{
    list-style: none;
    text-transform: uppercase;
     a{
        text-decoration: none;
        position: relative;
    }
  }
  &:hover ${ItemUserHidden}{
      display: block;
  } 
   @media (max-width: 800px) {
      position:absolute;
      top:0;
      right:0;
   }
  
`;

const ItemUserAvatar = styled.div`
  border-radius:50%;
  overflow:hidden;
  width:50px;
  height:50px;
  background-color: #D8D8D8;
  text-align:center;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
  img{
      width:36px;
      height:34px;
      margin-top:10px;
  }

`;


export default class ListCompaniesItem extends Component {
    render() {
        const { element } = this.props;

        return (
            <Item>
                <ItemCompanyName>
                    {element.companyName}
                </ItemCompanyName>
                <ItemLinks>
                    <a href={element.dashBoardLink}>DASHBOARD</a>
                    <a href={element.projectsLink}>PROJECTS</a>
                    <a href={element.teamLink}>TEAM</a>
                    <a href={element.companyLink}>COMPANY</a>
                </ItemLinks>
                <ItemUser>
                    <ItemUserAvatar>
                        <img src={element.user.avatar} alt=""/>
                    </ItemUserAvatar>

                    <ItemUserHidden>
                        <ListCompaniesItemSubMenu element={element} />
                    </ItemUserHidden>
                </ItemUser>

            </Item>
        )
    }
}

