export default function authHeader() {
  const root = localStorage.getItem("persist:root");

  if (root != null) {
    const jsonRoot = JSON.parse(root);
    const token = JSON.parse(jsonRoot.user)?.userToken;
    // console.log(token);
    if (token) {
      return {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      };
    } else {
      return { Authorization: "", "Content-Type": "application/json" };
    }
  }
}
