"use client";

export default function SignupPage() {




  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-950">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">
          Sign up for your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <input
          className="bg-amber-50 border border-gray-100 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"
          type="email"
          name="email"
          id="email"
          placeholder="Create your username"
        />
        <input
          className="bg-amber-50 border border-gray-100 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <input
          className="bg-amber-50 border border-gray-100 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"
          type="email"
          name="email"
          id="email"
          placeholder="Create your password"
        />
        <input
          className="bg-amber-50 border border-gray-100 rounded-md py-2 m-4 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          name="email"
          id="email"
          placeholder="Confirm your password"
        />
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 m-4">
            Sign Up
          </button>
        </div>
        <div className="m-4 mt-4 text-sm text-white">
          already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:text-blue-600">
            Login
          </a>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"></div>
      </div>
    </div>
  );
}
