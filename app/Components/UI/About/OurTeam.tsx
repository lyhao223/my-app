import AvatarCard from "@/app/utils/Reuseable/AvatarCard";
import React from "react";
import ot1 from "@/assets/avatar/ot1.jpg";
import ot2 from "@/assets/avatar/ot2.jpg";
import ot3 from "@/assets/avatar/ot3.jpg";
import ot4 from "@/assets/avatar/ot4.jpg";
const OurTeam = () => {
  return (
    <div className="flex flex-col items-start justify-center space-y-3">
      <h1 className="text-5xl font-bold">Our Team</h1>
      <div className="flex flex-col space-x-0 space-y-3 2xl:flex-row xl:flex-row items-center justify-center 2xl:space-x-5 2xl:space-y-0 xl:space-x-5 xl:space-y-0">
        <AvatarCard
          image={ot1?.src}
          name="Larry Lawson"
          duty="Editor in Chief"
        />
        <AvatarCard
          image={ot2?.src}
          name="Louis Ferguson"
          duty="Director Graphics"
        />
        <AvatarCard
          image={ot3?.src}
          name="Louis Crawford"
          duty="Editor, Coverage"
        />
        <AvatarCard
          image={ot4?.src}
          name="Frances Guerrero"
          duty="CEO, Coverage"
        />
      </div>
    </div>
  );
};

export default OurTeam;
