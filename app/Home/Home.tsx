"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Avatar 2",
      image: "/movie1.webp",
      genre: "Sci-Fi, Adventure",
    },
    {
      id: 2,
      title: "The Dark Knight",
      image: "/movie2.webp",
      genre: "Action, Drama",
    },
    {
      id: 3,
      title: "Inception",
      image: "/movie3.webp",
      genre: "Sci-Fi, Action",
    },
  ];

  // Auto-rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Manual navigation with wrap-around
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <div className="min-h-screen px-2">
      {/* Hero Carousel with updated height */}
      <div className="relative mt-4 mb-4 h-[40vh] md:h-[60vh]">
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

          {/* Carousel Image */}
          <Image
            src={heroSlides[activeSlide].image}
            alt="Hero"
            fill
            className="object-cover transition-transform duration-500"
            priority
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="relative z-20 container mx-auto flex h-full items-end px-4 pb-8">
          <div className="max-w-2xl">
            <h1 className="mb-2 text-2xl font-bold text-white md:text-4xl">
              {heroSlides[activeSlide].title}
            </h1>
            <div className="flex items-center text-white/80">
              <span>{heroSlides[activeSlide].genre}</span>
            </div>
          </div>
        </div>
        {/* Carousel Navigation */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === activeSlide ? "w-8 bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* New Ad Banner after Carousel */}
      <div className="container mx-auto mb-8 px-4">
        <div className="relative h-[120px] w-full overflow-hidden rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-600">
          <div className="absolute inset-0 bg-[url('/ad-pattern.png')] opacity-10"></div>
          <div className="relative flex h-full items-center justify-between px-6">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold text-white">
                Premium Access
              </h3>
              <p className="text-sm text-slate-300">
                Watch all movies in 4K quality
              </p>
            </div>
            <button className="rounded-lg bg-white/10 px-6 py-2 text-white backdrop-blur-sm transition-all hover:bg-white/20">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Trending Now - Horizontal Scroll */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 flex items-center text-xl font-bold text-slate-800 dark:text-slate-100">
            <svg
              className="mr-2 h-5 w-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z" />
            </svg>
            Trending Now
          </h2>
          <div className="relative">
            <div className="no-scrollbar flex space-x-4 overflow-x-auto pb-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="w-48 flex-none">
                  <div className="group relative aspect-[2/3] overflow-hidden rounded-lg">
                    <Image
                      src={`/movie${i + 1}.webp`}
                      alt="Movie poster"
                      fill
                      className="transform object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="absolute bottom-0 p-4">
                        <h3 className="font-medium text-white">Movie Title</h3>
                        <p className="text-sm text-white/80">2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Movies Slider */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-slate-800 dark:text-slate-100">
          Featured Movies
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative">
              <div className="aspect-[2/3] overflow-hidden rounded-lg bg-slate-300 dark:bg-slate-700">
                <Image
                  src={`/movie${item}.webp`}
                  alt="Movie poster"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <h3 className="text-sm font-medium text-white">
                  Movie Title {item}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mid-page Ad */}
      <div className="mb-8 h-[100px] w-full rounded-xl bg-slate-200 dark:bg-slate-800">
        <div className="flex h-full w-full items-center justify-center text-slate-400">
          Advertisement (1200x100)
        </div>
      </div>

      {/* Main Content with Sidebar - Fixed Structure */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Latest Movies Grid */}
        <div className="flex-1">
          <h2 className="mb-4 text-xl font-bold text-slate-800 dark:text-slate-100">
            Latest Movies
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Link href={`/movie/${item}`} key={item} className="group">
                <div className="relative mb-2 aspect-[2/3] overflow-hidden rounded-lg bg-slate-300 dark:bg-slate-700">
                  <Image
                    src={`/movie${item}.webp`}
                    alt="Movie poster"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 rounded bg-slate-900/80 px-2 py-1 text-xs text-white">
                    HD
                  </div>
                </div>
                <h3 className="font-medium text-slate-800 dark:text-slate-100">
                  Movie Title {item}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  2024 • Action
                </p>
              </Link>
            ))}
          </div>

          <button className="mt-6 w-full rounded-lg bg-slate-800 py-3 text-white transition-colors hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">
            Load More
          </button>
        </div>

        {/* Sidebar with Ads - Fixed Structure */}
        <div className="space-y-6 lg:w-[300px]">
          <div className="sticky top-20 space-y-6">
            {/* Sticky Ad */}
            <div className="h-[600px] w-full rounded-xl bg-slate-200 dark:bg-slate-800">
              <div className="flex h-full w-full items-center justify-center text-slate-400">
                Sidebar Ad (300x600)
              </div>
            </div>

            {/* Categories */}
            <div className="rounded-xl bg-white p-4 dark:bg-slate-800">
              <h3 className="mb-4 text-lg font-bold text-slate-800 dark:text-slate-100">
                Categories
              </h3>
              <div className="space-y-2">
                {["Action", "Comedy", "Drama", "Horror"].map((category) => (
                  <Link
                    key={category}
                    href={`/category/${category.toLowerCase()}`}
                    className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    <span className="text-slate-700 dark:text-slate-300">
                      {category}
                    </span>
                    <span className="rounded-full bg-slate-200 px-2 py-1 text-xs text-slate-600 dark:bg-slate-600 dark:text-slate-300">
                      99+
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="my-8 h-[250px] w-full rounded-xl bg-slate-200 dark:bg-slate-800">
        <div className="flex h-full w-full items-center justify-center text-slate-400">
          Advertisement (1200x250)
        </div>
      </div>
    </div>
  );
}

export default Home;
