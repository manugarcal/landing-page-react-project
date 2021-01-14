import PropTypes from 'prop-types';

const Jumbotron = props => { 
    return (
    <div className="container jumbotron mt-4">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.text}</p>
        <hr className="my-4" />
            <a className="btn btn-primary btn-lg" href={props.buttonUrl} role="button">{props.buttonLabel}</a>
    </div>);

}

Jumbotron.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string
}

export default Jumbotron;