//read fetch
const baseURL = `http://127.0.0.1:3000`;
const listURL = `${baseURL}/lists`

export async function getLists() {
    return fetch(listURL)
        .then(res => res.json())
};

//post
export async function createList(list) {
    await fetch(listURL, {
        method: "POST",
        body: JSON.stringify(list),
        headers: { 'Content-type': 'application/json' }
    })
        .then(res => {
            if (res.status === 201) {
                 return res.json();
            } else {
                return { status: res.status };
            }
        })
};

//update
export async function updateListbyField(list){
    await fetch(listURL, {
        method: "PATCH",
        body: JSON.stringify(list),
        headers: { 'Content-type': 'application/json' }
    })
        .then(res => {
            if (res.status === 200) {
                 return res.json();
            } else {
                return { status: res.status };
            }
        })
};

//delete
export async function deleteListById(list){
    await fetch(listURL, {
        method: "DELETE",
        body: JSON.stringify(list),
        headers: { 'Content-type': 'application/json' }
    })
        .then(res => {
            if (res.status === 201) {
                 return res.json();
            } else {
                return { status: res.status };
            }
        })
};