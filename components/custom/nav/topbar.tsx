import { Icon } from "@iconify/react";

const Topbar = () => {
  return (
    <div className="fixed w-full bg-input p-2 flex items-center justify-end">
      <div className="bg-input p-2 rounded-xl space-x-3">
        <input type="text" />
        <Icon icon="carbon:search" />
      </div>
    </div>
  );
};

export default Topbar;
