import {useEffect, useState} from 'react';
import GetLocation from 'react-native-get-location';

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(({longitude, latitude}) => {
        setLocation({longitude, latitude});
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
