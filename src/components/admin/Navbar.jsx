import { Menu, Bell } from 'lucide-react';

const Navbar = ({ onMenuToggle }) => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
          onClick={onMenuToggle}
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>
        <div>
          <p className="text-xs text-gray-500">Logged in as</p>
          <p className="text-sm font-semibold text-gray-900">System Admin</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Notifications">
          <Bell size={18} className="text-gray-600" />
        </button>
        <div className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-full">
          <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-semibold">
            SA
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500">Platform Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

