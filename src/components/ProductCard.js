import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

class ProductCard extends Component {
    render() {
        const { item } = this.props;
        return (
            <div key={item.id}>
                <TextBox>
                    {item.title}
                </TextBox>
                <Image src={item.imageUrl} width='100' height='100' alt={item.title} />
                <Price price={item.price}/>
                <Button color='success'>
                    <span>В корзину</span>
                    <FontAwesomeIcon icon={ faCartPlus }  size="1x"/>
                </Button>
            </div>
        )
    }
}

export default ProductCard;