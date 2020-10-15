import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
 
    function RenderDish({dish}) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    function RenderComments({comments}){
        const commentSec = comments.map((eachComment) => {
            return(
                    <ul key={eachComment.id} className="list-unstyled">
                    
                    <li>{eachComment.comment}</li>
                    <li>--{eachComment.author} , {new Intl.DateTimeFormat('en-US',{year: 'numeric',month: 'short',day: '2-digit'}).format(new Date(Date.parse(eachComment.date)))}</li>
                </ul>
                
            )
        });
        return (
            <div className="container">
                <div className="row">
                    {commentSec}
                </div>
                
            </div>
        );
        
    }

    const  DishDetail = (props) => {
        if (props.dish != null)
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                        <RenderComments comments = {props.dish.comments}/>
                    </div>
                </div>
            </div>
            
        )
        else return(
            <div></div>
        )
    }
    
        

export default DishDetail;
