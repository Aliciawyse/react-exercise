import Layout from '../components/MyLayout';
import TimeTable from '../components/TimeTable';
import React, {useState} from 'react';

const Index = () => {

const availabilityData =[
    { id: 1, time: "9:00 am", name: 'Tania', phone_number: '341 659 9732' },
    { id: 2, time: "10:00 am", name: 'Craig', phone_number: '730 427 5511' },
    { id: 3, time: "11:00 am", name: 'Ben', phone_number: '506 869 6237' },
    { id: 4, time: "12:00 pm", name: 'Bernete', phone_number: '742 303 1282' },
    { id: 5, time: "1:00 pm", name: 'Mallory', phone_number: '407 363 6700' },
    { id: 6, time: "2:00 pm", name: 'Rosabelle', phone_number: '696 219 3427' },
    { id: 7, time: "3:00 pm", name: 'Celina', phone_number: '162 705 8012' },
    { id: 8, time: "4:00 pm", name: 'Dulciana', phone_number: '824 849 8258' },
    { id: 9, time: "5:00 pm", name: 'Emmalee', phone_number: '274 822 0717' },
]

const [slots, setSlots] = useState(availabilityData)


return (
    <div>
        <Layout>
        <h2>Choose a time slot:</h2>
        <div>
          <TimeTable slots={slots} />
        </div>
        </Layout>
    </div>
  );
}

export default Index;