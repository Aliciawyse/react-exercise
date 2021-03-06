
import React, { useState } from 'react';
import { Modal } from '../Modal';
import { availabilityRequest } from "./api";

const TimeTable = props => {

    // availabilityRequest().then(times => console.log(times))

    const availabilityData = [
        { id: 1, time: "9:00am - 10:00am", name: '', phone_number: '' },
        { id: 2, time: "10:00am - 11:00am", name: '', phone_number: '' },
        { id: 3, time: "11:00am - 12:00am", name: '', phone_number: '' },
        { id: 4, time: "12:00pm - 1:00pm", name: '', phone_number: '' },
        { id: 5, time: "1:00pm - 2:00pm", name: '', phone_number: '' },
        { id: 6, time: "2:00pm - 3:00pm", name: '', phone_number: '' },
        { id: 7, time: "3:00pm - 4:00pm", name: '', phone_number: '' },
        { id: 8, time: "4:00pm - 5:00pm", name: '', phone_number: '' }
    ]


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Phone number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log("props?", props)
                    }
                    {
                        availabilityData.length > 0 ? (
                            availabilityData.map(slot => (
                                <tr key={slot.id}>
                                    <td>{slot.time}</td>
                                    <td>{slot.name}</td>
                                    <td>{slot.phone_number}</td>
                                    <td>
                                        <Modal />
                                    </td>
                                </tr>
                            ))
                        ) : (
                                <tr>
                                    <td>No time slots.</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TimeTable;
// export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(TimeTable);