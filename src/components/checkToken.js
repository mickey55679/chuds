import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function CheckToken() {
  const { getIdTokenClaims } = useAuth0();
  const [claims, setClaims] = useState(null);

  const checkClaims = async () => {
    const tokenClaims = await getIdTokenClaims();
    setClaims(tokenClaims);
    console.log(tokenClaims);
  };

  return (
    <div>
      <button onClick={checkClaims}>Check ID Token Claims</button>
      {claims && <pre>{JSON.stringify(claims, null, 2)}</pre>}
    </div>
  );
}

export default CheckToken;
