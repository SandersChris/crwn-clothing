import React from 'react'

import SHOP_DATA from './shopData'

import PreviewCollection from '../../components/preview-collection/PreviewCollection'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return <PreviewCollection key={id} {...otherCollectionProps} />
                })
                }   
            </div>
        )
    }
}

export default ShopPage