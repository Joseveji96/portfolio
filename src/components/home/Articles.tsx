import React from 'react'
import BtnTitle from '../common/BtnTitle'

const Articles = () => {
  return (
    <section>
      <div>
        <h1>Written <span>Articles</span></h1>
      </div>
      <div>
        {/* Mide todo el ancho del componente */}
        <div>
          {/* Imagen Logo */}
          <BtnTitle title='VISION ARTIFICIAL'/>
        </div>

        {/* Contenido */}
        <div>
          {/* Title */}
          <div>
            <p>Is it possible to 
              create computer vision with 
              more than <span> 70% accuracy </span>
              with datasets 
              <span>less than 100 images</span>?</p>
          </div>
      
          {/* campos */}
          <div>
            <p>Field detection</p>
            <p>Auto Labeling</p>
            <p>Small Dataset</p>
          </div>
        </div>

        {/* Info -> Mide todo el ancho del componente */}
        <div>
          <h2>Quick Answer, Yes.</h2>
          <a href="#">Learn More</a>
        </div>

      </div>
    </section>
  )
}

export default Articles