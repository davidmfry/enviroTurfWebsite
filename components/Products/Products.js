import './products.css';
import ProductCard from "../ProductCard/ProductCard";

const Products = (props) => (
    <div className="product-container">
        <h1>Products</h1>
        <div className="product-wrapper ">
            <div className="product-grid">
                <ProductCard className="product3"  color={"etblue"} title={'EnviroTurfSF'} description={'Specifically' +
                ' designed to withstand' +
                ' intense' +
                ' use while' +
                ' retaining the softness and playing characteristics that today’s student athelete desires. The natural looking fiber is recommended for installations experiencing more than thirty hours of use per week. Tough is the best word that describes EnviroTurfSF. This product is composed of from 40-46oz of polyethylene fiber with a three ply backing. The maximum fiber coverage provides a beautiful appearance while reducing rubber “fly up.”'}/>

                <div className="product-image pi2">
                    <img src="/static/img/EnviroTurfSF.png" alt="EnviroTurm SF Product"/>
                </div>

            </div>

            <div className="product-grid">
                <ProductCard className="product2"  color={"etgreen"} title={'EnviroTurfM'} description={'sets the' +
                ' standard for resilience and' +
                ' performance in an' +
                ' extruded fiber. It provides the look and feel of natural grass and reduces glare due to the dispersement of light reflection while providing superior ball roll after extensive use. We use 46oz of fiber with at least 28oz of polyurethane over a three ply backing. The extruded fiber offers the ultimate combination in softness and durability, giving it an unsurpassed, grass-like quality.'}/>

                <div className="product-image pi1">
                    <img src="/static/img/EnviroTurfM.png" alt="EnviroTurm M Product"/>
                </div>
            </div>

            <div className="product-grid">
                <ProductCard className="product1" color={"etorange"} title={'EnviroTurfDF'} description={'is a' +
                ' strategically' +
                ' blended' +
                ' combination' +
                ' of tough EnvirotTurfM and soft EnviroTurfSF. Superior appearance, feel, playability, consistency, and' +
                ' longevity come together in our EnviroTurfDF. Unique to EnviroTurf, EnviroTurfDF combines the best features of EnviroTurfM and EnviroTurfSF, offering a field that is lush, beautiful, and durable.'}/>

                <div></div>
            </div>

        </div>

    </div>
)

export default Products