'use client';
import React from 'react';
import EmblaCarousel from '../../components/emblaCarousel';
import '../../styles/embla.css'; // Ensure your Embla styles are included
import Image from 'next/image';
import PageContainer from '../../components/PageContainer';

const SLIDES = [
  '/images/gripper-(1).jpg',
  '/images/gripper-(2).png',
  '/images/gripper-(3).png',
  '/images/gripper-(4).png',
  '/images/gripper-(5).png',
];

const OPTIONS = { loop: true }; // Embla carousel options

const Home: React.FC = () => {
  return (
    <PageContainer className="bg-white text-gray-900">
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Underactuated Gripper
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            A cutting-edge robotic gripper that mimics human dexterity to securely grasp objects
            of various shapes and sizes with minimal actuation.
          </p>
        </div>
        <div className="mt-12 w-full relative aspect-w-16 aspect-h-9">
          <Image
            src="/images/gripper-(1).jpg"
            alt="Underactuated Gripper"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center lg:text-left">
            About the Underactuated Gripper
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            The underactuated gripper is an innovative robotic device designed to securely grasp
            and manipulate objects of varying shapes, sizes, and materials. Inspired by the
            natural dexterity of the human hand, the gripper utilizes flexible joints and
            minimal actuation to achieve high functionality with reduced complexity.
          </p>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            This project leverages advanced engineering techniques and cutting-edge materials to
            create a versatile gripper suitable for grasping objects from washers through to drills. 
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center lg:text-left">
            Key Features
          </h2>
          <ul className="mt-8 space-y-4 text-lg text-gray-600">
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Adaptive gripping mechanism that conforms to objects of various shapes and sizes.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Underactuated design requiring fewer motors and actuators, reducing cost and complexity.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Lightweight construction using high-strength materials for durability and precision.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Versatile applications in industrial automation, prosthetics, and service robots.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-500 font-semibold">•</span>
              <p>Modular design enabling easy customization and integration into robotic systems.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </section>
    </main>
    </PageContainer>
  );
};

export default Home;
