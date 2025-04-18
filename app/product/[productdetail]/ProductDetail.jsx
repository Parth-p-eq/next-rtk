"use client";
import { useDetailProductQuery } from "@/app/api/product/productApi";
import React from "react";

const ProductDetail = ({ params }) => {
  const resolvedParams = React.use(params);
  const id = resolvedParams.productdetail;
  //   console.log(id);
  const { data, error, isLoading } = useDetailProductQuery(id);
  //   console.log(data);
  if (isLoading)
    return (
      <div className=" h-[100vh] flex justify-center items-center">
        <div
          aria-label="Loading..."
          role="status"
          className="flex items-center space-x-2"
        >
          <svg
            className="h-20 w-20 animate-spin stroke-gray-500"
            viewBox="0 0 256 256"
          >
            <line
              x1="128"
              y1="32"
              x2="128"
              y2="64"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="224"
              y1="128"
              x2="192"
              y2="128"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="128"
              y1="224"
              x2="128"
              y2="192"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="32"
              y1="128"
              x2="64"
              y2="128"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
          </svg>
          <span className="text-4xl font-medium text-gray-500">Loading...</span>
        </div>
      </div>
    );
  if (error || !data) return <div>Error loading post or post not found.</div>;
  return (
    <div>
      <section className="productdetail-section py-5 px-30 md:px-6 max-sm:px-6">
        <div className="productdetail-section-wrapper">
          <div className="2xl:container mx-auto py-10">
            <div className="col-span-12 p-5 max-sm:px-2 flex justify-center border-1 rounded-xl border-[#0000001F]">
              <div className="card w-full" key={data.id}>
                <div className="p-4 max-sm:p-2 gap-20 grid grid-cols-2 max-sm:grid max-sm:grid-cols-1 items-center">
                  <div className="image flex justify-center">
                    {!data.image ? (
                      <div className="spinner">
                        <span className="loader"></span>
                      </div>
                    ) : (
                      <img
                        src={data.image}
                        className="w-[50%] h-[50%]"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="detail flex flex-col gap-3">
                    <h4 className="text-[28px] font-semibold">{data.title}</h4>
                    <p className="text-gray-700 text-[20px]">
                      {data.description}
                    </p>
                    <h5 className="text-xl font-semibold">
                      Price: $ {data.price}
                    </h5>
                    {/* <h5 className="flex flex-wrap items-center text-xl font-semibold">
                      Rating: {data.rating} / 5
                      <ReactStars
                            count={5}
                            size={24}
                            value={data.rating}
                            color2={"#ffd700"}
                          />
                    </h5> */}
                    <h5>
                      Stock: {data.availabilityStatus} ({data.stock} datas left)
                    </h5>
                    <h5>Brand: {data.brand}</h5>
                    {/* <h5>Return Policy: {data.returnPolicy}</h5> */}
                    {/* <h5>Warranty: {data.warrantyInformation}</h5> */}
                    {/* <div className="dimension flex flex-wrap">
                      <h5>Dimensions: &nbsp;</h5>
                      <p>
                        {data.dimensions.width}cm x{" "}
                        {data.dimensions.height}
                        cm x {data.dimensions.depth}cm
                      </p>
                    </div> */}
                    <button className="btn mt-3 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                      Buy now
                    </button>
                  </div>
                  {/* <div className="other-detail mt-5">
                    <div className="heading">
                      <h3 className="text-2xl font-semibold">Review</h3>
                    </div>
                    <div className="flex flex-col gap-1">
                      {data.reviews.map((review, index) => (
                        <div
                          className="review p-4 flex flex-col gap-2 my-4 bg-gray-100 rounded-md"
                          key={index}
                        >
                          <h5 className="flex flex-wrap items-center text-lg">
                            {review.reviewerName} &nbsp;
                            <ReactStars
                                  count={5}
                                  size={24}
                                  value={review.rating}
                                  color2={"#ffd700"}
                                />
                          </h5>
                          <h5 className="flex flex-wrap items-center text-lg">
                            Rationg : {review.rating} / 5
                          </h5>
                          <p className="text-sm text-gray-500">
                            Date: {review.date}
                          </p>
                          <h5 className="text-gray-700">
                            Comments: {review.comment}
                          </h5>
                        </div>
                      ))}
                    </div>
                  </div> */}
                  {/* <div className="qrData flex justify-end max-sm:justify-center">
                    <div
                      className="flex flex-col justify-flex-end gap-2 my-4"
                      key={data}
                    >
                      <img
                        src={data.meta.qrCode}
                        alt=""
                      />
                      <p>Barcode number: {data.meta.barcode}</p>
                      <h5>MFG Date: {data.meta.createdAt}</h5>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

export const generateStaticParams = async () => {
  const product = await ServerProduct();
  return product.map((item) => ({
    productdetail: item.id.toString(),
  }));
};
