import React, { useState, useEffect } from "react";
import "./dash.css";
import { Image, Transformation } from "cloudinary-react";
import { onDash } from "../Api/dashboard";

const Dash = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    onDash().then((res) => {
      if (res.success) setData(res.data?.subscribers?.userEvent);
      else alert(res.message);
    });
  }, []);

  return (
  
    <div>
      {data.map((user) => (
        <div className="table" key={user.id}>
          <div className="img">
            <Image
              className="img"
              cloudName="demo"
              upload_preset="my_unsigned_preset"
              publicId="family_bench"
            />
            <Transformation
              width="10"
              height="10"
              gravity="face"
              crop="thumb"
            />
            <Transformation radius="20" />
          </div>
          <div>
            <i class="user icon"></i> {user.id}
          </div>
          <div>
            <i class="dollar sign icon"></i>{user.chargedCoins}
          </div>
          <div>
            <i class="map marker icon"></i>{user.name}
          </div>
          <div>
            <i class="clock outline icon"></i>{user.hasExpired}
          </div>
          <div>
            <button className="arrow">
              <i class="arrow right icon"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Dash;
