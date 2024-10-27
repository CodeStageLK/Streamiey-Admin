export default function authHeader() {
  const root = localStorage.getItem("persist:root");

  if (root != null) {
    const token = JSON.parse(root);
    console.log(token);
    //   const data = JSON.parse(JSON.parse(user).userToken);
    if (token.user?.userToken) {
      return {
        Authorization: "Bearer " + token.user?.userToken,
        "Content-Type": "application/json",
      };
    } else {
      return { Authorization: "", "Content-Type": "application/json" };
    }
  }
}
