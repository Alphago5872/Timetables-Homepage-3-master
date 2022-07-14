import react from "react";



function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export default function GlanceBox() {
  return (
    <div className="glanceBox">
      
      <div>
        <Box
          style={{
            backgroundColor: "rgba(0, 102, 255, 0.7)",
            borderRadius: 4,
            color: "rgba(255, 255, 255, 1)",
            minHeight: 200,
            padding: 12,
            width: "var(--glance-box-width)",
          }}
        >
          <div className="glance__current">
            <h2 className="glance__current--subheading">Current Class:</h2>
            <h3 className="glance__current--class">
              {/* {currentClass} */}
              Introduction to CS50x
            </h3>
            <i class="bx bx-laptop"></i>
            <button className="button__button1">View in Timetable</button>
          </div>
        </Box>
      </div>

      <div>
        <Box
          style={{
            backgroundColor: "rgba(255, 61, 0, 0.7)",
            borderRadius: 4,
            color: "rgba(255, 255, 255, 1)",
            minHeight: 200,
            padding: 12,
            width: "var(--glance-box-width)",
            marginLeft: "51%",
            marginTop: "-200px",
          }}
        >
          <div className="glance__next">
            <h2 className="glance__next--subheading">Next Class:</h2>
            <h3 className="glance_next--class">
              {/* {nextClass} */}
              Aviation 101
            </h3>
            <i class="bx bxs-plane-alt"></i>
          </div>
        </Box>
      </div>
    </div>
  );
}
