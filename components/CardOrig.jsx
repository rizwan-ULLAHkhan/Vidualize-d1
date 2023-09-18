import React from 'react';

const Card = () => {
  return (
    <div >
        <a
  className="lc-card-flip h-[14.625rem] sm:h-[21.25rem]"
  href="https://bits.nexo.com/courses/ethereum/how-to-buy-ethereum"
  ontouchstart="this.classList.toggle('hover');"
>
  <div
    className="lc-card-front lc-rounded-md flex flex-col flex-grow items-center justify-between gap-24 p-14 sm:p-16 md:p-24 bg-primary"
    data-animated-card=""
  >
    <img
      className="absolute inset-0 w-full h-full mix-blend-overlay object-cover"
      draggable="false"
      src="/learning-center/content/halftones.png"
      alt=""
    />
    <div className="flex items-center gap-4 sm:gap-6 text-dark">
      <i className="o-icon o-icon--learning-center">
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0.5L7.35505 1.4595C8.32972 4.09352 10.4065 6.17028 13.0405 7.14495L14 7.5L13.0405 7.85505C10.4065 8.82972 8.32972 10.9065 7.35505 13.5405L7 14.5L6.64495 13.5405C5.67028 10.9065 3.59352 8.82972 0.959498 7.85505L0 7.5L0.959499 7.14495C3.59352 6.17028 5.67028 4.09352 6.64495 1.4595L7 0.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </i>{" "}
      <span className="px-6 sm:px-10 py-4 text-10 sm:text-12 leading-100 font-bold tracking-[0.0468rem] uppercase border-1 border-solid border-indigo-800 rounded-full text-indigo-800">
        Ethereum{" "}
      </span>
      <i className="o-icon o-icon--learning-center">
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0.5L7.35505 1.4595C8.32972 4.09352 10.4065 6.17028 13.0405 7.14495L14 7.5L13.0405 7.85505C10.4065 8.82972 8.32972 10.9065 7.35505 13.5405L7 14.5L6.64495 13.5405C5.67028 10.9065 3.59352 8.82972 0.959498 7.85505L0 7.5L0.959499 7.14495C3.59352 6.17028 5.67028 4.09352 6.64495 1.4595L7 0.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </i>
    </div>
    <h3 className="text-18 sm:text-24 leading-115 font-bold font-serif text-indigo-800 text-center lining-nums">
      How to Buy Ethereum?{" "}
    </h3>
    <div className="flex group-hover:hidden items-center gap-12 text-indigo-800">
      <span class="text-10 sm:text-12 font-bold leading-120 uppercase">
        8 cards{" "}
      </span>
    </div>
  </div>
  <div className="lc-card-back lc-rounded-md flex flex-col flex-grow items-center justify-between gap-24 p-14 sm:p-16 md:p-24 bg-dark">
    <img
      className="absolute inset-0 w-full h-full mix-blend-overlay object-cover"
      draggable="false"
      src="/learning-center/content/halftones.png"
      alt=""
    />
    <div className="flex items-center gap-4 sm:gap-6 text-white">
      <i className="o-icon o-icon--learning-center">
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0.5L7.35505 1.4595C8.32972 4.09352 10.4065 6.17028 13.0405 7.14495L14 7.5L13.0405 7.85505C10.4065 8.82972 8.32972 10.9065 7.35505 13.5405L7 14.5L6.64495 13.5405C5.67028 10.9065 3.59352 8.82972 0.959498 7.85505L0 7.5L0.959499 7.14495C3.59352 6.17028 5.67028 4.09352 6.64495 1.4595L7 0.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </i>{" "}
      <span className="px-6 sm:px-10 py-4 text-8 sm:text-12 leading-100 font-bold tracking-[0.0468rem] uppercase border-1 border-solid border-white rounded-full text-white">
        Ethereum{" "}
      </span>
      <i className="o-icon o-icon--learning-center">
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0.5L7.35505 1.4595C8.32972 4.09352 10.4065 6.17028 13.0405 7.14495L14 7.5L13.0405 7.85505C10.4065 8.82972 8.32972 10.9065 7.35505 13.5405L7 14.5L6.64495 13.5405C5.67028 10.9065 3.59352 8.82972 0.959498 7.85505L0 7.5L0.959499 7.14495C3.59352 6.17028 5.67028 4.09352 6.64495 1.4595L7 0.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </i>
    </div>
    <h3 className="text-18 sm:text-24 leading-115 font-bold font-serif text-white text-center lining-nums">
      How to Buy Ethereum?{" "}
    </h3>

    <span class="group relative inline-flex items-center gap-8 -my-14 py-14 text-14 md:text-16 font-medium leading-100 text-white">
      {" "}
      Start Learning
      <span className="w-18 md:w-26 h-18 md:h-26 flex items-center justify-center rounded-full text-8 md:text-12 bg-white text-dark group-hover:translate-x-4 transition-transform duration-1 ease-1">
        <i className="o-icon o-icon--learning-center">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.55386 0.969024C4.34648 1.18176 4.36721 1.50085 4.55386 1.71358L7.06323 4.13872H1.11125C0.820912 4.13872 0.613525 4.37272 0.613525 4.64927V5.33001C0.613525 5.62784 0.820912 5.84057 1.11125 5.84057H7.06323L4.55386 8.28697C4.36721 8.49971 4.36721 8.8188 4.55386 9.03153L5.01011 9.49954C5.2175 9.691 5.52858 9.691 5.71522 9.49954L9.75925 5.35129C9.9459 5.15983 9.9459 4.84073 9.75925 4.628L5.71522 0.501015C5.52858 0.309557 5.2175 0.309557 5.01011 0.501015L4.55386 0.969024Z"
              fill="currentColor"
            ></path>
          </svg>
        </i>
      </span>
    </span>
  </div>
</a>;

    </div>
  );
};

export default Card;
