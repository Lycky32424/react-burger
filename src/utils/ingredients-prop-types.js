import PropTypes from "prop-types";

const IngredientPropTypes = PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    type: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
    __v: PropTypes.number,
    _id: PropTypes.string.isRequired,
});

export default IngredientPropTypes;