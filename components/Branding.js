// Create component to display branding page

const Branding = () => {
  return (
    <>
      <h2 className="topText">FANEX</h2>

      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div className="leftSideText">
        <h3>  DIGITAL FAN <span>ENGAGEMENT</span> PARTNER</h3>
        </div>
        <div className="rightSideText">
         <h3>Tech
          <div>
            Mahindra
          </div>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Branding;
