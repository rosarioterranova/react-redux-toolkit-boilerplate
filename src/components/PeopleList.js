import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPeople,
  selectFetchPeopleRequest,
  selectPeople,
} from "../redux/peopleSlice";
import { REQUEST_STATUS } from "../redux/constants";
import { PersonUpdater } from "./PersonUpdater";

export default function PeopleList() {
  const dispatch = useDispatch();
  const fetchPeopleRequest = useSelector(selectFetchPeopleRequest);
  const people = useSelector(selectPeople);

  useEffect(() => {
    dispatch(fetchPeople());
  }, []);

  if (fetchPeopleRequest.status !== REQUEST_STATUS.FULFILLED) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {people.map((person, index) => (
        <p key={index}>{person.name}</p>
      ))}
      <PersonUpdater />
    </div>
  );
}
