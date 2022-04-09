import { useParams } from "react-router-dom";

function Person() {
	return <div>{useParams().id}</div>;
}

export default Person;
