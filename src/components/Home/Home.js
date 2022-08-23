import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { fetchMotorcycles } from '../../redux/motorcycles/motorcycles';
import Motor from './Motor';
import responsive from '../../config/responsive';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, []);
  const motors = useSelector((state) => state.motorcycle);
  console.log('Data from the API: ', motors);

  return (
    <div className="">
      <h2 className="text-center"> LATEST MODELS</h2>
      <p className="text-center">Please select power models</p>
      <div className="show-motor w-100">
        <Carousel
          autoPlay
          className="w-75"
          keyBoardControl
          itemClass="mr-10"
          responsive={responsive([3, 2, 1])}
        >
          {motors.map((motor) => (
            <Motor key={motor.id} motor={motor} />

          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
