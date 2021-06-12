import { Card } from 'react-bootstrap';
import { Fragment } from 'react';

const UserCard = (props) => {
    return (

        <Fragment>
            <Card style={{ width: '38rem' }} className="text-center">
                <Card.Body>
                    <Card.Title> {props.user.id}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                       {props.user.username}
    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Fragment>
    );
}


export default UserCard;