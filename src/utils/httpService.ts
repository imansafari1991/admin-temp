const headers = new Headers({
    Accept: "text/plain",
});

export const Get = async (url: string) => {

    const makeRequest = async () => {
        headers.set("Authorization", `Bearer ${localStorage.getItem("access_token")}`)
        var res = await fetch(url, {
            headers: headers
        })
        return res;
    }
    let res = await makeRequest();
    return handleAuthorization(res, makeRequest);


}
export const Post = async (url: string, body: string) => {
    const makeRequest = async () => {
        headers.set("Authorization", `Bearer ${localStorage.getItem("access_token")}`)
        headers.set("Content-Type", "application/json");
        var res = await fetch(url, {
            method: 'POST',
            body: body,
            headers: headers
        })
        return res;
    }
    let res = await makeRequest();
    return handleAuthorization(res, makeRequest);
}
export const Put = async (url: string, body: string) => {
    const makeRequest = async () => {
        headers.set("Authorization", `Bearer ${localStorage.getItem("access_token")}`)
        headers.set("Content-Type", "application/json");
        var res = await fetch(url, {
            method: 'PUT',
            body: body,
            headers: headers
        })
        return res;
    }
    let res = await makeRequest();
    return handleAuthorization(res, makeRequest);

}
export const Delete = async (url: string) => {
    const makeRequest = async () => {
        headers.set("Authorization", `Bearer ${localStorage.getItem("access_token")}`)
        headers.set("Content-Type", "application/json");
        var res = await fetch(url, {
            method: 'DELETE',
            headers: headers
        })
        return res
    }
    let res = await makeRequest();
    return handleAuthorization(res, makeRequest);
}

const handleAuthorization = async (res: Response, requestMethod: () => Promise<any>) => {
    if (res.status === 401) {
        // If unauthorized, attempt to refresh the token
        const refreshToken = localStorage.getItem("refresh_token");
        if (refreshToken) {
            headers.set("Content-Type", "application/json");
            const refreshRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/v1/User/RefreshSignIn`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ refreshToken: refreshToken })
            });
            if (refreshRes.ok) {
                const resData = await refreshRes.json();
                localStorage.setItem("access_token", resData.data.access_token);
                localStorage.setItem("refresh_token", resData.data.refresh_token)
                // Retry the original request with the new token
                res = await requestMethod();
            } else {
                throw new Error('Failed to refresh token');
            }
        } else {
            throw new Error('No refresh token available');
        }
    }
    return res.json();
}