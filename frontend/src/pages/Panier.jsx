import React from 'react'
import {useUserContext} from "../context/UserContext"


function panier() {

  const { userId } = useUserContext();
  //je veux recuperer le dernier cart du user
  //
  return (
    <div>panier</div>
  )
}

export default panier