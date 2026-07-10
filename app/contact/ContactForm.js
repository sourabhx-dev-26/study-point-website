"use client";

import { useState } from "react";

const supportTopics = [
  "Payment issue",
  "Content access issue",
  "PDF not opening",
  "Mock test issue",
  "Refund request",
];

export default function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Please email us at support@stackforge.tech with your issue details.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Name</span>
          <input
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            name="name"
            placeholder="Your name"
            type="text"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Email</span>
          <input
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            name="email"
            placeholder="you@example.com"
            type="email"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-slate-700">
          Support topic
        </span>
        <select
          className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          name="topic"
          defaultValue="Payment issue"
        >
          {supportTopics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </label>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-slate-700">
          Issue details
        </span>
        <textarea
          className="mt-2 min-h-36 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          name="message"
          placeholder="Briefly describe the issue."
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
      >
        Submit
      </button>

      {message ? (
        <p className="mt-5 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm font-semibold text-blue-800">
          {message}
        </p>
      ) : null}
    </form>
  );
}
