module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8000/:path*",
      },
    ];
  },
};

//Below property is to import images from a static folder i.e. outside public directory...
// const withImages = require("next-images");
// module.exports = withImages();
