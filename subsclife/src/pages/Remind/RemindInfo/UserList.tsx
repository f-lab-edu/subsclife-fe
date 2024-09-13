import React from "react";
import styled from "styled-components";
import UserIcon from "assets/user-icon.svg?url"
interface UserListProps {
  userNames: string[];
}

const UserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px 5px 25px;
  font-size: 18px;
  text-align: center;
  width: calc(50% - 25px);
  box-sizing: border-box; 
`;

const Icon = styled.img`
  margin-right: 10px;
  width: 34px;
  height: 34px;
`;

const UserList: React.FC<UserListProps> = ({ userNames }) => {
  return (
    <UserContainer>
      {userNames.map((userName, index) => (
        <UserItem key={index}>
          <Icon src={UserIcon} alt="icon" />
          {userName}
        </UserItem>
      ))}
    </UserContainer>
  );
};

export default UserList;
