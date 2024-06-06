class AuthService {
  static async handleLogin(data: object): Promise<any> {
    // Update the URL to go to your server OR handle you login's logic here
    const url: string = `https://YOUR_WEBSITE.com/Your-endpoint`;
    try {
      const response: Response = await fetch(url, {
        method: "POST",
        credentials: "include", // Remove this if don't need it
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // DO WHAT YOU WANT WITH THE RESPONSE HERE
      return response;
    } catch (error) {
      return "error";
    }
  }

  static async handleSignup(data: object): Promise<any> {
    try {
      // Update the URL to go to your server OR handle you login's logic here
      const url: string = `https://YOUR_WEBSITE.com/Your-endpoint`;

      const response: Response = await fetch(url, {
        method: "POST",
        credentials: "include", // Remove this if don't need it
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // DO WHAT YOU WANT WITH THE RESPONSE HERE
      return response;
    } catch (error) {
      console.error("error occured while making request", error);
      return error;
    }
  }
}

export default AuthService;
