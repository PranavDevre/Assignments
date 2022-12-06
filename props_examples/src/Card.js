import hcl from "./images/hcl.jpg";
function Card(props)
{
  return (
    <div className='cards'>
      <div className='card'>
        <img src={hcl} alt="hcl" className="card_img"/>
        <div className="card_info">
          <h2 className="card_titles">{props.name}</h2>
          <h2 className="card_exp">{props.exp}</h2>
          <h2 className="card_email">{props.email}</h2>
          <a href='#' target="_blank">
            <button className="btnclass">Details</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card