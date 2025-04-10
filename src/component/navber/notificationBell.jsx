import { Bell } from "lucide-react";

export default function NotificationBell() {
	return (
	  <div className="relative inline-block">
		<div className="rounded-full bg-blue-100 p-3">
		  <Bell className="text-blue-900 w-4 h-4" />
		</div>
		<span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-900 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
		  9
		</span>
	  </div>
	);
  }