import Layout from "../components/Layout";

export default function Register() {
  return (
    <Layout>
      <div className="max-w-lg mt-20 mx-auto bg-gray-200 p-8 rounded-xl shadow-lg">
        <form className="space-y-6">
          <fieldset className="space-y-6">
            <legend className="text-2xl font-bold text-blue-600 border-b border-gray-400 pb-3 mb-3">
              Please Register
            </legend>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="pl-2 mt-1 block w-full rounded-md border-gray-400 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
              />
              <p class="text-sm text-blue-500 mt-2">The name must match the name in Citizenship card.</p>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
                <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="pl-2 mt-1 block w-full rounded-md border-gray-400 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password1" className="block text-sm font-medium text-gray-700">
                Password
              </label>
                <input
                type="password"
                id="password1"
                name="password1"
                className="pl-2 mt-1 block w-full rounded-md border-gray-400 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                pattern="^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,}$"
                placeholder="Enter your password"
                title="Password must be at least 5 characters and include one special character"
                />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="password2" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
                <input
                type="password"
                id="password2"
                name="password2"
                className="pl-2 mt-1 block w-full rounded-md border-gray-400 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                placeholder="Confirm password"
                onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    const pass1 = (document.getElementById("password1") as HTMLInputElement)?.value;
                    target.setCustomValidity(
                    target.value !== pass1 ? "Passwords do not match." : ""
                    );
                }}
                title="Must match the password above"
                />
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </Layout>
  );
}
