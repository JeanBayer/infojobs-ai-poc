const Loading = () => {
  return (
    <div className="border border-blue-300 shadow  card w-96">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-6 card-body">
          {/* <div className="space-y-3"> */}
          <div className="grid grid-cols-3 gap-4">
            <div className="h-3 bg-slate-700 rounded col-span-2"></div>
            <div className="h-3 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div className="h-3 bg-slate-700 rounded"></div>
          <div className="divider"></div>
          <div className="bg-slate-700 rounded w-full btn"></div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Loading;
