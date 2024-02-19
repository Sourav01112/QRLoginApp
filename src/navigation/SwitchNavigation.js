import React, { useEffect, useState, } from 'react';
import LoginNavigation from './LoginNavigation';
import MainNavigation from './MainNavigation';
import { _getUserData } from './storage/Storage';
import AuthReducer from '../Store/Reducers/AuthReducer';
import ReduxThunk from 'redux-thunk'
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../Store/Actions/AuthAction';


function SwitchNavigation() {
  const dispatch = useDispatch()

  // const [userData, setUserData] = useState(null);
  const reduxUser = useSelector(state => state.AuthReducer)
  useEffect(() => {

    if (reduxUser.doc === null) {

      _getUserData().then((doc) => {
        console.log("doc", doc)
        if (doc !== undefined) {
          dispatch(setUserData(doc))
        }
      })
    }


  }, [reduxUser])

  return (
    <>
      {reduxUser.doc !== null ? <MainNavigation /> : <LoginNavigation />}
    </>
  );
}

export default SwitchNavigation;

