import React from 'react'

import CollectionItem from '../collection-item/CollectionItem'

import './preview-collection.styles.scss'

const PreviewCollection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(({ id, ...otherItemProps }) => (
                            <CollectionItem key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection