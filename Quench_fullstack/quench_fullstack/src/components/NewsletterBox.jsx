import React from 'react';

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault(); 
    const email = e.target.email.value;
    const name = e.target.name.value;
    console.log(`Email: ${email}, Name: ${name}`);
    e.target.reset();
  };

  return (
    <div className="text-center my-10 px-4">
      <p className="text-2xl font-semibold text-gray-800">
        Subscribe now and get 20% off
      </p>
      <p className="text-gray-500 mt-3 max-w-xl mx-auto">
        Be the first to know about our new arrivals, exclusive offers, and much more.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 max-w-xl mx-auto p-4 rounded-md"
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full sm:flex-1 px-4 py-2 rounded outline-none"
          required
        />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 px-4 py-2 rounded outline-none"
          required
        />

        <button
          type="submit"
          className="bg-black text-white text-sm px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
