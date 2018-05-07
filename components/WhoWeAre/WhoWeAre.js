import './whoweare.css';

const WhoWeAre = (props) => (
    <section className='who-we-are-container grid'>
        <div className="wrapper">
            <div className="who-we-are-title">
                <h1 className="who-we-are-title1">Who <br/> we are</h1>
                {/*<h1 className="who-we-are-title2">we are</h1>*/}
            </div>
            <div className="who-we-are-info">
                <p>Enviroturf was established in
                    2006 with a goal of providing
                    superior products that are
                    durable, cost efficient and
                    aesthetically pleasing while
                    maintaining a commitment to
                    supplying the safest surface
                    possible.
                </p>
            </div>
        </div>


    </section>
)

export default  WhoWeAre