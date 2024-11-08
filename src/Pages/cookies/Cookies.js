import recepiesCookies from '../../data/data_cookies'

const Cookies = () => {
  return <section>
     <h2>Vánoční cukroví</h2>
    
     {
           recepiesCookies.map((oneCook) => {
            const{id, title, image, description1, description2, difficulty, time } = oneCook
    
            return <div key={id}>
              <h2>{title}</h2>
              <img src={image} alt="" />
              <p>{description1}</p>
              <p>{description2}</p>
              <p>{difficulty}</p>
              <p>{time}</p>
            </div>
          })
     }
     
    
  </section>
}

export default Cookies