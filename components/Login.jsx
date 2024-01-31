

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute left-0 w-1/4 h-full bg-[#0d3fc9]"></div>
        <div className="absolute right-0 w-3/4 h-full bg-white"></div>
      </div>

      {/* Form */}
      <div className="relative z-10 bg-white p-9 rounded-md shadow-lg border border-gray-300 pt-20 pb-20">
        <div className="mb-8">
          <img src="" alt="Logo" className="w-20 h-20" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-md"
            placeholder="Password"
          />
        </div>
        <div className="mb-4 flex justify-end">
          <a href="#" className="text-blue-500">Forgot password?</a>
        </div>
        <button className="mt-4 bg-[#0d3fc9] text-white p-2 rounded-md w-full">Login</button>
        <div className="mt-4">
          <p className="text-gray-700">Don't have an account? <a href="#" className="text-blue-500">Create new account</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
