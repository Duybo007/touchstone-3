import React from "react";

function page() {
  return (
    <div className="h-screen">
      <h1 className="text-3xl">Sense of Community</h1>

      <div className=" flex flex-wrap gap-4">
        <div className="w-1/4 p-5 border">
          <img
            src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="pt-2">Member Spotlight</p>
          <div className="flex justify-between items-center pt-2">
            <div>$140</div>
            <div className="border px-4 py-2">Learn More</div>
          </div>
        </div>

        <div className="w-1/4 p-5 border">
          <img
            src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="pt-2">Community Involvement</p>
          <div className="flex justify-between items-center pt-2">
            <div>$140</div>
            <div className="border px-4 py-2">Learn More</div>
          </div>
        </div>

        <div className="w-1/4 p-5 border">
          <img
            src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="pt-2">
            Upcoming Event
          </p>
          <div className="flex justify-between items-center pt-2">
            <div>$140</div>
            <div className="border px-4 py-2">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
