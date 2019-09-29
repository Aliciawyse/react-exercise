const TimeTable = props => (
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
              props.slots.length > 0 ? (
                  props.slots.map(slot => (
                      <tr key={slot.id}>
                      {console.log(slot)}
                        <td>{slot.time}</td>
                        <td>{slot.name}</td>
                        <td>{slot.phone_number}</td>
                        <td>
                            <button>Edit</button>
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
)

  export default TimeTable;