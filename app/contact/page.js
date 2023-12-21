"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    countryCode: "+1",
    phoneNumber: "",
    budget: "",
    message: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    setError(null);
    try {
      if (!form.company) {
        setError({
          title: "Please enter your company name",
          message: "You must enter your company name to submit this form.",
        });
        return;
      }

      if (!form.email) {
        setError({
          title: "Please enter your email",
          message: "You must enter your email to submit this form.",
        });
        return;
      }

      // check if email is valid
      if (!/\S+@\S+\.\S+/.test(form.email)) {
        setError({
          title: "Please enter a valid email",
          message: "You must enter a valid email to submit this form.",
        });
      }

      // create a POST request to contact/api with data from the form stringified
      const response = await fetch("/contact/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // check if response is ok
      if (!response.ok) {
        throw new Error("Could not submit form");
      }

      // show success message
      setSuccess({
        title: "Request submitted",
        message: "We will be in touch soon.",
      });
    } catch (error) {
      setError({
        title: "Could not submit form",
        message: "Please try again later.",
      });
    }
  };

  return (
    <div className="isolate px-6 py-12 lg:px-8 border-t border-black/10">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-xl">
          <a
            className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-900"
            href="/"
          >
            <ChevronLeftIcon className="h-4 w-4 mr-1" /> Back
          </a>
          <h3 className="text-xl font-bold text-slate-900 mt-10">Contact us</h3>
          <p className="mt-2 text-md leading-6 text-gray-600">
            Fill out the form below and tell us about your project. We will get
            back to you as soon as possible.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-xl mb-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email*
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number*
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    onChange={handleChange}
                    id="country"
                    name="countryCode"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="+1">United States (+1)</option>
                    <option value="+33">France (+33)</option>
                    <option value="+44">United Kingdom (+44)</option>
                    <option value="+49">Germany (+49)</option>
                    <option value="+34">Spain (+34)</option>
                    <option value="+39">Italy (+39)</option>
                    <option value="+972">Israel (+972)</option>
                    <option value="+216">Tunisia (+216)</option>
                  </select>
                  <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  onChange={handleChange}
                  type="tel"
                  name="phoneNumber"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-48 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="budget"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Project budget (estimate)
              </label>
              <div className="mt-2.5">
                <select
                  onChange={handleChange}
                  id="budget"
                  name="budget"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                >
                  <option value="">Select an option</option>
                  <option value="0-10000">$0-10,000</option>
                  <option value="10000-50000">$10,000-50,000</option>
                  <option value="50000-100000">$50,000-100,000</option>
                  <option value="100000-250000">$100,000-250,000</option>
                  <option value="250000+">$250,000+</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  onChange={handleChange}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          {error && (
            <div className="mt-5 -mb-5">
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-5 w-5 text-red-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      {error.title}
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>{error.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {success && (
            <div className="mt-5">
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      {success.title}
                    </h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>{success.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!success && (
            <div className="mt-10">
              <button
                onClick={onSubmit}
                className="block w-full rounded-md bg-slate-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let&apos;s talk
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
