class AuthService {
    static async handleLogin(data) {
        // Update the URL to go to your server OR handle you login's logic here
        const url = `https://YOUR_WEBSITE.com/Your-endpoint`
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include', // Remove this if don't need it
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // DO WHAT YOU WANT WITH THE RESPONSE HERE
        return response;
    }

    static async handleSignup(data) {
        // Update the URL to go to your server OR handle you login's logic here
        const url = `https://YOUR_WEBSITE.com/Your-endpoint`
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include', // Remove this if don't need it
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // DO WHAT YOU WANT WITH THE RESPONSE HERE
        return response;
    }
}

export default AuthService;