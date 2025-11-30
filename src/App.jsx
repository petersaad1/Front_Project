import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faCode } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <FontAwesomeIcon icon={faCode} className="text-blue-600" />
            Vite + React + Tailwind + shadcn/ui
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A complete modern web development setup with Vite, React, Tailwind
            CSS, shadcn/ui components, and Font Awesome icons.
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-red-500 text-2xl mr-3"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Tailwind CSS
              </h3>
            </div>
            <p className="text-gray-600">
              Utility-first CSS framework for rapid UI development with modern
              design patterns.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500 text-2xl mr-3"
              />
              <h3 className="text-xl font-semibold text-gray-900">shadcn/ui</h3>
            </div>
            <p className="text-gray-600">
              Beautifully designed, accessible React components built with Radix
              UI and Tailwind CSS.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faCode}
                className="text-blue-500 text-2xl mr-3"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Font Awesome
              </h3>
            </div>
            <p className="text-gray-600">
              Comprehensive icon library with thousands of icons for your web
              projects.
            </p>
          </div>
        </div>

        {/* Interactive Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Interactive Components Demo
          </h2>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button variant="default" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faHeart} />
              Default Button
            </Button>

            <Button variant="secondary" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faStar} />
              Secondary Button
            </Button>

            <Button variant="outline" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCode} />
              Outline Button
            </Button>

            <Button variant="destructive" size="lg">
              Large Destructive Button
            </Button>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Tech Stack Features:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-green-500 mr-2"
                />
                Vite for lightning-fast development and building
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2" />
                React 19 with modern hooks and features
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-yellow-500 mr-2"
                />
                Tailwind CSS for rapid styling
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCode} className="text-blue-500 mr-2" />
                shadcn/ui components with Radix UI primitives
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600">
          <p className="flex items-center justify-center gap-2">
            Made with{" "}
            <FontAwesomeIcon icon={faHeart} className="text-red-500" /> using
            modern web technologies
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
