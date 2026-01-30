import React, { useContext } from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import newContext from '../Context/context';

export default function Footer() {
  const ctx = useContext(newContext);
  const user =
    ctx && ctx.user ? ctx.user : { email: '', password: '', isLoggedIn: false };

  return (
    <div className="App-footer flex justify-center items-center border-t-4 border-[color:var(--main-color)] w-full mt-auto py-2">
      <p className="italic text-xl p-1 text-center max-[520px]:text-lg max-[520px]:p-0 max-[450px]:text-[16px] max-[375px]:text-[15px]">
        Copyright {getCurrentYear()} - {getFooterCopy(false)}
      </p>
      {user.isLoggedIn && (
        <p className="ml-4">
          <a href="#contact">Contact us</a>
        </p>
      )}
    </div>
  );
}
