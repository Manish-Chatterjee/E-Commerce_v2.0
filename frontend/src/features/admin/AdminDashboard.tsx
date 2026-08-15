import React from 'react'
import { useAuth } from '../auth/hooks/useAuth';

const AdminDashboard = () => {

  const {user} = useAuth();

  return (
    <div>
      Hey {user?.username} , you are an admin.
    </div>
  )
}

export default AdminDashboard
