export const normalizeNewsDataObject = (obj) => {
  let str = JSON.stringify(obj);
  console.log(str);
  let results = [""];
  for (let el of str) {
    delete el.attributes.createdAt;
    delete el.attributes.updatedAt;
    delete el.attributes.publishedAt;
    console.log(el);
    console.log("next");
    results += el;
  }
  const newObj = JSON.parse(results);
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
