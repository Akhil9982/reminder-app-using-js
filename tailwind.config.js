// This file is strictly for extending Tailwind's default theme if necessary.
// If using the CDN in development, you can map this to tailwind.config object directly.

tailwind.config = {
  theme: {
    extend: {
      // Optional: Add custom utility classes here if Tailwind defaults are insufficient
      boxShadow: {
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
};
