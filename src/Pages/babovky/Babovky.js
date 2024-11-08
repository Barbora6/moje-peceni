import recepiesBabovky from '../../data/data_babovky'

const Babovky = () => {

  return <section>
    <h2>Bábovky</h2>

    {
        recepiesBabovky.map((oneRecept) => {
            const{id, image, title, description1, description2, description3, difficulty, time} = oneRecept
            
        return <div key={id}>
            <h2>{title}</h2>
            <img src={image} alt="" />
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

export default Babovky