import { useReducer, useState } from 'react';

import AuthContext from './authContext';


const AuthProvider = (props) => {
    const [state, setstate] = useState("")

 
  const authobj = {
    activeUser: state,

    activeUserHandler: (user)=>{
        setstate(user)
    },
 
  };

  return (
    <AuthContext.Provider value={authobj}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
