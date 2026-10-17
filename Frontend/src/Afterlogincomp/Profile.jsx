import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, Setprofile] = useState([]);
  useEffect(() => {
    async function info() {
      let data = await fetch("http://localhost:3000/api/profile");
      let res = await data.json();
      Setprofile(res);
    }
    info();
  }, []);
  return (
    <div className="p-6">
      {profile.map((item) => (
        <div key={item.id} className="mb-3 rounded-lg border p-4">
          <h1 className="text-lg font-semibold">
            Hello there, welcome {item.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Profile;
