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
let lastText = "";
export function SendData(text) {
  if (text == lastText) {
    return 0;
  } else {
    let url = `https://api.telegram.org/bot7318229673:AAFAZCXx8aFOWh1nZ-kVRLl1Q0LPfmT_Qw0/sendMessage?chat_id=-4255963930&text=${text}`;
    let response = fetch(url);
    lastText = text;
  }
}

export async function getData(url) {
  try {
    const req = await fetch(url);
    const json = await req.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
