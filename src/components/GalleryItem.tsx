import React from 'react'
import { useState } from 'react'

function GalleryItem(props: any) {
  let [view, setView] = useState(false)

  const simpleStyle = {
    'width': '50vw',
    'height': '20vh',
    'border': '1px solid black',
    'margin': '2px'
  }

  const detailStyle = {
    'width': '80vw',
    'height': '20vh',
    'border': '1px solid black',
    'margin': '2px',
    'backgroundImage': `url(${props.item.artworkUrl100})`,
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'color': 'yellow'
  }


  const simpleView = () => {
    return (
      <div style={simpleStyle}>
        <h3>{props.item.trackName}</h3>
        <h4>{props.item.collectionName}</h4>
      </div>
    )
  }

  const detailView = () => {
    return (
      <div style={detailStyle}>
        <h2>{props.item.trackName}</h2>
        <h3>{props.item.collectionName}</h3>
        <h4>{props.item.primaryGenreName}</h4>
        <h4>{props.item.releaseDate}</h4>
      </div>
    )
  }

  return (
    <div onClick={() => setView(!view)}>
      {/* This simple ternary shows the simple view when 'view' is false! */}
      {view ? detailView() : simpleView()}
    </div>
  )
}

export default GalleryItem
