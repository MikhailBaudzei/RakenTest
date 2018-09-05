import React, {Component} from "react";
import styled from "styled-components";

const SubMenuUl = styled.ul`
  background: #fff;
  border:1px solid #e4e4e4;
   border-radius:10px;
  li{
      display:block;
      &:first-child{
          a{
            border-radius: 10px 10px 0 0;
          }
      }
      &:last-child{
          &::before{
            display:none;
          }
          a{
            border-radius:0 0 10px 10px;
          }
      }
      a{
          padding:19px 50px 19px 24px;
          display:block;
          position:relative;
          font-size: 14px;
          margin-top:-1px;
          &:hover{
              box-shadow: inset 0 0.5px 1.5px 0 rgba(0, 0, 0, 0.2);
              background: #d8d8d8;
              display:block;
              &::before{
                  display:none;
                }
          }
          &::before{
              display:block;
              content:'';
              position:absolute;
              bottom:0;
              height:1px;
              left:25px;
              right:25px;
              background: #ececec;
          }
            
          span{
              background: #f26620;
              border-radius: 50%;
              font-size: 10px;
              line-height:20px;
              font-weight: 900;
              letter-spacing: -0.3px;
              text-align: center;
              color: #ffffff;
              display:block;
              min-width:20px;
              height:20px;
              position:absolute;
              top: 16px;
              right: 24px;
              pointer-events: none;
          }
      }
  }
`;


export default class ListCompaniesItemSubMenu extends Component {
    render() {
        const {element} = this.props;

        return (
            <SubMenuUl>
                <li>
                    <a href={element.user.myProfileLink}>
                        My Profile
                    </a>
                </li>
                <li>
                    <a href={element.user.myProject}>
                        My Projects
                        <span>{element.user.myProject.count}</span>
                    </a>
                </li>
                <li>
                    <a href={element.user.natifications.link}>
                        Notifications
                        <span>{element.user.natifications.count}</span>
                    </a>
                </li>
                <li>
                    <a href={element.user.tasks.link}>
                        Tasks
                        <span>{element.user.tasks.count}</span>
                    </a>
                </li>
                <li>
                    <a href="/help">
                        Help
                    </a>
                </li>
                <li>
                    <a href="/logout">
                        LogOut
                    </a>
                </li>
            </SubMenuUl>
        )
    }
}

