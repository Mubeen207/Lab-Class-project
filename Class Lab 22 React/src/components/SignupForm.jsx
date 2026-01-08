import { useState } from "react";

function SignupForm() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [result, setResult] = useState(null);
  function signUp(e) {
    e.preventDefault();
    setResult({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  }
  let isDisabled = !name || !email || !password;
  return (
    <>
      <form
        onSubmit={signUp}
        className="mx-auto my-10 flex w-full max-w-md flex-col gap-4 rounded-xl border border-gray-200 bg-white p-8 shadow-lg"
      >
        <div className="mb-2 text-center">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Create Account
          </h1>
          <p className="text-sm text-gray-500">
            Join us today! It only takes a minute.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="CD"
            className="rounded-lg border border-gray-300 p-2.5 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="Email"
            placeholder="cd@gmail.com"
            className="rounded-lg border border-gray-300 p-2.5 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="Password"
            placeholder="Password"
            className="rounded-lg border border-gray-300 p-2.5 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className="mt-4 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {isDisabled ? "Sign Up" : "Sign Up"}
        </button>
      </form>
      {result && (
        <div className="mt-8 w-full max-w-md mx-auto overflow-hidden rounded-xl border border-green-200 bg-green-50 shadow-md animate-in fade-in zoom-in duration-300">
          <div className="bg-green-600 px-6 py-3">
            <h3 className="flex items-center gap-2 font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Registration Successful
            </h3>
          </div>
          <div className="p-6 space-y-3">
            <p className="text-sm text-green-800 font-semibold uppercase tracking-wider">
              Submitted Details:
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between border-b border-green-200 pb-1">
                <span className="text-gray-600 text-sm italic">Name:</span>
                <span className="font-medium text-gray-800">{result.name}</span>
              </div>

              <div className="flex justify-between border-b border-green-200 pb-1">
                <span className="text-gray-600 text-sm italic">Email:</span>
                <span className="font-medium text-gray-800">
                  {result.email}
                </span>
              </div>

              <div className="flex justify-between border-b border-green-200 pb-1">
                <span className="text-gray-600 text-sm italic">Password:</span>
                <span className="font-mono text-gray-800 text-sm">
                  ••••••••
                </span>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default SignupForm;
