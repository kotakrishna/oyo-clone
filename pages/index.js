import HomePage from "../Components/HomePage/HomePage";

import { getRooms } from "../redux/actions/roomActions";

import { wrapper } from "../redux/store";
export default function Home() {
  // console.log(newRoom());
  return (
    <>
      <HomePage />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ req, store }) => {
    await store.dispatch(getRooms(req));
  }
);
