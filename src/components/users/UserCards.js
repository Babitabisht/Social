
import {Fragment} from 'react';
import UserCard from './UserCard';
import {useSelector} from 'react-redux';

const UserCards =(props)=>{
    let users = useSelector(state => state.users.users);
    return (
        <Fragment> 
            <div style={{'display': 'flex',"flex-wrap":'wrap' }}>
            {users.map(user=>{
                return <UserCard key={user}  user={user} />
            })}
            </div>
        </Fragment>
    )
}

export default UserCards;