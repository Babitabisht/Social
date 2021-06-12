import axios from 'axios';
import constants from '../../constants/constants';
import {userActions} from '../users';

export const getUsers = ()=>{

    return async(dispatch) =>{

    const fetchAllData =async ()=>{
      let response = await axios.get(`${constants.baseUrl}/users`);
      console.log(response.data)
      return response.data;
    }

     let users=   await fetchAllData();
        dispatch(userActions.loadUsers(users))

    }
}