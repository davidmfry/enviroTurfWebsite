import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

const Arrow = (props) =>
{
    if (props.direction === "left")
    {
        return (
            <div onClick={props.clickSlide} className="nextArrow">
                <FaAngleLeft/>
            </div>
        )
    }

    if (props.direction === 'right')
    {
        return (
            <div onClick={props.clickSlide} className="nextArrow">
                <FaAngleRight />
            </div>
        )
    }

};

export default Arrow