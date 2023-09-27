import { useState } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";

const UserContext = createContext(null);

export const UserProvider = (props) => {
   const cookie = Cookies.get("authenticatedUser");
   const [authUser, setAuthUser] = useState(cookie ? JSON.parse(cookie) : null); //checks if cookie exists across page refreshes

   const signIn = async (credentials) => {
      const encodedCredentials = btoa(
         `${credentials.username}:${credentials.password}`
      ); //converts binary string to base64 encoded ascii string
      const fetchOptions = {
         method: "GET",
         headers: {
            Authorization: `Basic ${encodedCredentials}`,
         },
      };
      const response = await fetch(
         "http://localhost:5000/api/users",
         fetchOptions
      );
      if (response.status === 200) {
         const user = await response.json();
         setAuthUser(user);
         Cookies.set("authenticatedUser", JSON.stringify(user), { expires: 1 });
         return user;
      } else if (response.status === 400) {
         return null;
      } else {
         throw new Error();
      }
   };

   const signOut = () => {
      setAuthUser(null)
      Cookies.remove('authenticatedUser') //removes the saved cookie when the user signs out
   };

   return (
      <UserContext.Provider value={{ authUser, actions: { signIn, signOut } }}>
         {props.children}
      </UserContext.Provider>
   );
};

export default UserContext;
