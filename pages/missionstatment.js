import Layout from '../components/Layout'

const MissionStatment = () => {
    return (
        <Layout>
            <div className="mission-container">
                <h1>Mission Statment</h1>
                <p>It is the mission of EnviroTurf to accept the challenge of introducing state-of-the-art artificial athletic surfaces into a natural setting while positively impacting the biological or ecological balance of the natural environment.
                </p>
                <p>
                    Our promise to our customers is to provide a superior product that is durable, environmentally friendly and cost-efficient.  We take customer-satisfaction seriously and strive to ensure that our customer service is the best in the industry.
                </p>

                <p>
                    As you complete your due diligence, please examine the details of our products, methods, experience, and other relevant information.  We believe our job is to educate, as an educated buyer will become our client.  We have a deep commitment to providing young people with the safest, most realistic competition surface available. Environmental Turf Services is a proud member of the Synthetic Turf Council.
                </p>

                <p>
                    Our goal is simple: to solve as many of our client’s athletic field challenges as possible.  Environmental Turf Services adopted a client-centric approach to the way we do business, and it is paying dividends for our clients.
                </p>
            </div>
            <style jsx>
                {
                    `
                        .mission-container {

                            margin: 0 1rem;
                            text-align: left;

                        }

                        @media (min-width: 700px)
                        {
                            .mission-container {
                                margin: 0 5rem;
                            }
                        }

                        @media (min-width: 1000px)
                        {
                            .mission-container {
                                margin: 0 10rem;
                            }
                        }

                        @media (min-width: 1500px)
                        {
                            .mission-container {
                                margin: 0 20rem;
                            }
                        }
                    `
                }
            </style>
        </Layout>
    )
}

export default MissionStatment