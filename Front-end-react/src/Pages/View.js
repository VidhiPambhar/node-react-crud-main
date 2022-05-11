import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import { Button, Card } from 'react-bootstrap';
import { useParams , Link} from 'react-router-dom';

function View() {
  const [user,setUser]= useState(null)
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    const res = await axios.get(`http://localhost:8090/users/${id}`);
    if (res.status === 200) {
    setUser(res.data);
    }
  };
  
  return (
  <div >
  <Card style={{ width: '18rem' , marginLeft:"40%",marginTop:"4rem"}}>
  
  <Card.Body>
    <h3 style={{color:"#917c46"}}>User details</h3>
    {/* <Card.Title>ID:</Card.Title>

    <Card.Text>
      {id}
    </Card.Text> */}
    <Card.Title>Name:</Card.Title>

<Card.Text>
  {user && user.name}
</Card.Text>
<Card.Title>Email:</Card.Title>

<Card.Text>
  {user &&user.email}
</Card.Text>
<Card.Title>Contact no:</Card.Title>

<Card.Text>
  {user &&user.phone}
</Card.Text>
    <Link to="/">
    <Button variant="primary">Go Back</Button>
    </Link>
  </Card.Body>
</Card>
  </div>
  )
}

export default View