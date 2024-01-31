import Form from '@/components/Form';

const LoginPage = () => {
  return (
    <body className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute left-0 w-1/4 h-full bg-[#0d3fc9]"></div>
        <div className="absolute right-0 w-3/4 h-full bg-white"></div>
        
        {/* Form */}
        <Form />
      </div>
    </body>
  );
};

export default LoginPage;
