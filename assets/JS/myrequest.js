let API_BASE_URL = "https://654baec75b38a59f28ef8700.mockapi.io";

//categories get all
export async function getAll() {
  let globalData; //undefined
  await axios.get(API_BASE_URL + "/products").then((result) => {
    globalData = result.data;
  });

  return globalData;
}
//categories get by ID
export async function getByID(id) {
  let globalData; //undefined
  await axios.get(API_BASE_URL + `/products/${id}`).then((result) => {
    globalData = result.data;
  });

  return globalData;
}

//categories delete
export async function deleteByID(id) {
  await axios.delete(API_BASE_URL + `/products/${id}`);
}

//categories post
export async function post(
  name,
  category,
  isnew,
  size,
  price,
  isfeatured,
  color,
  img,
  description
) {
  let newimg;
  newimg = await axios.post(API_BASE_URL + `/products`, {
    name,
    category,
    isnew,
    size,
    price,
    isfeatured,
    color,
    img,
    description,
  });

  return newimg;
}

//categories put
export async function putByID(
  id,
  name,
  category,
  isnew,
  size,
  price,
  isfeatured,
  color,
  img,
  description
) {
  axios.put(API_BASE_URL + `/products/${id}`, {
    name,
    category,
    isnew,
    size,
    price,
    isfeatured,
    color,
    img,
    description,
  });
}

//categories patch
export async function patchByID(
  id,
  name,
  category,
  isnew,
  size,
  price,
  isfeatured,
  color,
  img,
  description
) {
  axios.patch(API_BASE_URL + `/products/${id}`, {
    name,
    category,
    isnew,
    size,
    price,
    isfeatured,
    color,
    img,
    description,
  });
}
