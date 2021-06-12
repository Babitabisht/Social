import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../store/actions/users';
import CarouselItem from './CarouselItem';

const Users = () => {

    let users = useSelector(state => state.users.users);
    let dispatch = useDispatch();

    useEffect(() => {

        dispatch(getUsers());


        /*  return () => {
             cleanup
         } */
    },
     []
    );



    return (
        <Fragment>

        <CarouselItem users={users} />

        </Fragment>
    );
}


export default Users;