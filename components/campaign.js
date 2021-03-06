function Campaign() {
  return (
    <section className="Campaign">
      <div className="About">
        <h3 children="About" />
        <p>
          Genie is a platform for individuals who seek adventure and new
          experiences. It is an application which provides people with the tools
          needed to organize, pursue and share their bucket list. Our
          application will feature a rewards program, a personalized bucket list
          and partnerships with various companies to ensure the best deals for
          travel and activities. Genie will provide various resources in order
          for our customers achieve their goals, unlike iWish which provides
          only a limited bucket list and social media platform option.
        </p>
        <h3 children="Goals" />
        <ul>
          <li>
            A fully functioning app that allows users to keep up to date with
            their bucket lists and share their experiences
          </li>
          <li>
            A social media platform where our group members and some students
            will be able to interact based on their interests and bucket lists
          </li>
          <li>
            A tool for users to be able to fulfill their wishes and bucketlist
            dreams, hence the name Genie
          </li>
        </ul>
        <h3 children="The Vision" />
        <div className="VisionVideo">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tnbLDoDboDQ"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <h3 children="The App" />
        <div
          className="AppPreview"
          data-snack-id="@dtun/bucket-list-app"
          data-snack-platform="ios"
          data-snack-preview="false"
          data-snack-theme="light"
          style={{
            overflow: 'hidden',
            background: '#fafafa',
            border: '1 solid rgba(0,0,0,.08)',
            borderRadius: 4,
            height: 505,
          }}
        />
        <script async src="https://snack.expo.io/embed.js" />
      </div>
      <div className="Support">
        <h3 children="Support" />
        <button>
          <h4 children="Pledge $1 or more" />
          <p>Friends</p>
          <p>Thank you for supporting Genie. We will mail you a postcard.</p>
        </button>
        <button>
          <h4 children="Pledge $5 or more" />
          <p>Travelers</p>
          <p>
            Thank you for supporting Genie. We will provide you with early
            access to the app.
          </p>
        </button>
        <button>
          <h4 children="Pledge $10,000 or more" />
          <p>Investors</p>
          <p>
            Thank you for supporting Genie. We will provide you with early
            access to the app, along with part ownership.
          </p>
        </button>
      </div>
    </section>
  );
}

export default Campaign;
