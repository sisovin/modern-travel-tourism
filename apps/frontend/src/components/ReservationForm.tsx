import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  dateRange: z.object({
    checkIn: z.string().nonempty('Check-in date is required'),
    checkOut: z.string().nonempty('Check-out date is required'),
  }),
  guests: z.object({
    adults: z.number().min(1, 'At least one adult is required'),
    children: z.number().min(0),
  }),
  roomType: z.string().nonempty('Room type is required'),
  specialRequests: z.string().optional(),
});

const ReservationForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="checkIn">Check-in Date:</label>
        <Controller
          name="dateRange.checkIn"
          control={control}
          render={({ field }) => <input type="date" {...field} />}
        />
        {errors.dateRange?.checkIn && <p>{errors.dateRange.checkIn.message}</p>}
      </div>
      <div>
        <label htmlFor="checkOut">Check-out Date:</label>
        <Controller
          name="dateRange.checkOut"
          control={control}
          render={({ field }) => <input type="date" {...field} />}
        />
        {errors.dateRange?.checkOut && <p>{errors.dateRange.checkOut.message}</p>}
      </div>
      <div>
        <label htmlFor="adults">Adults:</label>
        <Controller
          name="guests.adults"
          control={control}
          render={({ field }) => <input type="number" {...field} min="1" />}
        />
        {errors.guests?.adults && <p>{errors.guests.adults.message}</p>}
      </div>
      <div>
        <label htmlFor="children">Children:</label>
        <Controller
          name="guests.children"
          control={control}
          render={({ field }) => <input type="number" {...field} min="0" />}
        />
        {errors.guests?.children && <p>{errors.guests.children.message}</p>}
      </div>
      <div>
        <label htmlFor="roomType">Room Type:</label>
        <Controller
          name="roomType"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value="">Select a room type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          )}
        />
        {errors.roomType && <p>{errors.roomType.message}</p>}
      </div>
      <div>
        <label htmlFor="specialRequests">Special Requests:</label>
        <Controller
          name="specialRequests"
          control={control}
          render={({ field }) => <textarea {...field} />}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReservationForm;
