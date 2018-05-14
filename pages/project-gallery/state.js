import Layout from '../../components/Layout'
import UsState from '../../components/Map/UsState'

const State = (props) => (
    <div>
        <UsState usState={props.url.query.title}/>
    </div>
)

export default (props) => (
    <Layout>
        <State url={props.url}/>
    </Layout>

)