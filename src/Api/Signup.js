// import W2W from "./W2W";

export const onRegisterSubmit = async (form) => {
  const data = await fetch(
    "https://w2wworld.herokuapp.com/api/v1/accounts/w2w-user/new",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...form,
        nationality: 2,
        age: 1,
        male: true,
        female: false,
        roleId: 2,
      }),
    }
  );
  const resolvedResponse = await responseHndler(data);
  console.log(resolvedResponse);
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
