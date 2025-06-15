

async function fetchUserData()
{
    const dataContainer =  document.getElementById("api-data");
    const apiUrl =  'https://jsonplaceholder.typicode.com/users';
    try
    {
        const response =  await fetch(apiUrl);
        if (!response.ok)
            throw new Error("Error could not fetch data");
        const users = await response.json();
        const userList = document.createElement("ul");
        users.forEach(element => {
            const li =  document.createElement("li");
            li.textContent = element.name;
            userList.appendChild(li);
        });
        dataContainer.innerHTML = "";
        dataContainer.appendChild(userList);
    }
    catch(error)
    {
        console.error(error);
        dataContainer.textContent = "Failed to load user data.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchUserData();
})
