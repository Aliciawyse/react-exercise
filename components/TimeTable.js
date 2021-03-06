import React, { useState } from 'react';
import { Modal } from './Modal';

const TimeTable = () => {

    const [timeWindow, setTimeWindow] = useState(availabilityData)

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