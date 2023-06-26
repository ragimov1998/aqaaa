// import { click } from '@testing-library/user-event/dist/click';
import {data} from'./page components/slide'
function Slide() {

  return (
    

        <section className="slider">
          {data.map((item,id)=>(
          <div key={id} className="contain">
            <div className="left">
              <h1>{item.title}</h1>
              <p>{item.about}</p>
              <button className="daxilol">
                <i className={item.icon}></i>{item.btn}
              </button>
            </div>

            <div className="right">
              <img
                src={item.img}
                alt="img"
              />
            </div>

            <button className="btn btn-next">
              <i className={item.sagicon}></i>
            </button>
            <button className="btn btn-prev">
              <i className={item.solicon}></i>
            </button>
          </div>
          

    )
      )}
          
          
        </section>
        
  )
}

export default Slide;
