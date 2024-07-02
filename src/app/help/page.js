"use client";
import React, { useState, Fragment } from "react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

export default function Page() {
  const [openQuestionCategory, setOpenQuestionCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestionCategory = (category) => {
    setOpenQuestionCategory(openQuestionCategory === category ? null : category);
    setOpenQuestion(null); // Close any open subquestion when a new question category is opened
  };

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <Fragment>
      <section className="flex items-center justify-center p-5">
        <div className="whitePaper max-w-4xl w-full mx-auto bg-white shadow-md rounded-md p-5">
          <p
            style={{ fontFamily: pacifico.style.fontFamily }}
            className="text-2xl text-center text-gray-800 mb-2"
          >
            Help & Support
          </p>
          <ul className="space-y-4 text-black">
            <li className="cursor-pointer">
              <div
                onClick={() => toggleQuestionCategory("question1")}
                className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Question 1
              </div>
              {openQuestionCategory === "question1" && (
                <ul className="pl-5 mt-2 space-y-2">
                  <li
                    onClick={() => toggleQuestion("subquestion1-1")}
                    className="cursor-pointer p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-sm font-normal"
                  >
                    Subquestion 1
                  </li>
                  {openQuestion === "subquestion1-1" && (
                    <p className="pl-5 text-xs text-gray-500">
                      Details for Subquestion 1
                    </p>
                  )}
                  <li
                    onClick={() => toggleQuestion("subquestion1-2")}
                    className="cursor-pointer p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-sm font-normal"
                  >
                    Subquestion 2
                  </li>
                  {openQuestion === "subquestion1-2" && (
                    <p className="pl-5 text-xs text-gray-500">
                      Details for Subquestion 2
                    </p>
                  )}
                  <li
                    onClick={() => toggleQuestion("subquestion1-3")}
                    className="cursor-pointer p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-sm font-normal"
                  >
                    Subquestion 3
                  </li>
                  {openQuestion === "subquestion1-3" && (
                    <p className="pl-5 text-xs text-gray-500">
                      Details for Subquestion 3
                    </p>
                  )}
                </ul>
              )}
            </li>
            <li className="cursor-pointer">
              <div
                onClick={() => toggleQuestionCategory("question2")}
                className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Question 2
              </div>
              {openQuestionCategory === "question2" && (
                <ul className="pl-5 mt-2 space-y-2">
                  <li
                    onClick={() => toggleQuestion("subquestion2-1")}
                    className="cursor-pointer p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-sm font-normal"
                  >
                    Subquestion 1
                  </li>
                  {openQuestion === "subquestion2-1" && (
                    <p className="pl-5 text-xs text-gray-500">
                      Details for Subquestion 1
                    </p>
                  )}
                  <li
                    onClick={() => toggleQuestion("subquestion2-2")}
                    className="cursor-pointer p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-sm font-normal"
                  >
                    Subquestion 2
                  </li>
                  {openQuestion === "subquestion2-2" && (
                    <p className="pl-5 text-xs text-gray-500">
                      Details for Subquestion 2
                    </p>
                  )}
                  <li
                    onClick={() => toggleQuestion("subquestion2-3")}
                    className="cursor-pointer p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-sm font-normal"
                  >
                    Subquestion 3
                  </li>
                  {openQuestion === "subquestion2-3" && (
                    <p className="pl-5 text-xs text-gray-500">
                      Details for Subquestion 3
                    </p>
                  )}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
}
