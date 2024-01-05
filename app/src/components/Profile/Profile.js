import { useEffect, useState } from 'react';
import { ProfileService } from '../../services/profileService';

const Profile = ({ token, personId }) => {
  const [profileService] = useState(() => ProfileService(token));
  const [userProfile, setUserProfile] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await profileService.getOne(personId);
        setUserProfile(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [profileService, personId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : userProfile ? (
        <div>
          <h1>User Profile</h1>
          <p>Name: {userProfile.userName}</p>
          <p>Email: {userProfile.email}</p>
          <p>Phone: {userProfile.phoneNumber}</p>
        </div>
      ) : (
        <p>No user profile found.</p>
      )}
    </div>
  );
};

export default Profile;
