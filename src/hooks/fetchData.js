export const normalizeNewsDataObject = (obj) => {
  let newObj = [];
  for (let el of obj.slice(-2)) {
    delete el.attributes.createdAt;
    delete el.attributes.updatedAt;
    delete el.attributes.publishedAt;
    newObj.push(el);
  }
  return newObj;
};

export async function getData(url) {
  try {
    const req = await fetch(url);
    const json = await req.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
