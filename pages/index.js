import Layout from '../components/MyLayout';
import TimeTable from '../components/TimeTable';

const Index = () => {

    return (
        <div>
            <div id="modal"></div>
            <Layout>
                <h2>Choose a time slot:</h2>
                <div>
                    <TimeTable />
                </div>
            </Layout>
        </div>
    );
}

export default Index;