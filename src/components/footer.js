import PropTypes from 'prop-types';

const Footer = props => {
    return (
        <footer className="py-5 bg-dark"> <div className="container"> <p className="m-0 text-center text-white">{props.footerText}</p> </div></footer>
    )
}

Footer.propTypes = {
    footerText: PropTypes.string
}

export default Footer;