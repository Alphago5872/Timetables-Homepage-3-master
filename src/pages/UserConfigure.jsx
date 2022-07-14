import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import WebCard_2 from "../components/Wrapper-Components/Wrapper-2/WebCard_2";

// Data will be fixed later
const UserConfigure = () => {
  return (
    <WebCard>
      <div className="setting">
        <h1>Account Settings</h1>
        <div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Profile Picture"
            />
            <i class="bx bx-edit-alt"></i>
          </div>
          <div>
            <div>
              <h2>Full Name</h2>
              <h3>Nutnornont Chamadol</h3>
            </div>
            <div>
              <h2>Email</h2>
              <h3>nutnornont.nont@enconcept.ac.th</h3>
            </div>
            <div>
              <h2>Newton Senior Highschool</h2>
              <h3>Year 12 / Computer and AI Track</h3>
            </div>
            <div>
              <h2>Password</h2>
              <button>Change Password</button>
            </div>
          </div>
        </div>
      </div>
    </WebCard>
  );
};

export default UserConfigure;
