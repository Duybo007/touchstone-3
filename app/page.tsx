export default function Home() {
  return (
    <div>
      <div>
        <img
          className=" w-full"
          src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="flex">
        <div className="w-1/3 text-center py-5 border px-3">
          <h6 className="text-xl">Personalized Training Plans</h6>
          <p>
            Get tailored workout routines that align with your fitness goals,
            whether you're aiming to lose weight, build muscle, or improve
            overall health.
          </p>
        </div>
        <div className="w-1/3 text-center py-5 border px-3">
          <h6 className="text-xl">Expert Trainers & Support</h6>
          <p>
            Work with certified fitness professionals who provide guidance,
            motivation, and ongoing support to help you stay on track.
          </p>
        </div>
        <div className="w-1/3 text-center py-5 border px-3">
          <h6 className="text-xl">Community & Motivation</h6>
          <p>
            Join a vibrant fitness community that inspires and motivates you to
            push your limits and celebrate your progress together.
          </p>
        </div>
      </div>

      <div className="pt-8 text-center">
        <h1 className="text-2xl text-bold pb-4">Group Fitness Classes</h1>
        <img
          className="w-full object-cover h-32"
          src="https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Our Trainers</h1>
        <div className="flex justify-between">
          <img
            className="w-40 h-64 object-cover"
            src="https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="w-40 h-64 object-cover"
            src="https://images.unsplash.com/photo-1600881333167-dbb33a5dcfda?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="w-40 h-64 object-cover"
            src="https://images.unsplash.com/photo-1532384816664-01b8b7238c8d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="w-40 h-64 object-cover"
            src="https://plus.unsplash.com/premium_photo-1674059550127-91a5aa9d1195?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="w-40 h-64 object-cover"
            src="https://images.unsplash.com/photo-1590556409454-198422ea5d54?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      <div className="pb-5 flex justify-between">
        <div className="p-8 border w-1/3">
          <p>
            &quot;I've never felt stronger or more confident! The trainers are
            supportive, and the classes are so much fun. Highly recommend!&quot;
          </p>
          <div className="pt-4 flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-full w-12 h-12 object-cover"
            />
            <div>Sarah M.</div>
          </div>
        </div>

        <div className="p-8 border w-1/3">
          <p>
            &quot;Joining this studio transformed my fitness journey. The
            community is incredible, and I look forward to every session.&quot;
          </p>
          <div className="pt-4 flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-full w-12 h-12 object-cover"
            />
            <div>James T.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
