const WelcomePage = ({ onFetchPost }) => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <div className="col-lg-6 mx-auto">
          <h1>No Post Available</h1>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              onClick={onFetchPost}
            >
              Fetch From Server
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
