import PropTypes from "prop-types";
import _get from "lodash/get";

/**
  * array given as children:
  *    -> condition TRUE => FIRST element is rendered
  *    -> condition FALSE => SECOND element is rendered
  *
  * single node given as children:
  *    -> condition TRUE => node is rendered
  *    -> condition FALSE => null
 **/
const Conditional = ({ condition, children }) => Boolean(condition)
    ? _get(children, "[0]", children)
    : _get(children, "[1]", null);

Conditional.propTypes = {
    condition: PropTypes.any.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Conditional;
