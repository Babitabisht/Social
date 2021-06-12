import { Card } from 'react-bootstrap';
import { Fragment } from 'react';
import profileLogo from '../../assets/images/pro.png'

const UserCard = (props) => {
    return (

        <Fragment >
            <Card style={{ width: '38rem' }} className="text-center ">
                <Card.Body>
                <img
                className="text-center"
                width="20%" height="45%"
                src={profileLogo}
                alt={props.user.username}
                />
                    <Card.Title> {props.user.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">   {props.user.email} | {props.user.phone} | @{props.user.username}      </Card.Subtitle>
                    <Card.Text>
                       {props.user.username}
    </Card.Text>
                    <Card.Link href="#">Profile</Card.Link>
                    <Card.Link href="#">Albums</Card.Link>
                    <Card.Link href="#">Accomplishments</Card.Link>

                </Card.Body>
            </Card>
        </Fragment>
    );
}


export default UserCard;