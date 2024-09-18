import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
	return isMobile ? <div id="mobile">{children}</div> : null;
};

const Tablet = ({ children }) => {
	const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" });
	return isTablet ? <div id="tablet">{children}</div> : null;
};

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
	return isDesktop ? <div id="desktop">{children}</div> : null;
};

Mobile.propTypes = {
	children: PropTypes.node.isRequired,
};

Tablet.propTypes = {
	children: PropTypes.node.isRequired,
};

Desktop.propTypes = {
	children: PropTypes.node.isRequired,
};

export { Mobile, Tablet, Desktop };
