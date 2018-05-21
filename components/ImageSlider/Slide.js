const Slide = (props) => {
    let background = {
        backgroundImage: `url(/static/img/topBanner/briawood")`,
        backgroundSize: 'cover',
        backgroundPositions: 'center'
    }

    return <div className=" background slide">
        <style jsx>
            {
                `
                    .background {
                        background: url("/static/img/topBannerSlides/Briawwod.JPG");
                        background-size: cover,
                        background-position: center

                    }
                `
            }
        </style>
    </div>
};
export default Slide