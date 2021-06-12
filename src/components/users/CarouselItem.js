import { Carousel } from 'react-bootstrap';
import profileLogo from '../../assets/images/pro.png'




const CarouselItem = (props) => {
    return (
        <Carousel>
            {props.users.map(user => {
                return <Carousel.Item key={user.id} className="text-center bg-dark">
                    <img

                        className="text-center"
                        width="20%" height="20%"
                        src={profileLogo}
                        alt={user.username}
                    />
                    <Carousel.Caption className="text-wa">

                        <h3 class>{user.username}</h3>
                        <p>{user.email} | {user.phone} | {user.website}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            })}
        </Carousel>
    )
}

export default CarouselItem;