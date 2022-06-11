import React from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import { GetMenu } from "../API/MenuAPI";

const MenuDetail = () => {
    const { token } = useParams()
    const [ menu, setMenu ] = React.useState();
    const [ isMounted, setIsMounted ] = React.useState(false);
    
    React.useEffect(()  => {
        !isMounted &&
            GetMenu(token).then(json => {
                setMenu(json);
                setIsMounted(true);
            });
    });
    
    return (
        <Container>
            { isMounted &&
            <div>
                <Row>
                    <h1>{ menu.restaurantName }: { menu.title }</h1>
                    <p>{ menu.description }</p>
                </Row>
                <Row>
                    <ListGroup>
                    { 
                        menu.items.map(item => (
                            <ListGroupItem>
                                { item.name + "   " + item.description + "   " + item.price }
                            </ListGroupItem>
                        ))
                    }
                    </ListGroup>
                </Row>
            </div>
            }
        </Container>
        
    );
}

export default MenuDetail;
