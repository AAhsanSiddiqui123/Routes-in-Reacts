import React from 'react';

const AuthContext = React.createContext({
    actionUser: "",
    activeUserHandler: ()=>{}

});

export default AuthContext;