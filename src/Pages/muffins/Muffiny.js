import recepiesMuffiny from '../../data/data_muffiny'

const Muffiny = () => {
  return <section>
      <h2>Muffiny</h2>

      {
        recepiesMuffiny.map((oneMuffin) => {
            const{id, title, image, description1, description2, description3, difficulty, time} = oneMuffin
            return <div key={id}>
              <h2>{title}</h2>
              <img src={`pictures/${image}`} alt="" />
              <p>{description1}</p>
              <p>{description2}</p>
              <p>{description3}</p>
              <p>{difficulty}</p>
              <p>{time}</p>
            </div>
        })
      }
  </section>
}

export default Muffiny