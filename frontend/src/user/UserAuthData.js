import React, { useState } from "react";
import JoblyApi from "../api";
import SignUp from "./SignUp";

const UserAuthData = () => {
    const addUser = (data) => {
        const res = JoblyApi.registerUser(data);
        console.log(res)
        // setBoxes(boxes => [...boxes,
        // { ...newBox, id: uuid() }])
    }
    return (<>
        <SignUp addUser={addUser} />
    </>)
}
export default UserAuthData