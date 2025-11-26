import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <div>
    <h1>Profile</h1>
    <Link to="/profile/updateprofile"><button>Update Profile</button></Link>
    </div>
  )
}

export default Profile