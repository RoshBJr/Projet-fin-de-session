"use client";
import Link from "next/link";

interface Props {
  style: string;
}

function AccountIcon({ style }: Props) {
  return (
    <Link
      onClick={() => {
        const drawer = document.querySelector("._drawer");
        drawer?.classList.remove("show");
      }}
      href="/login"
      className="btn btn-ghost btn-circle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${style}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    </Link>
  );
}

export default AccountIcon;
