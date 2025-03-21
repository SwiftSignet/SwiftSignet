export const isAuthenticated = () => {
    return !!localStorage.getItem("token");  // Check if token exists
  };
  
  export const getToken = () => {
    return localStorage.getItem("token");  // Get stored JWT token
  };
  
  export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login"; // Redirect to login after logout
  };
  