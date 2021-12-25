import React from "react";

const Index = (props) => {
  const { user } = props
  return (
    <>
      <h1>{user.username}{user.passwd}</h1>
    </>
  )
}

export default React.memo(Index);