import React from "react";
import { Container, Row } from "react-bootstrap";
import { GetMenu } from "../API/MenuAPI";
import MenuCard from "../Components/MenuCard";

const MenuOverview = () => {
    const [ isMounted, setIsMounted ] = React.useState(false);

    const menus = [];
    const menuTokens = [
        "sjhsudugdudhu"
    ];

    React.useEffect(() => {
        !isMounted &&
            menuTokens.forEach((token, index) => {
                GetMenu(token).then(json => {
                    menus.push(json);
                    index === menuTokens.length && setIsMounted(true);
                });
            });
    });

    return (
        <Container className="mt-4">
            <Row>
                <h1 style={{"text-align":"center"}}>Menu Overview</h1>
            </Row>
            
            <Row className="row-cols-1 row-cols-md-3 g-4 mb-3">
                { isMounted && 
                    menus.map((menuItem, index) => (
                        <MenuCard
                            key={ menuItem.title }
                            menu={ menuItem }
                            href={"menudetail/" + menuTokens[index] } />
                    ))
                }
            </Row>
        </Container>
    );
}

export default MenuOverview;
