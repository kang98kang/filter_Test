import React from 'react'
import './ResultComponent.css'

const ResultComponent = ({ results }) => {
    return (
        <div className='results-container'>
            {results.map((result, index) => (
             <div key={index} className='result-card'>
               <img src={result.imageUrl} alt='회식 이미지'/>
               <div>{result.name}</div>
               <div>{result.location}</div>
               <div>{`₩${result.price}`}</div>
             </div>
            )
            )}
        </div>
    )
}

export default ResultComponent