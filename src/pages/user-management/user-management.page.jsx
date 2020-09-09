import React from 'react';
import './user-management.style.scss';
import HeaderComponent from '../../components/header/header.component';
import UserRegistrationComponent from '../../components/user-registration/user-registration.component'


const UserManagePage = () => (
  <div className='dashboard'>
    <HeaderComponent>
      <UserRegistrationComponent />
    </HeaderComponent>
  </div>
)

export default UserManagePage;