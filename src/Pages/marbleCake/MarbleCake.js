import recepiesMarbleCake from '../../data/data_marbleCake'

const MarbleCake = () => {

  return <section>
    <h2>Bábovky</h2>

    {
        recepiesMarbleCake.map((oneRecept) => {
            const{id, image, title, description1, description2, description3, difficulty, time} = oneRecept
            
        return <div key={id}>
            <h2>{title}</h2>
            <img src={`pictures/${image}`} alt="" />
            <div dangerouslySetInnerHTML={{__html:description1}}/>
            <p>{description2}</p>
            <p>{description3}</p>
            <p>{difficulty}</p>
            <p>{time}</p>
        </div>
        })

    }

  </section>

}

export default MarbleCake