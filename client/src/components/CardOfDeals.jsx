import ProductBanner from "./ProductBanner";
import Countdown from 'react-countdown';

const CardOfDeals = () => {

    const cardOuter = {
        backgroundColor: "#fff",
        border: "8px solid #f2f2f2",
        padding: "10px 10px",
        paddingBottom: "20px",

    }
    const heading = {
        fontSize: "22px",
        fontWeight: "500"
    }
    const cardHeading = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "45px"

    }
    const viewBtn = {
        marginLeft: "auto",
        background: "#2874f0",
        color: "#fff",
        boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
        border: "none",
        padding: "10px 12px"
    }
    const renderer = ({ hours, minutes, seconds }) => {

        return <span style={{ color: "gray" }}>{hours}:{minutes}:{seconds} Left</span>;

    };

    return (
        <div style={cardOuter}>
            <div style={cardHeading}>
                <h4 style={heading}>Deals of the Day</h4>
                <img style={{ marginLeft: "20px", marginRight: "18px" }} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"></img>
                <Countdown date={Date.now() + 10000 * 6 * 60 * 14} renderer={renderer} />
                <button style={viewBtn}>VIEW ALL</button>
            </div>

            <hr></hr>
            <ProductBanner />
        </div>

    )
}
export default CardOfDeals;