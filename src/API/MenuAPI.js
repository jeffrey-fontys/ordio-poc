const baseUrl = "https://robinvanhoof.tech:1000";

export async function GetMenu(token)
{
    let res = await
        fetch(baseUrl + "Public/GetMenu?token=" + token, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": '*' }
        });
    return ((res.status === 200) ? res.json() : res);
}

export async function GetMenuItems(token, sortType, filterType, filterParam1, filterParam2)
{
    let res = await
        fetch(baseUrl + "/Public/GetMenuItems?token=" + token + "&sort=" + sortType ?? "ALP_ASC" + "&filter=" + filterType ?? "NONE" + "&filterParam1=" + filterParam1 + "&filterParam2=" + filterParam2, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": '*' }
        });
    return ((res.status === 200) ? res.json() : res);
}
