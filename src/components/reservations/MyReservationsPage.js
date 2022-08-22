import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservations/reservations';
import Reservation from './Reservation';

const MyReservationsPage = ({ userId }) => {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  console.log(reservations);
  useEffect(() => {
    dispatch(fetchReservations(userId));
  }, [userId]);

  return (
    <div className="p-3 w-100">
      { reservations.length > 0
        ? (
          <>
            <h3 className="text-center">My Reservations</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Date</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody className="table-body">
                { reservations.map((reservation) => (
                  <Reservation key={reservation.id} reservation={reservation} />
                ))}
              </tbody>
            </table>
          </>
        )
        : <h2>No Reservations</h2>}
    </div>
  );
};

MyReservationsPage.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default MyReservationsPage;
