import { Card, Col } from "react-bootstrap";
import React from "react";

function MenuCard(props) {

    return (
        <Col>
            <Card>
                <img className="card-img-top" src="https://picsum.photos/300/150" alt="Menu cap" />
                <div className="card-body">
                    <h5 className="card-title">{ props.menu.title }</h5>
                    <p className="card-text">{ props.menu.description }</p>
                    <a href={ props.href } className="btn btn-primary">Details</a>
                </div>
            </Card>
        </Col>
    );
}

export default MenuCard;
