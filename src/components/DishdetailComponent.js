import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
 
    renderDish(dish) {
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
    renderComments(){
        const commentx = this.props.sDish.comments.map((comments) => {
            return(
                    <ul key={comments.id} className="list-unstyled">
                    
                    <li>{comments.comment}</li>
                    <li>--{comments.author} , {new Intl.DateTimeFormat('en-US',{year: 'numeric',month: 'short',day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</li>
                </ul>
                
            )
        });
        return (
            <div className="container">
                <div className="row">
                    {commentx}
                </div>
                
            </div>
        );
        
    }

    render(){
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.sDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                    {this.renderComments(this.props.comment)}
                </div>
            </div>
        )
        }
    
}
export default DishDetail;
