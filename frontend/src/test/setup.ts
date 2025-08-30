import "@testing-library/jest-dom";
import React from "react";

// Mock Swiper modules
vi.mock("swiper/react", () => ({
  Swiper: ({ children, className, ...props }: any) =>
    React.createElement(
      "div",
      { className, "data-testid": "swiper", ...props },
      children
    ),
  SwiperSlide: ({ children, ...props }: any) =>
    React.createElement(
      "div",
      { "data-testid": "swiper-slide", ...props },
      children
    ),
}));

vi.mock("swiper/modules", () => ({
  Autoplay: {},
  Navigation: {},
  Pagination: {},
}));

// Mock Swiper CSS imports
vi.mock("swiper/css", () => ({}));
vi.mock("swiper/css/navigation", () => ({}));
vi.mock("swiper/css/pagination", () => ({}));

// Mock image imports
vi.mock("../assets/ad1.png", () => ({
  default: {
    src: "/mock-ad1.png",
    width: 400,
    height: 300,
    format: "png",
  },
}));

vi.mock("../assets/ad2.png", () => ({
  default: {
    src: "/mock-ad2.png",
    width: 400,
    height: 300,
    format: "png",
  },
}));

vi.mock("../assets/ad3.png", () => ({
  default: {
    src: "/mock-ad3.png",
    width: 400,
    height: 300,
    format: "png",
  },
}));

vi.mock("../assets/ad4.png", () => ({
  default: {
    src: "/mock-ad4.png",
    width: 400,
    height: 300,
    format: "png",
  },
}));

// Mock window.matchMedia for responsive tests
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
