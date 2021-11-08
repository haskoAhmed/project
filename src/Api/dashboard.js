export const onDash = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  const data = await fetch(
    "https://w2wworld.herokuapp.com/api/v1/all_subscribers",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `bearer ${token}`,
      },
    }
  ).catch((err) => console.log(err));

  const resolvedResponse = await responseHndler(data);
  return resolvedResponse;
};
let actionResult = { data: {}, message: "", success: false };

export const responseHndler = async (res) => {
  let status = await res.status;

  if (status === 200) {
    actionResult.success = true;
    actionResult.message = "Your action done successfully";
    actionResult.data = await resResolver(res);
  } else if (status === 404) {
    actionResult.success = false;
    actionResult.message = await resResolver(res, true);
  } else {
    actionResult.success = false;
    actionResult.message = await resResolver(res, true);
  }

  return actionResult;
};

const resResolver = async (data, type) => {
  let JsonData = await data.json();

  if (type) return JsonData.error;

  return JsonData;
};
