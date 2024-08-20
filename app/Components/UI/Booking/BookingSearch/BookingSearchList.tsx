import { useAppSelector } from "@/app/services/redux/hooks/hooks";
import CardHotel from "@/app/utils/Reuseable/CardHotel";
import React, { useState } from "react";

const BookingSearchList = () => {
  const hotels = useAppSelector((state) => state.searchHotel.hotels);
  const status = useAppSelector((state) => state.searchHotel.status);
  const [visible, setVisible] = useState(9);
  const handleSetVisible = () => {
    setVisible((prev) => prev + 9);
  };
  return (
    <div className="flex flex-col items-start justify-start space-y-8">
      {hotels.slice(0, visible).map((hotel) => {
        const updatedPhotoUrl = hotel.photoUrls[0].replace(
          "square60",
          "square200"
        );

        return (
          <CardHotel
            id={hotel.id}
            image={updatedPhotoUrl}
            hotelName={hotel.name}
            key={hotel.id}
            reviews={hotel.reviewCount}
            checkInUntilTime={hotel.checkin.untilTime}
            checkInFromTime={hotel.checkin.fromTime}
            checkOutUntilTime={hotel.checkout.untilTime}
            checkOutFromTime={hotel.checkout.fromTime}
            score={hotel.reviewScore}
            scoreWord={hotel.reviewScoreWord}
            discountPrice={hotel.priceBreakdown.grossPrice?.amountRounded}
            price={hotel.priceBreakdown.strikethroughPrice?.amountRounded}
            loading={status === "loading"}
          />
        );
      })}
      {visible < hotels.length && (
        <button
          onClick={handleSetVisible}
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md">
          Load More
        </button>
      )}
    </div>
  );
};

export default BookingSearchList;
