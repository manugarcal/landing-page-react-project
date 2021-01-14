import propTypes from 'prop-types';

function Card(props) {
    return (
        <div className="col-lg-3 col-md-6 mb-4 mt-5">
            <div className="card h-100">
                <img className="card-img-top" src={props.imagen} alt=""></img>
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.text}</p>
                    </div>
                    <div className="card-footer">
                        <a target="_blank" href={props.link} className="btn btn-primary">{props.boton}</a>
                    </div>
        </div>
            </div>
    )
    
}

Card.propTypes = {
    imagen: propTypes.string, 
    title: propTypes.string,
    text: propTypes.string,
    boton: propTypes.string,
    link: propTypes.string
}

export default Card;