import React from "react";

function LoginPage() {
  const handleSubmit = () => {
    localStorage.setItem("token", "123");
  };
  return (
    <div className="flex justify-center items-center h-screen text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#000] bg-opacity-75 min-w-[440px] h-[75%] max-h-[660px] p-16 flex flex-col gap-7"
      >
        <h2 className="text-2xl font-semibold">Sign In</h2>
        <div className="flex gap-4 flex-col">
          <input
            placeholder="Email or phone number"
            className="h-[50px] rounded-[4px] text-mainGrey px-5 bg-secondary w-full"
          />
          <input
            placeholder="Password"
            className="h-[50px] rounded-[4px] text-grey px-5 bg-secondary w-full"
          />
        </div>
        <button className="bg-main rounded-[4px] h-[50px] text-lg">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
