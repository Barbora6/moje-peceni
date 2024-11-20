
const SlideItem = ({id, image, title, paragraph}) => {
  return <div className='slides'>
  <div id={id} className="slide slide-1">
      <div className="slide-img-wrapper">
      <img 
                src={`/pictures_slides/${image}`} 
                alt='' 
                loading='lazy' />
      </div>
      <div className="banner">
          <h1 className='main-heading'>{title}</h1>
          <p className='food-desc'>{paragraph}</p>
      </div>
  </div>
  </div>
}

export default SlideItem
