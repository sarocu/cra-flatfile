// 1. include the @flatfile/sdk  is installed with npm install @flatfile/sdk
import { Flatfile } from "@flatfile/sdk";

// 2. Pass in your EMBED_ID -> this needs to come from a Portal in dev mode, otherwise you need to generate a JWT:
const EMBED_ID = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";

// 3. a function to trigger `Flatfile.requestDataFromUser` to launch a Portal
export function importData() {
  Flatfile.requestDataFromUser({
    // Development mode = embedId, user, org.
    embedId: EMBED_ID,
    user: { id: 99, name: "John Doe", email: "john@doe.com" },
    org: { id: 77, name: "Acme Inc." },
    // apiUrl: 'http://localhost:3000',
    // mountUrl: 'http://localhost:8080',
    // handle submitted data
    onData(chunk, next) {
      // do something with the data
      console.log(chunk);
      // call next() to proceed with the import
      next();
    },
    onComplete() {
      console.log(`Import complete`);
    },
    onError(error) {
      console.error(error);
    },
  });
}
