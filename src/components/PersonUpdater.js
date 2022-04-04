import { useState } from "react";
import { updatePersonName } from "../redux/peopleSlice";
import { useDispatch } from "react-redux";

export const PersonUpdater = () => {
  const [nameOld, setNameOld] = useState("");
  const [nameNew, setNameNew] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <label>Old Name: </label>
        <input
          type="text"
          value={nameOld}
          onChange={(e) => setNameOld(e.target.value)}
        />
      </div>
      <div>
        <label>New Name: </label>
        <input
          type="text"
          value={nameNew}
          onChange={(e) => setNameNew(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          dispatch(updatePersonName({ old: nameOld, new: nameNew }));
        }}
      >
        Update
      </button>
    </div>
  );
};
