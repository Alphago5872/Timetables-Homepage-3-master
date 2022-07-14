import react from "react";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export default function NewsBox() {
  return (
    <div>
      <div className="box">
        <div>
          <h1>Now Opening!!! 9th Floor Campus</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
            rhoncus ante. Curabitur bibendum libero mi, non tincidunt mauris
            vestibulum eget. Mauris bibendum ipsum vel vulputate commodo.
          </h2>
          <button>Learn More</button>
        </div>
        <i class="bx bx-laptop"></i>
      </div>

      <div>
        <Box
          style={{
            backgroundColor: "#333",
            borderRadius: 4,
            color: "#eee",
            minHeight: 200,

            padding: 12,
            width: "var(--news-box-width)",
            marginLeft: "33.8%",
            position: "inline-block",
          }}
        >
          <div className="newsBox__news">
            <div>
              <h1>Now Opening!!! 9th Floor Campus</h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vel rhoncus ante. Curabitur bibendum libero mi, non tincidunt
                mauris vestibulum eget. Mauris bibendum ipsum vel vulputate
                commodo.
              </h2>
              <button>Learn More</button>
            </div>
            <i class="bx bx-laptop"></i>
          </div>
        </Box>
      </div>

      <div>
        <Box
          style={{
            backgroundColor: "#333",
            borderRadius: 4,
            color: "#eee",
            minHeight: 200,
            padding: 12,
            width: "var(--news-box-width)",
            marginLeft: "67.8%",
            margin: "inline",
          }}
        >
          <div className="newsBox__news">
            <div>
              <h1>Now Opening!!! 9th Floor Campus</h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vel rhoncus ante. Curabitur bibendum libero mi, non tincidunt
                mauris vestibulum eget. Mauris bibendum ipsum vel vulputate
                commodo.
              </h2>
              <button>Learn More</button>
            </div>
            <i class="bx bx-laptop"></i>
          </div>
        </Box>
      </div>
    </div>
  );
}
