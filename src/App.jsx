import { useEffect, useState } from "react"
import axios from 'axios'
export default function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);
  const [Edd, setEdd] = useState(null)


  const handleSUbmit = async (e) => {
    const res = await axios.post('http://localhost:3000/postData', { fname, lname, age })
    if (Edd !== null) {
      const upadetData = [...data]
      upadetData[Edd] = { fname, lname, age }
      setData(upadetData);
      setEdd(null)
    } else {
      setData([...data, { fname, lname, age }])

    }
    setFname('')
    setLname('')
    setAge('')

  }

  const handleDelete = (index) => {
    const upadetData = [...data]
    upadetData.splice(index, 1)
    setData(upadetData)

  }

  const handleEdits = (index) => {
    setFname(data[index].fname)
    setLname(data[index].lname)
    setAge(data[index].age)
    setEdd(index)
  }
  const fetchData = async () => {
    const res = await axios.get('http://localhost:3000/j')
    setData(res?.data?.data)
  }
  useEffect(() => {
    fetchData()
  },[])

  return (
    <h1 className="text-3md font-bold ">
      <label htmlFor="FristName">Frist Name:</label>
      <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="Enter Your First Name" />

      <label htmlFor="LastName">Last Name:</label>
      <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Enter Your Last Name" />

      <label htmlFor="age">Enter Your Age:</label>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Your Age" />

      <button onClick={handleSUbmit} className="bg-black p-2 text-white rounded-lg m-2"  >{Edd === null ? 'Submit' : 'Update'}</button>


      <table>

        <tbody>
          {data.length > 0 ? (
            data.map((data, index) => (
              <tr key={index}>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
                <td>{data.age}</td>
                <td>
                  <button onClick={() => handleEdits(index)} className="bg-green-200 p-2 text-white rounded-lg m-2">UpdateData</button>
                  <button onClick={() => handleDelete(index)} className="bg-red-200 p-2 text-white rounded-lg m-2">DeleteData</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </h1>
  )
}
