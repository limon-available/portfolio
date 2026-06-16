// Featured projects. `slug` is the stable key used by the comments/ratings API
// and MUST match server/src/utils/projects.js.
export const projects = [
  {
    slug: "mern-ecommerce",
    title: "MERN E-Commerce Website",
    desc: "A full-featured online store with product catalog, cart, Stripe checkout, JWT authentication, and a complete admin dashboard for managing orders and products.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    link: "https://ecommerce-tdcn.onrender.com",
    accent: "from-brand-500/20 to-accent-500/20",
  },
  {
    slug: "realtime-chat",
    title: "Real-Time Chat Application",
    desc: "A real-time messaging app built on the MERN stack with Socket.io for instant delivery, Redux Toolkit for state, and a responsive Tailwind UI.",
    tech: ["MERN", "Socket.io", "Redux Toolkit", "Tailwind CSS"],
    link: "https://chatting-application-ruddy-beta.vercel.app/",
    accent: "from-emerald-500/20 to-accent-500/20",
  },
  {
    slug: "multivendor-dashboard",
    title: "Multi-Vendor E-Commerce Dashboard",
    desc: "An admin dashboard for a multi-vendor marketplace featuring vendor management, order management, and an analytics dashboard for sales insights.",
    tech: ["React", "Vendor Mgmt", "Analytics", "REST APIs"],
    link: "https://multi-vendor-dashboard-ecommerce.vercel.app/",
    accent: "from-violet-500/20 to-brand-500/20",
  },
  {
    slug: "multivendor-frontend",
    title: "Multi-Vendor E-Commerce Frontend",
    desc: "The customer-facing storefront for the multi-vendor marketplace with smooth product browsing and a fully responsive UI.",
    tech: ["React", "Tailwind CSS", "Responsive UI"],
    link: "https://frontend-mern-multi-vendor-ecommerc.vercel.app/",
    accent: "from-pink-500/20 to-brand-500/20",
  },
];
