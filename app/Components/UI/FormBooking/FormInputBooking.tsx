import {
  useAppDispatch,
  useAppSelector,
} from "@/app/services/redux/hooks/hooks";
import { fetchDetailHotel } from "@/app/services/redux/slice/detailHotelSlice";
import { fetchReviewScores } from "@/app/services/redux/slice/reviewScoresSlice";
import {
  blockHotelRoom,
  fetchRoomList,
  getBlockIDRoomRecommendation,
} from "@/app/services/redux/slice/roomListSlice";
import { Button, Input, Skeleton, TextField } from "@mui/material";
import { stat } from "fs";
import React, { Fragment, useEffect, useState } from "react";
interface IFormInputBookingProps {
  roomID?: any;
  hotelID?: any;
}
const FormInputBooking = ({ roomID, hotelID }: IFormInputBookingProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const dispatch = useAppDispatch();
  const hotel: any = useAppSelector((state) => state.detailHotelSlice.hotel);
  const statusHotel = useAppSelector((state) => state.detailHotelSlice.status);
  const reviewScores: any = useAppSelector(
    (state) => state.reviewScoresSlice.reviewScores
  );
  const statusReviewScores = useAppSelector(
    (state) => state.reviewScoresSlice.status
  );
  const recommendationID = useAppSelector(
    (state) => state.roomListSlice.recommendation
  );
  const blockHotel = useAppSelector((state) => state.roomListSlice.blockHotel);
  const findPriceBreakDown = (roomID: any) => {
    for (const blockItem of blockHotel) {
      if (blockItem.block_id === roomID) {
        return blockItem;
      }
    }
    return null;
  };
  const roomList: any = useAppSelector((state) => state.roomListSlice.roomList);
  const [storedCheckinDate, setStoredCheckinDate] = useState<any>();
  const [storedCheckoutDate, setStoredCheckoutDate] = useState<any>();
  const [storedAdult, setStoredAdult] = useState<any>();
  const [storedChildren, setStoredChildren] = useState<any>();
  const [storedRoomChoose, setStoredRoomChoose] = useState<any>();
  const priceDown = findPriceBreakDown(roomID);
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(
        "Checkin Date from localStorage: ",
        localStorage.getItem("checkinDate")
      );
      setStoredCheckinDate(localStorage.getItem("checkinDate"));
      setStoredCheckoutDate(localStorage.getItem("checkoutDate"));
      setStoredAdult(localStorage.getItem("adult"));
      setStoredChildren(localStorage.getItem("children"));
      setStoredRoomChoose(localStorage.getItem("roomChoose"));
    }
  }, []);
  useEffect(() => {
    if (
      storedCheckinDate &&
      storedCheckoutDate &&
      storedAdult &&
      storedChildren &&
      storedRoomChoose
    ) {
      dispatch(
        fetchRoomList({
          hotelID: hotelID,
          checkinDate: storedCheckinDate,
          checkoutDate: storedCheckoutDate,
          adult: storedAdult,
          children: storedChildren,
          room: storedRoomChoose,
        })
      );

      dispatch(
        fetchDetailHotel({
          hotelID: hotelID,
          checkinDate: storedCheckinDate,
          checkoutDate: storedCheckoutDate,
          adult: storedAdult,
          children: storedChildren,
          room: storedRoomChoose,
        })
      );
      dispatch(fetchReviewScores(hotelID));
      dispatch(
        getBlockIDRoomRecommendation({
          hotelID: hotelID,
          checkinDate: storedCheckinDate,
          checkoutDate: storedCheckoutDate,
          adult: storedAdult,
          children: storedChildren,
          room: storedRoomChoose,
        })
      );
      dispatch(
        blockHotelRoom({
          hotelID: hotelID,
          checkinDate: storedCheckinDate,
          checkoutDate: storedCheckoutDate,
          adult: storedAdult,
          children: storedChildren,
          room: storedRoomChoose,
        })
      );
    } else {
    }
  }, [
    storedCheckinDate,
    storedCheckoutDate,
    storedAdult,
    storedChildren,
    storedRoomChoose,
  ]);

  const validateForm = () => {
    let isValid = true;
    let newErrors = { firstName: "", lastName: "", email: "", phone: "" };

    if (!firstName) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!lastName) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
      newErrors.phone = "Valid phone number is required (10 digits)";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted");
    } else {
      console.log("Form not submitted");
    }
  };
  return (
    <>
      <div className="flex items-start justify-center">
        {statusReviewScores === "loading" && statusHotel === "loading" ? (
          <Skeleton width={230} height={40} />
        ) : (
          <span className="text-3xl font-bold antialiased">
            Booking Process
          </span>
        )}
      </div>
      <div className="my-10 2xl:mx-80 xl:mx-36 mx-auto grid 2xl:grid-cols-4 xl:grid-cols-4 gap-20 items-stretch">
        <div className="col-span-1 2xl:col-span-2 xl:col-span-2 my-5 2xl:my-0 xl:my-0 flex items-center justify-center 2xl:flex-none">
          {/*info hotel*/}
          <div className="flex flex-col items-start justify-center 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start space-y-6">
            <div className="w-80 h-auto rounded-lg border-2 p-4">
              <div className="flex flex-col items start justify-start space-y-2">
                {statusHotel === "loading" ? (
                  <Skeleton width={284} height={24} />
                ) : (
                  <span>{hotel?.accommodation_type_name}</span>
                )}
                {statusHotel === "loading" ? (
                  <Skeleton width={284} height={48} />
                ) : (
                  <span>{hotel?.hotel_name}</span>
                )}
                {statusHotel === "loading" ? (
                  <Skeleton width={284} height={24} />
                ) : (
                  <span>{hotel?.hotel_address_line}</span>
                )}
                <div className="flex flex-row items-center justify-start space-x-2">
                  <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                    {statusReviewScores === "loading" ? (
                      <Skeleton width={50} height={50} />
                    ) : (
                      `${reviewScores?.score_end}`
                    )}
                  </span>
                  {statusReviewScores === "loading" ? (
                    <Skeleton width={73} height={24} />
                  ) : (
                    <span>{reviewScores?.score_word}</span>
                  )}
                  {statusReviewScores === "loading" ? (
                    <Skeleton width={90} height={24} />
                  ) : (
                    <span>{reviewScores?.count} reviews</span>
                  )}
                </div>
              </div>
            </div>
            {/*detail room*/}
            <div className="w-80 h-auto rounded-lg border-2 p-4">
              <div className="flex flex-col items start justify-start space-y-2">
                {statusReviewScores === "loading" &&
                statusHotel === "loading" ? (
                  <Skeleton width={284} height={24} />
                ) : (
                  <span>Detail booking</span>
                )}
                <div className="flex flex-row items-center justify-between">
                  {statusReviewScores === "loading" &&
                  statusHotel === "loading" ? (
                    <Skeleton width={140} height={48} />
                  ) : (
                    <span>Check in date: {storedCheckinDate}</span>
                  )}
                  {statusReviewScores === "loading" &&
                  statusHotel === "loading" ? (
                    <Skeleton width={140} height={48} />
                  ) : (
                    <span>Check out date: {storedCheckoutDate}</span>
                  )}
                </div>
                {statusReviewScores === "loading" &&
                statusHotel === "loading" ? (
                  <Skeleton width={248} height={48} />
                ) : (
                  <span>Amount nights:</span>
                )}
                {statusReviewScores === "loading" &&
                statusHotel === "loading" ? (
                  <Skeleton width={248} height={48} />
                ) : (
                  <span>
                    {priceDown?.product_price_breakdown?.gross_amount?.value &&
                    priceDown?.product_price_breakdown?.gross_amount_per_night
                      ?.value
                      ? Math.round(
                          priceDown?.product_price_breakdown?.gross_amount
                            ?.value /
                            priceDown?.product_price_breakdown
                              ?.gross_amount_per_night?.value
                        )
                      : "N/A"}
                  </span>
                )}
                {statusReviewScores === "loading" &&
                statusHotel === "loading" ? (
                  <Skeleton width={248} height={48} />
                ) : (
                  <span>You choose:</span>
                )}
                {statusReviewScores === "loading" &&
                statusHotel === "loading" ? (
                  <Skeleton width={248} height={48} />
                ) : (
                  <span>
                    {storedRoomChoose} rooms - {storedAdult} adults -{" "}
                    {storedChildren} children
                  </span>
                )}
                {statusReviewScores === "loading" &&
                statusHotel === "loading" ? (
                  <Skeleton width={248} height={48} />
                ) : (
                  <span>{hotel?.recommended_block_title}</span>
                )}
              </div>
            </div>
            {/*detail price*/}

            <div className="w-80 h-auto p-4 border-2 rounded-lg">
              {statusReviewScores === "loading" && statusHotel === "loading" ? (
                <Skeleton width={90} height={20} />
              ) : (
                <span>Detail Price:</span>
              )}

              {/* {roomList?.block.map((room: any, index: number) => {
                const priceDown = findPriceBreakDown(room?.room_id);
                console.log(priceDown);
                return (
                  <Fragment key={index}>
                    <span>{room?.room_id}</span>
                    <div className="flex flex-row items-center justify-between">
                      <span>Price Amout:</span>
                      <span>{priceDown?.gross_amount?.amount_unrounded}</span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span>Price With Voucher:</span>
                      <span>500,000VND</span>
                    </div>
                    <div className="min-w-full h-20 bg-blue-300 rounded-lg p-2 my-3">
                      <div className="flex flex-row items-center justify-between">
                        <span>Total:</span>
                        <div className="flex flex-col items-end justify-start">
                          <span>1,500,000VND</span>
                          <span>500,000VND</span>
                          <span>VAT and Fee includes</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <span>Info price:</span>
                      <span>Include 8% VAT and 33,800VND</span>
                    </div>
                  </Fragment>
                );
              })} */}
              <div className="flex flex-row items-center justify-between">
                {statusReviewScores === "loading" &&
                statusHotel === "loading" ? (
                  <Skeleton width={90} height={20} />
                ) : (
                  <span>Price Amout:</span>
                )}
                {statusReviewScores === "loading" &&
                statusHotel === "loading" ? (
                  <Skeleton width={90} height={20} />
                ) : (
                  <span>
                    {
                      priceDown?.product_price_breakdown
                        ?.strikethrough_amount_per_night?.amount_unrounded
                    }
                  </span>
                )}
              </div>
              <div className="flex flex-row items-center justify-between">
                {statusReviewScores === "loading" &&
                statusHotel === "loading" ? (
                  <Skeleton width={93} height={24} />
                ) : (
                  <span>Price With Voucher:</span>
                )}
                {statusReviewScores === "loading" &&
                statusHotel === "loading" ? (
                  <Skeleton width={93} height={24} />
                ) : (
                  <span className="font-bold text-red-500">
                    {
                      priceDown?.product_price_breakdown?.gross_amount_per_night
                        ?.amount_unrounded
                    }
                  </span>
                )}
              </div>
              {statusReviewScores === "loading" && statusHotel === "loading" ? (
                <Skeleton width={200} height={150} />
              ) : (
                <div className="min-w-full h-20 bg-blue-300 rounded-lg p-2 my-3">
                  <div className="flex flex-col items-start justify-start">
                    <span>Total:</span>
                    <div className="flex flex-col items-start justify-start">
                      <span>
                        {
                          priceDown?.product_price_breakdown?.gross_amount
                            ?.amount_unrounded
                        }
                      </span>
                      <span>VAT and Fee includes</span>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col items-start justify-start">
                {statusReviewScores === "loading" &&
                statusHotel === "loading" ? (
                  <Skeleton width={70} height={24} />
                ) : (
                  <span>Info price:</span>
                )}
                {statusReviewScores === "loading" &&
                statusHotel === "loading" ? (
                  <Skeleton width={270} height={24} />
                ) : (
                  <span>
                    Include 8% VAT and TAX -{" "}
                    {
                      priceDown?.product_price_breakdown
                        ?.included_taxes_and_charges_amount?.amount_unrounded
                    }
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 2xl:col-span-2 xl:col-span-2 min-w-full">
          <div className="flex flex-col items-start justify-start space-y-3">
            <div className="w-full border-2 rounded-lg p-4">
              <span>Info Custom</span>
              {statusReviewScores === "loading" && statusHotel === "loading" ? (
                <Skeleton width={448} height={411} />
              ) : (
                <form className="my-4 flex flex-col items-start justify-between space-y-8">
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setFirstName(e.target.value)}
                    error={!!error.firstName}
                    helperText={error.firstName}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setLastName(e.target.value)}
                    error={!!error.lastName}
                    helperText={error.lastName}
                  />

                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!error.email}
                    helperText={error.email}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setPhone(e.target.value)}
                    error={!!error.phone}
                    helperText={error.phone}
                  />
                </form>
              )}
            </div>

            {statusReviewScores === "loading" && statusHotel === "loading" ? (
              <Skeleton width={488} height={140} />
            ) : (
              <div className="w-full border-2 rounded-lg p-4">
                <span>Notes</span>
                <div className="my-2 flex flex-col items-start justify-start space-y-2">
                  <span>{priceDown?.no_cc_object?.title}</span>
                  <span>
                    {
                      priceDown?.paymentterms?.prepayment
                        ?.extended_type_translation
                    }
                  </span>
                  <span>
                    {priceDown?.paymentterms?.cancellation?.type_translation}
                  </span>
                </div>
              </div>
            )}

            {statusReviewScores === "loading" && statusHotel === "loading" ? (
              <Skeleton width={320} height={40} />
            ) : (
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                className="w-80">
                Book now
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormInputBooking;
