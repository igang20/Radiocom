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
export async function SendData(text) {
  if (text == lastText) {
    return 0;
  } else {
    let url = `https://api.telegram.org/bot7318229673:AAFAZCXx8aFOWh1nZ-kVRLl1Q0LPfmT_Qw0/sendMessage?text=${text}&chat_id=-4545572968&parse_mode=HTML`;
    let response = await fetch(url);
    lastText = text;
    return response;
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
