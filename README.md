1. Setup Nextjs
   - nxp create-next-app@latest ./
   - Would you like to use TypeScript with this project? » No / Yes pick No
   - Would you like to use ESLint with this project? » No / Yes pick No
   - Would you like to use Tailwind CSS with this project? » No / Yes pick Yes
   - Would you like to use `src/` directory with this project? » No / Yes pick No
   - Use App Router (recommended)? » No / Yes pick Yes
   - Would you like to customize the default import alias? » No / Yes pick No
   - next: 13.4.10
   - next.config:
     experimental:{
     serverActions: true
     }
2. Setup Mongodb (mongoose) => npm i mongoose
   - mongoose: "^7.3.4",
   - models (Result)
   - connect to mongoDb
3. Create Result
   - ResultForm.js component
   - createResult Action in actions folder
4. useFormStatus library
   - ButtonSubmit component
5. Get All Results
   - getAllResults Action in actions folder
   - ResultList component
   - ResultCard component
   - if use are using images in your web app do this
     next.config:
     images:{
     domins: ["images.pexels.com"]
     }
6. RevalidationPath("/")
7. Edit Result
   - Context Provider
   - Add Provider onto Layout.js,
   - Add ContextApi onto ResultCard component which is useMyContext();
   - Add ContextApi onto ResultForm component which is useMyContext();
   - updateResult Action
8. Delete Result with useTransition
   - deleteResult Action
9. Delete Result with useOptimistic
   - deleteResult Action
10. Get One Result
    - result/[id]/page.js
    - getOneResult Action
11. Search
    const search = searchParams.search || '';
    Result.find({student_id: {$regex: search }})
12. Sort
    const sort = searchParams.sort || 'createdAt'
    Result.find({student_id: {$regex: search}}).sort(sort)
13. Pagination
    const limit = searchParams.limit x 1 || 2;
    const page = searchParams.page x 1 || 1;
    const skip = searchParams.skip x 1 || limit x (page - 1);

- Result.find({
  $or: [
  {
  student_id: { $regex: searchStId },
  session: { $regex: searchSession },
  classes: { $regex: searchClass },
  },
  ],
  }).sort(sort).limit(limit).skip(skip)

14. Loading + Error
15. Deploy Vercel

NextAuth with MongoDB(mongoose) + Server Actions

I. Main functions.
SignIn with OAuth ( Google )
SignIn with Credentials ( Email, Password )
SignUp with Name, Email, Password
Verify Email
Update Profile
Change Password
Forgot Password
Middleware to secure certain pages
II. Implementation Guide.

Setup Nextjs - npx create-next-app@latest ./
√ Would you like to use TypeScript with this project? ... No
√ Would you like to use ESLint with this project? ... No
√ Would you like to use Tailwind CSS with this project? ... No
√ Would you like to use src/ directory with this project? ... No
√ Use App Router (recommended)? ... Yes
√ Would you like to customize the default import alias? ... No

- next: "13.4.7" or Later
- next.config:
  experimental:{
  serverActions: true
  }
  Setup Libraries - npm i mongoose next-auth bcrypt jsonwebtoken nodemailer

Config Next-Auth - context => Provider - api/auth/[...nextauth]/route.js - .env

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=YOUR_SECRET ( openssl rand -base64 32 )
Header Component and Pages

- Protected (client, server)
- Profile (client, server)
- Signin, SignUp
- Admin Dashboard

SignIn with Oauth ( Google ) without Database

- Import GoogleProvider
- Access to Google Cloud Console to get ( GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET )

https://console.cloud.google.com/
create a new project
APIs & Services => Credentials => CREATE CREDENTIALS => OAuth client ID => Web application => Authorized JavaScript origins ( http://localhost:3000 ) => Authorized redirect URIs ( http://localhost:3000/api/auth/callback/google )

- SignIn Component
- Google Login Button
  SignOut and Middleware keep the site protected
- SignOut component
- Middleware
  export {default} from 'next-auth/middleware'
  export const config = { matcher: ["/profile/:path*", "/protected/:path*", "/dashboard/:path*"] }
- Protected Page Render

Setup MongoDB (mongoose)

- Models ( user )
- Connect to MongoDb

SignIn with Oauth ( Google ) with Database (mongoose)

- callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
  return true;
  },
  async jwt({token, trigger, session}){
  return token;
  },
  async session({session, token}){
  return session;
  }
  }

- async signIn => signInWithOAuth
- async jwt => getUserByEmail
- async session => session.user = token.user

Profile Page Render

- Profile Component
- ProfileCard Component
- nextConfig = {
  images: {
  domains: ["lh3.googleusercontent.com", "images.pexels.com"]
  }
  }
- restart => npm run dev

Update User Profile

- ProfileUpdate Component
- Form Component
- updateUser Action
- Button Component

Update and Re-Render User Profile

- update({name, image}) on Client-Side
- Fix Re-Render on Server Side

The page server side only renders for the first time,
The next times will not re-render, so we will combine with the client side.
The first time will render the server side, the next time will render the client side.

Sign Up with Credentials (name, email, password)

- SignUp Component
- signUpWithCredentials Action

Handle Errors - Errors page

Token + Send Email - .env

TOKEN_SECRET=YOUR_SECRET ( openssl rand -base64 32 )
EMAIL_USER -> open your email and copy and past it as the value
EMAIL_PASSWORD -> click on your google account icon, click on Manage your Google Account, click on Security, search for App password, click on App passwords security, enter password,
select app: Mail
select device: Windows Computer
clic on GENERATE button

Verify Email to complete the registration

- Verify Page
- verifyEmailWithCredentials Action

SignIn with Credentials (email, password)

- import CredentialsProvider -> go to https://next-auth.js.org/configuration/providers/credentials
- async authorize => signInWithCredentials Action

Change Password

- ChangePassword Component
- userActions => changePassword

Forgot Passoword

- authActions => forgotPasswordWithCredentials

Reset Password

- reset_password page
- ResetPassword Component
- authActions => resetPasswordWithCredentials

Middleware protect routes based on role Admin

Deploy Vercel

- run build => test

  - like this C:\ComputerD\nextjs_isale_eko18072023> npm run build
  - C:\ComputerD\nextjs_isale_eko18072023> npm start

- push to github

* create remote repository by going to github.com
* delete the current github folder in your project by going to file explore
* add .env file inside .gitignore file

- deploy vercel
- config NEXTAUTH_URL in Environment Variables => re-deploy
- config in Google Cloud Console
