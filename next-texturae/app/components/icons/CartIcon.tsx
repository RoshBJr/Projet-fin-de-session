import { cookies } from "next/headers";
import Link from "next/link";

function CartIcon() {
  const cart = cookies().get('cart')?.value;
  return (
    <Link href={'/panier'} className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="md:w-5 md:h-5 min-[320px]:w-[20px] min-[320px]:h-[20px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        {
          cart && JSON.parse(cart).length !== 0 ?
          <span className="badge badge-sm border-thistle bg-thistle indicator-item text-davys-gray font-font-titre text-md">{cart && JSON.parse(cart).length}</span>
          :
          ""
        }
      </div>
    </Link>
  );
}

export default CartIcon;
