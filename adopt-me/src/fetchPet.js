const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

    if(!apiRes.ok) /* if apiRes status is not OK */ {
        throw new Error(`details/${id} fetch not OK.`);
    }

    // This is an async function that must return a Promise<>
    return apiRes.json();
}

export default fetchPet;