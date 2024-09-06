import { Button } from "@mui/material";
import React from "react";
interface IRoomList {
  roomList: any;
  findPriceBreakDown: any;
  adult: any;
  child: any;
  roomChoose: any;
  status: any;
  detailHotel: any;
}
const RoomList = ({
  roomList,
  findPriceBreakDown,
  adult,
  child,
  roomChoose,
  status,
  detailHotel,
}: IRoomList) => {
  return (
    <div className="mx-10 my-24">
      <div className="h-auto rounded-lg shadow-xl bg-slate-200 p-6">
        <span className="text-2xl font-bold"> Another room lists:</span>
        <div className="my-12 flex flex-col 2xl:flex-row xl:flex-row items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-16">
            {roomList?.block?.map((room: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center 2xl:flex-row xl:flex-row 2xl:items-start 2xl:justify-between xl:items-start xl:justify-between 2xl:border-b-2 2xl:border-b-red-500 xl:border-b-2 xl:border-b-red-500  border-none ">
                  <div className="flex flex-col items-center justify-center 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start space-x-0 space-y-2 ">
                    <span
                      key={index}
                      className="text-sm 2xl:text-xl xl:text-xl lg:text-xl md:text-xl ls:text-xl font-bold antialiased text-wrap">
                      Name: {room?.room_name}
                    </span>
                    <span className="hidden 2xl:inline-block xl:inline-block lg:inline-block md:inline-block text-wrap tracking-tight text-xs 2xl:w-[30rem] xl:w-[30rem] lg:w-[42rem] md:w-[28rem] w-80">
                      Description room: {room?.name}
                    </span>
                    {roomList?.rooms[
                      room?.room_id
                    ]?.bed_configurations[0]?.bed_types?.map(
                      (bed: any, index: number) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center 2xl:items-start 2xl:justify-start xl:items-start xl:justify-start text-sm">
                          <p>
                            Room {index + 1}: {bed?.name_with_count}
                          </p>
                          <p>Description: {bed?.description}</p>
                        </div>
                      )
                    )}
                    <span className="italic text-red-600">
                      {detailHotel?.only_x_left?.rooms_list[room?.block_id]}
                    </span>
                  </div>

                  <div className="mx-14 rounded-lg 2xl:w-96 xl:w-96 lg:w-96 md:w-auto w-60 h-auto bg-blue-300">
                    <div className="flex flex-col items-start justify-start space-y-2 p-4">
                      <span className="text-sm font-bold">
                        Info booking:{" "}
                        {Math.round(
                          room?.product_price_breakdown?.gross_amount?.value /
                            room?.product_price_breakdown
                              ?.gross_amount_per_night.value
                        )}{" "}
                        Nights - Adults: {adult} - Children: {child} - Room:
                        {roomChoose}
                      </span>
                      <span className="line-through text-xs italic">
                        {
                          room?.product_price_breakdown?.strikethrough_amount
                            ?.amount_rounded
                        }
                      </span>
                      <span className="text-xl font-bold text-red-500">
                        {
                          room?.product_price_breakdown?.gross_amount
                            ?.amount_rounded
                        }
                      </span>
                      <span className="text-xs italic tracking-wide">
                        Taxes and fees included
                      </span>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          console.log("click");
                        }}
                        className="w-full">
                        Book now
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomList;
