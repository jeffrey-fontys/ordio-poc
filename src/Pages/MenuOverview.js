import React from "react";
import { Container, Row } from "react-bootstrap";
import { GetMenu } from "../API/MenuAPI";
import MenuCard from "../Components/MenuCard";

const MenuOverview = () => {
    const [ isMounted, setIsMounted ] = React.useState(false);
    const [ menus, setMenus ] = React.useState([]);
    const tempMenus = [];

    const menuTokens = [
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJNZW51SUQiOjE1LCJPd25lciI6ImZkMmIxYmNkMTBiNzdjZjAxZmYwZjk1NjQ5MmM1M2UwN2JmOGEyMjUwZTA1MWRlODdiN2FmNjRkNWVmMzNiM2MifQ._cilftkNsW4xxIdaJGY80Zw_0f67i3_rDgKcsJ2gOGg",
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJNZW51SUQiOjIwLCJPd25lciI6ImZkMmIxYmNkMTBiNzdjZjAxZmYwZjk1NjQ5MmM1M2UwN2JmOGEyMjUwZTA1MWRlODdiN2FmNjRkNWVmMzNiM2MifQ.cNMdvcwa4ICspzjxW2yC-LFJb6iaE-IAWeqbc_9AYcA"
    ];

    React.useEffect(() => {
        !isMounted && 
            menuTokens.forEach((token, index) => {
                GetMenu(token).then(json => {
                    json.token = token;
                    tempMenus.push(json);
                    if (tempMenus.length === menuTokens.length) {
                        setMenus(tempMenus);
                        setIsMounted(true);
                    }
                });
            });
    });

    return (
        <Container className="mt-4">
            <Row>
                <h1 style={{textAlign:"center"}}>Menu Overview</h1>
            </Row>
            
            <Row className="row-cols-1 row-cols-md-3 g-4 mb-3">
                { isMounted && 
                    menus.map(menuItem => (
                        <MenuCard
                            key={ menuItem.title }
                            menu={ menuItem }
                            href={"menudetail/" + menuItem.token } />
                    ))
                }
            </Row>
        </Container>
    );
}

export default MenuOverview;
